'use client';

import React from 'react';

type Props = {
  targetId: string;
  children: React.ReactNode;
  className?: string;
};

export default function ScrollButton({ targetId, children, className }: Props) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
        const header = document.querySelector('header');

      const headerOffset = header ? header.getBoundingClientRect().height : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}