import Image from "next/image";

interface SocialsProps {
  white?: boolean;
  onClick?: () => void;
}

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/lalbazi",
    icon: "/images/instagram.png",
    iconWhite: "/images/instagram_white.png",
    size: 24,
    hideClass: "",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/people/Lillian-Albazi/100027047394091/",
    icon: "/images/facebook.svg",
    iconWhite: "/images/facebook_white.svg",
    size: 24,
    hideClass: "",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/1FLbD89Lu0ggHTSSmFUe1z",
    icon: "/images/spotify.svg",
    iconWhite: "/images/spotify_white.svg",
    size: 24,
    hideClass: "",
  },
  {
    name: "Bandcamp",
    url: "https://lillianalbazi.bandcamp.com/album/after-image",
    icon: "/images/bandcamp.png",
    iconWhite: "/images/bandcamp_white.png",
    size: 24,
    hideClass: "social-bandcamp",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UC9uUpM3BmJ-meiSJfvnJUfQ",
    icon: null,
    iconWhite: null,
    size: 24,
    hideClass: "social-youtube",
    isYouTube: true,
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/lillian-albazi",
    icon: null,
    iconWhite: null,
    size: 24,
    hideClass: "social-soundcloud",
    isSoundCloud: true,
  },
  {
    name: "Email",
    url: "mailto:albazi.music@gmail.com",
    icon: null,
    iconWhite: null,
    size: 24,
    hideClass: "",
    isEmail: true,
  },
];

function SoundCloudIcon({ white, size }: { white: boolean; size: number }) {
  const fillColor = white ? "var(--secondary-text)" : "var(--primary-text)";
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="-143 145 512 512" 
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor}
    >
      <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M-11.1,432.9  c-0.1,0.6-0.5,1-1,1s-1-0.4-1-1l-1.9-14l1.9-14.2c0.1-0.6,0.5-1,1-1s0.9,0.4,1,1l2.2,14.2L-11.1,432.9z M-1.6,441.4  c-0.1,0.6-0.5,1-1.1,1c-0.5,0-1-0.4-1.1-1l-2.5-22.5l2.5-23c0.1-0.6,0.5-1,1.1-1c0.5,0,1,0.4,1.1,1l2.9,23L-1.6,441.4z M8.7,445.3  c-0.1,0.7-0.6,1.2-1.3,1.2c-0.7,0-1.2-0.5-1.3-1.3l-2.4-26.3l2.4-27.3c0.1-0.7,0.6-1.3,1.3-1.3c0.7,0,1.2,0.5,1.3,1.3l2.7,27.3  L8.7,445.3z M19.1,446.1c-0.1,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.4-0.6-1.5-1.5L13.8,419l2.3-28c0.1-0.9,0.7-1.5,1.5-1.5  c0.8,0,1.4,0.6,1.5,1.5l2.6,28L19.1,446.1z M29.5,446.3c-0.1,1-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.7-1.7-1.7L24,419l2.1-26  c0.1-1,0.8-1.7,1.7-1.7c0.9,0,1.6,0.7,1.7,1.7l2.4,26L29.5,446.3z M40,446.3c-0.1,1.1-0.9,1.9-1.9,1.9s-1.9-0.8-1.9-1.9l-2-27.3  l2-42.3c0.1-1.1,0.9-1.9,1.9-1.9s1.9,0.8,1.9,1.9l2.3,42.3L40,446.3z M50.6,446.2c-0.1,1.2-1,2.1-2.2,2.1s-2.1-0.9-2.2-2.1L44.3,419  l1.9-52c0.1-1.2,1-2.1,2.2-2.1s2.1,0.9,2.2,2.1l2.1,52L50.6,446.2z M61.3,445.9c-0.1,1.3-1.1,2.3-2.4,2.3s-2.3-1-2.4-2.3L54.7,419  l1.8-56.3c0-1.3,1.1-2.4,2.4-2.4s2.3,1,2.4,2.4l2,56.3L61.3,445.9z M72.1,445.7c-0.1,1.4-1.2,2.6-2.6,2.6c-1.4,0-2.5-1.1-2.6-2.6  L65.3,419l1.6-58.2c0-1.4,1.2-2.6,2.6-2.6s2.5,1.1,2.6,2.6l1.8,58.2L72.1,445.7z M82.9,445.5c0,1.5-1.3,2.8-2.8,2.8  s-2.8-1.2-2.8-2.8L75.8,419l1.5-56.7c0-1.6,1.3-2.8,2.8-2.8s2.8,1.2,2.8,2.8l1.7,56.7L82.9,445.5z M93.9,445.3c0,1.7-1.4,3-3,3  c-1.7,0-3-1.3-3-3L86.5,419l1.4-54.7c0-1.7,1.4-3,3-3c1.7,0,3,1.3,3,3l1.5,54.7L93.9,445.3z M104.9,445.1c0,1.8-1.5,3.2-3.2,3.2  c-1.8,0-3.2-1.5-3.2-3.2L97.3,419l1.2-65c0-1.8,1.5-3.2,3.2-3.2c1.8,0,3.2,1.4,3.2,3.2l1.4,65L104.9,445.1z M115.9,444.8  c0,1.9-1.6,3.4-3.5,3.4c-1.9,0-3.4-1.6-3.5-3.4l-1.4-25.7l1.4-70.9c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.4,1.6,3.5,3.5l1.5,70.9  L115.9,444.8z M209.5,448.4c-0.6,0-87.2,0-87.3,0c-1.9-0.2-3.4-1.8-3.4-3.7v-99.9c0-1.8,0.7-2.8,3-3.7c6.1-2.4,13-3.8,20.1-3.8  c29,0,52.8,22.3,55.3,50.6c3.7-1.6,7.9-2.4,12.2-2.4c17.4,0,31.5,14.1,31.5,31.5C241,434.3,226.9,448.4,209.5,448.4z"/>
    </svg>
  );
}

