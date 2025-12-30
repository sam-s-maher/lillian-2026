"use client";


import Image from "next/image";

export default function Page() {
  return (
    <>
      <nav className="flex justify-between items-center h-6 px-5 w-full">
        <div className="flex items-center justify-center" style={{ transform: 'rotate(180deg)' }}>
          <Image src="/images/arrow_right.png" alt="Previous" width={40} height={20} />
        </div>
        <div className="uppercase underline">Gigs</div>
        <div className="flex items-center justify-center">
          <Image src="/images/arrow_right.png" alt="Next" width={40} height={20} />
        </div>
      </nav>
    </>
  );
}
