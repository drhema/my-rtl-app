// src/components/common/TrackedButton.tsx
'use client';

import { trackButtonClick } from '@/lib/gtm';

interface TrackedButtonProps {
  id: string;
  label: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export function TrackedButton({
  id,
  label,
  onClick,
  className = '',
  children,
}: TrackedButtonProps) {
  const handleClick = () => {
    trackButtonClick(id, label);
    onClick?.();
  };

  return (
    <button
      id={id}
      onClick={handleClick}
      className={`btn ${className}`}
      aria-label={label}
    >
      {children}
    </button>
  );
}