'use client';

import { useState, useRef, useEffect } from 'react';
import locale from '../../../LOCALE.id.json';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatWindowProps {
  isAnonymous: boolean;
  onClose: () => void;
}

export default function ChatWindow({ isAnonymous, onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const checkForEmergencyKeywords = (message: string): boolean => {
    const keywords = [
      'bunuh diri', 'self harm', 'suicide', 'mati', 'tenggelam',
      'loncat', 'racun', 'overdose', 'emergency', 'darurat'
    ];
    return keywords.some(keyword =>
      message.toLowerCase().includes(keyword)
    );
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    // Immediately add user message to the conversation
    setMessages(prev => [...prev, userMessage]);
    const messageContent = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Check for emergency keywords
    if (checkForEmergencyKeywords(messageContent)) {
      setShowEmergency(true);
      setIsTyping(false);
      return;
    }

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            ...messages.map(msg => ({
              role: msg.sender,
              content: msg.content
            })),
            { role: 'user', content: messageContent }
          ]
        })
      });

      const data = await res.json();

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: data.result || data.message || 'Maaf, saya tidak dapat memproses pesan Anda saat ini.',
        sender: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Maaf, terjadi kesalahan saat memproses pesan Anda.',
        sender: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[80vh]">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-bb-secondary/10">
        <h2 className="text-xl font-bold text-bb-secondary">
          {locale.ai_consult.title}
        </h2>
        <button
          onClick={onClose}
          className="text-bb-secondary/60 hover:text-bb-secondary transition-colors"
          aria-label={locale.common.close}
        >
          ✕
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4" role="log" aria-live="polite">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-soft ${
                message.sender === 'user'
                  ? 'bg-[#f4f4ee] text-bb-secondary'
                  : 'bg-bb-primary text-bb-secondary'
              }`}
            >
              <p className="leading-relaxed">{message.content}</p>
              <span className="text-xs opacity-60 mt-2 block">
                {message.timestamp.toLocaleTimeString('id-ID', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-bb-primary text-bb-secondary p-4 rounded-soft">
              <p className="text-sm">{locale.ai_consult.typing}</p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Emergency Card */}
      {showEmergency && (
        <div className="mx-6 mb-4 p-4 bg-red-50 border border-red-200 rounded-soft">
          <h3 className="font-bold text-red-800 mb-2">
            {locale.ai_consult.emergency_title}
          </h3>
          <p className="text-red-700 text-sm mb-3">
            {locale.ai_consult.emergency_desc}
          </p>
          <p className="font-semibold text-red-800 mb-3">
            {locale.ai_consult.emergency_hotline}
          </p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-pill text-sm hover:bg-red-700 transition-colors">
            {locale.ai_consult.emergency_cta}
          </button>
        </div>
      )}

      {/* Composer */}
      <div className="p-6 border-t border-bb-secondary/10">
        <div className="flex space-x-3">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={locale.ai_consult.composer_placeholder}
            className="flex-1 px-4 py-3 border border-bb-secondary/20 rounded-pill focus:outline-none focus:ring-2 focus:ring-bb-secondary/20"
            disabled={showEmergency}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || showEmergency}
            className="btn-primary px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {locale.ai_consult.send}
          </button>
        </div>
      </div>
    </div>
  );
}
