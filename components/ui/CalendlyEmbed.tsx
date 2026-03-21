"use client";

import { useEffect } from "react";

export function CalendlyEmbed({ url }: { url: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-2xl overflow-hidden border border-dark-border"
      data-url={`${url}?background_color=1e1e1e&text_color=f0ede8&primary_color=34d399`}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
