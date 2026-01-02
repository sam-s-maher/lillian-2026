import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative w-full h-[55vh] lg:w-1/2 lg:h-screen">
      <Image
        className="lg:py-5"
        src="/images/rk_edited.jpg"
        alt="Hero image"
        fill
        style={{ objectFit: 'cover', objectPosition: 'top' }}
        priority
      />
    </div>
  );
}
