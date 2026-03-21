"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function ThankYouTracker({ event }: { event: string }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "conversion",
        conversion_type: event,
      });
    }
  }, [event]);

  return null;
}
