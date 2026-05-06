'use client';

interface MarqueeProps {
  items: string[];
  separator?: string;
  className?: string;
  reverse?: boolean;
}

export default function Marquee({
  items,
  separator = ' · ',
  className = '',
  reverse = false,
}: MarqueeProps) {
  const content = items.join(separator) + separator;

  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${className}`}
      aria-hidden="true"
    >
      <div
        className={`inline-flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        <span className="inline-block pr-4">{content}</span>
        <span className="inline-block pr-4">{content}</span>
      </div>
    </div>
  );
}
