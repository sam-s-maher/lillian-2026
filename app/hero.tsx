import Image from 'next/image'

export default function Hero() {
  return (
    <div className="w-full h-[55vh] relative">
      <Image
        src="/images/rk_edited.jpg"
        alt="Hero image"
        fill
        style={{ objectFit: 'cover', objectPosition: 'top' }}
        priority
      />
    </div>
  );
}
