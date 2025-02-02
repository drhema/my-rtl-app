// src/lib/gtm.ts

// Constants
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

// Type definitions for data layer events
export interface DataLayerEvent {
  event: string;
  page?: {
    title?: string;
    url?: string;
    language?: string;
  };
  button?: {
    id?: string;
    label?: string;
  };
  form?: {
    id?: string;
    fields?: string[];
  };
  [key: string]: any;
}

// Initialize data layer array
export const initDataLayer = () => {
  if (!GTM_ID) {
    console.warn('GTM_ID not found in environment variables');
    return '';
  }

  return `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page: {
        title: document.title,
        url: window.location.pathname,
        language: document.documentElement.lang || 'en',
      },
    });
  `;
};

// Push events to data layer
export const pushToDataLayer = (eventData: DataLayerEvent) => {
  if (!GTM_ID) {
    console.warn('GTM_ID not found in environment variables');
    return;
  }

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventData);
  }
};

// Common event pushers
export const trackPageView = (pathname: string) => {
  pushToDataLayer({
    event: 'page_view',
    page: {
      title: document.title,
      url: pathname,
      language: document.documentElement.lang || 'en',
    },
  });
};

export const trackButtonClick = (buttonId: string, buttonLabel: string) => {
  pushToDataLayer({
    event: 'button_click',
    button: {
      id: buttonId,
      label: buttonLabel,
    },
  });
};

export const trackFormSubmit = (formId: string, fields: string[]) => {
  pushToDataLayer({
    event: 'form_submit',
    form: {
      id: formId,
      fields,
    },
  });
};