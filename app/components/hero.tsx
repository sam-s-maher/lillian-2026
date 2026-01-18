import Image from 'next/image'

export default function Hero() {
  return (
    <div className="lg:fixed w-full h-[45vh] h-[45svh] lg:right-0 lg:top-0 lg:w-2/3 lg:h-full lg:p-[4mm]">
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
