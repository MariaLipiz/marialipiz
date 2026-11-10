"use client";

import type { ReactNode } from "react";

type ResourceAnchorProps = {
  children: ReactNode;
  className: string;
};

export default function ResourceAnchor({ children, className }: ResourceAnchorProps) {
  function focusEmail() {
    const target = document.getElementById("formulario-recursos");
    if (!target) return;

    window.setTimeout(() => target.focus({ preventScroll: true }), 0);
  }

  return (
    <a className={className} href="#formulario-recursos" onClick={focusEmail}>
      {children}
    </a>
  );
}
