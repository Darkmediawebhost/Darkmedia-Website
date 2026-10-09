"use client";

import React from "react";

export const SlideUpText = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <div className={className} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
};