function EmailIcon({ white, size }: { white: boolean; size: number }) {
  const fillColor = white ? "var(--secondary-text)" : "var(--primary-text)";
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 20 20" 
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor}
    >
      <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM6.231 7h7.52c.399 0 .193.512-.024.643-.217.13-3.22 1.947-3.333 2.014s-.257.1-.403.1a.793.793 0 0 1-.402-.1L6.255 7.643C6.038 7.512 5.833 7 6.231 7zM14 12.5c0 .21-.252.5-.444.5H6.444C6.252 13 6 12.71 6 12.5V8.853c0-.092-.002-.211.172-.11l3.417 2.015a.69.69 0 0 0 .402.1c.146 0 .252-.011.403-.1l3.434-2.014c.174-.102.172.018.172.11V12.5z"/>
    </svg>
  );
}

function YouTubeIcon({ white, size }: { white: boolean; size: number }) {
  const circleColor = white ? "var(--secondary-text)" : "var(--primary-text)";
  const playColor = white ? "var(--secondary-background)" : "var(--primary-background)";
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 72 72" 
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path d="M36,72 L36,72 C55.882251,72 72,55.882251 72,36 L72,36 C72,16.117749 55.882251,-3.65231026e-15 36,0 L36,0 C16.117749,3.65231026e-15 -2.4348735e-15,16.117749 0,36 L0,36 C2.4348735e-15,55.882251 16.117749,72 36,72 Z" fill={circleColor}/>
      <path d="M31.044,42.269916 L31.0425,28.6877416 L44.0115,35.5022437 L31.044,42.269916 Z M59.52,26.3341627 C59.52,26.3341627 59.0505,23.003199 57.612,21.5363665 C55.7865,19.610299 53.7405,19.6012352 52.803,19.4894477 C46.086,19 36.0105,19 36.0105,19 L35.9895,19 C35.9895,19 25.914,19 19.197,19.4894477 C18.258,19.6012352 16.2135,19.610299 14.3865,21.5363665 C12.948,23.003199 12.48,26.3341627 12.48,26.3341627 C12.48,26.3341627 12,30.2467232 12,34.1577731 L12,37.8256098 C12,41.7381703 12.48,45.6492202 12.48,45.6492202 C12.48,45.6492202 12.948,48.9801839 14.3865,50.4470165 C16.2135,52.3730839 18.612,52.3126583 19.68,52.5135736 C23.52,52.8851913 36,53 36,53 C36,53 46.086,52.9848936 52.803,52.4954459 C53.7405,52.3821478 55.7865,52.3730839 57.612,50.4470165 C59.0505,48.9801839 59.52,45.6492202 59.52,45.6492202 C59.52,45.6492202 60,41.7381703 60,37.8256098 L60,34.1577731 C60,30.2467232 59.52,26.3341627 59.52,26.3341627 L59.52,26.3341627 Z" fill={playColor}/>
    </svg>
  );
}

export default function Socials({ white = false, onClick }: SocialsProps) {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target={social.isEmail ? undefined : "_blank"}
          rel={social.isEmail ? undefined : "noopener noreferrer"}
          aria-label={social.name}
          className={`flex items-center ${social.hideClass}`}
          onClick={onClick}
        >
          {social.isEmail ? (
            <EmailIcon white={white} size={social.size} />
          ) : social.isSoundCloud ? (
            <SoundCloudIcon white={white} size={social.size} />
          ) : social.isYouTube ? (
            <YouTubeIcon white={white} size={social.size} />
          ) : (
            <Image
              src={white ? social.iconWhite! : social.icon!}
              alt={social.name}
              width={social.size}
              height={social.size}
              className="object-contain"
            />
          )}
        </a>
      ))}
    </div>
  );
}
