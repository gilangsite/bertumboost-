// Analytics utilities for Bertumboost
// Supports GA4 and fallback to console.log for development

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export interface AnalyticsEvent {
  name: string;
  parameters?: Record<string, any>;
}

// Track custom events
export function trackEvent(event: AnalyticsEvent) {
  const { name, parameters = {} } = event;

  // GA4 tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, {
      ...parameters,
      timestamp: new Date().toISOString(),
    });
  }

  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] ${name}:`, parameters);
  }
}

// Predefined events
export const analyticsEvents = {
  aiConsultStarted: (sessionId: string, isAnonymous: boolean) =>
    trackEvent({
      name: 'ai_consult_started',
      parameters: { sessionId, isAnonymous }
    }),

  aiMessageSent: (sessionId: string) =>
    trackEvent({
      name: 'ai_message_sent',
      parameters: { sessionId }
    }),

  aiConsultCompleted: (sessionId: string, duration: number) =>
    trackEvent({
      name: 'ai_consult_completed',
      parameters: { sessionId, duration }
    }),

  ctaJoinWorkshopClick: () =>
    trackEvent({
      name: 'cta_join_workshop_click'
    }),

  escalationTriggered: (sessionId: string) =>
    trackEvent({
      name: 'escalation_triggered',
      parameters: { sessionId }
    }),

  pageView: (page: string) =>
    trackEvent({
      name: 'page_view',
      parameters: { page_title: page }
    }),

  buttonClick: (buttonName: string, location: string) =>
    trackEvent({
      name: 'button_click',
      parameters: { button_name: buttonName, location }
    })
};

// Initialize analytics (call this in _app.tsx or layout)
export function initAnalytics() {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_ANALYTICS_ID) {
    // GA4 initialization would go here
    // For now, just log that analytics is ready
    console.log('[Analytics] Initialized');
  }
}
