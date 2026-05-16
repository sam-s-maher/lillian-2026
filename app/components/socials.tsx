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
    size: 22,
    hideClass: "",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/people/Lillian-Albazi/100027047394091/",
    icon: "/images/facebook.svg",
    iconWhite: "/images/facebook_white.svg",
    size: 18,
    hideClass: "",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/1FLbD89Lu0ggHTSSmFUe1z",
    icon: "/images/spotify.svg",
    iconWhite: "/images/spotify_white.svg",
    size: 18,
    hideClass: "",
  },
  {
    name: "Bandcamp",
    url: "https://lillianalbazi.bandcamp.com/album/after-image",
    icon: "/images/bandcamp.png",
    iconWhite: "/images/bandcamp_white.png",
    size: 19,
    hideClass: "social-bandcamp",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UC9uUpM3BmJ-meiSJfvnJUfQ",
    icon: "/images/youtube.svg",
    iconWhite: "/images/youtube_white.svg",
    size: 20,
    hideClass: "social-youtube",
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/lillian-albazi",
    icon: "/images/soundcloud.svg",
    iconWhite: "/images/soundcloud_white.svg",
    size: 20,
    hideClass: "social-soundcloud",
  },
  {
    name: "Email",
    url: "mailto:albazi.music@gmail.com",
    icon: null,
    iconWhite: null,
    size: 18,
    hideClass: "",
    isEmail: true,
  },
];

function EmailIcon({ white, size }: { white: boolean; size: number }) {
  const strokeColor = white ? "var(--secondary-text)" : "var(--primary-text)";
  const fillColor = white ? "rgba(255, 255, 255, 0.2)" : "rgba(79, 85, 68, 0.15)";
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" fill={fillColor} stroke={strokeColor} strokeWidth="1.5"/>
      <path d="M7 9.5l5 3 5-3" stroke={strokeColor} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="7" y="8" width="10" height="8" rx="1" stroke={strokeColor} strokeWidth="1.2" fill="none"/>
    </svg>
  );
}

export default function Socials({ white = false, onClick }: SocialsProps) {
  return (
    <div className="flex gap-5 lg:gap-6 items-center flex-wrap">
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
