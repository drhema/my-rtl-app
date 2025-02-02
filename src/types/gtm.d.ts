// src/types/gtm.d.ts

interface Window {
    dataLayer?: any[];
  }
  
  // You can extend this as needed
  declare global {
    interface Window {
      dataLayer?: any[];
    }
  }