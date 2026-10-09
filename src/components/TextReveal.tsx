"use client";

export const TextReveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: string,
  delay?: number,
  className?: string,
}) => {
  void delay;
  return (
    <div className={className}>
      {children}
    </div>
  );
};
