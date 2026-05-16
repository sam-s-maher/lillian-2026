interface EnvelopeIconProps {
  className?: string;
}

export default function EnvelopeIcon({ className = "w-4 h-4 translate-y-0.5" }: EnvelopeIconProps) {
  return (
    <svg 
      className={className} 
      fill="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z" fill="none"/>
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 9.5l5 3 5-3" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="7" y="8" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    </svg>
  );
}