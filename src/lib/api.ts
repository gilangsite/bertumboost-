// Client-side API utilities for Bertumboost

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export interface ChatSession {
  id: string;
  isAnonymous: boolean;
  createdAt: Date;
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Create new chat session
export async function createChatSession(isAnonymous: boolean): Promise<ApiResponse<ChatSession>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/chat/session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isAnonymous }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Failed to create chat session:', error);
    return {
      success: false,
      error: 'Failed to create chat session. Please try again.'
    };
  }
}

// Send message and get response
export async function sendChatMessage(
  sessionId: string,
  message: string
): Promise<ApiResponse<ChatMessage>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/chat/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sessionId, message }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Failed to send message:', error);
    return {
      success: false,
      error: 'Failed to send message. Please try again.'
    };
  }
}

// Handle escalation
export async function escalateChat(
  sessionId: string,
  transcript: ChatMessage[]
): Promise<ApiResponse<{ escalated: boolean }>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/chat/escalate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sessionId, transcript }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Failed to escalate chat:', error);
    return {
      success: false,
      error: 'Failed to process escalation. Please contact support directly.'
    };
  }
}
