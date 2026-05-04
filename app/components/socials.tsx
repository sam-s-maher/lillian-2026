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
    size: 36,
    hideClass: "",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/people/Lillian-Albazi/100027047394091/",
    icon: "/images/facebook.svg",
    iconWhite: "/images/facebook_white.svg",
    size: 28,
    hideClass: "",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/1FLbD89Lu0ggHTSSmFUe1z",
    icon: "/images/spotify.svg",
    iconWhite: "/images/spotify_white.svg",
    size: 28,
    hideClass: "",
  },
  {
    name: "Bandcamp",
    url: "https://lillianalbazi.bandcamp.com/album/after-image",
    icon: "/images/bandcamp.png",
    iconWhite: "/images/bandcamp_white.png",
    size: 30,
    hideClass: "social-bandcamp",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UC9uUpM3BmJ-meiSJfvnJUfQ",
    icon: "/images/youtube.svg",
    iconWhite: "/images/youtube_white.svg",
    size: 32,
    hideClass: "social-youtube",
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/lillian-albazi",
    icon: "/images/soundcloud.svg",
    iconWhite: "/images/soundcloud_white.svg",
    size: 32,
    hideClass: "social-soundcloud",
  },
];

export default function Socials({ white = false, onClick }: SocialsProps) {
  return (
    <div className="flex gap-3 lg:gap-5 items-center flex-wrap">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className={`flex items-center ${social.hideClass}`}
          onClick={onClick}
        >
          <Image
            src={white ? social.iconWhite : social.icon}
            alt={social.name}
            width={social.size}
            height={social.size}
            className="object-contain"
          />
        </a>
      ))}
    </div>
  );
}
