import Image from "next/image";

interface SocialsProps {
  white?: boolean;
  onClick?: () => void;
}

export default function Socials({ white = false, onClick }: SocialsProps) {
  return (
    <div className="flex gap-7 items-center">
      <a
        href="https://lillianalbazi.bandcamp.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bandcamp"
        className="flex items-center"
        onClick={onClick}
      >
        <Image
          src={white ? "/images/bandcamp_white.png" : "/images/bandcamp.png"}
          alt="Bandcamp"
          width={30}
          height={30}
          className="object-contain"
        />
      </a>
      <a
        href="https://www.instagram.com/lalbazi/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex items-center"
        onClick={onClick}
      >
        <span className="inline-flex items-center justify-center rounded-full h-7 w-7">
          <Image
            src={white ? "/images/instagram_white.png" : "/images/instagram.png"}
            alt="Instagram"
            width={36}
            height={36}
            className="object-contain"
          />
        </span>
      </a>
    </div>
  );
}
