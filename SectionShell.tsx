import type { ReactNode } from "react";

/** Centered max-w-5xl section wrapper with consistent vertical rhythm (STYLE_GUIDE.md §8). */
export function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-5xl scroll-mt-20 px-4 py-12 sm:px-6 sm:py-20 ${className}`}
    >
      {children}
    </section>
  );
}
