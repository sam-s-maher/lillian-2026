import Image from 'next/image'

interface HeroProps {
  variant?: 'mobile' | 'desktop';
}

export default function Hero({ variant = 'desktop' }: HeroProps) {
  const imageSrc = variant === 'mobile' 
    ? '/images/rk_edited_mobile.png' 
    : '/images/rk_edited_desktop.png';

  return (
    <div className="w-full h-full lg:p-[var(--desktop-padding)] lg:fixed lg:right-0 lg:top-0 lg:w-2/3">
      <div className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt="Hero image"
          fill
          className="object-cover object-top lg:object-[center_20%] image-fade-auto"
          priority
        />
      </div>
    </div>
  );
}
