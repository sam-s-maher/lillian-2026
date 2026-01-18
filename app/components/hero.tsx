import Image from 'next/image'

export default function Hero() {
  return (
    <div className="w-full h-full lg:p-[var(--desktop-padding)] lg:fixed lg:right-0 lg:top-0 lg:w-2/3">
      <div className="relative w-full h-full">
        <Image
          src="/images/rk_edited.jpg"
          alt="Hero image"
          fill
          className="object-cover object-top lg:object-[center_20%] image-fade-auto"
          priority
        />
      </div>
    </div>
  );
}
