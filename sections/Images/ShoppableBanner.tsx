import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  image: {
    mobile: LiveImage;
    desktop?: LiveImage;
    altText: string;
  };

  pins: Pin[];

  text?: string;
  title?: string;
  textComplement?: string;
  textSecundaryComplement?: string;
  link?: {
    text: string;
    href: string;
  };
}

export interface Pin {
  mobile: {
    x: number;
    y: number;
  };
  desktop?: {
    x: number;
    y: number;
  };
  link: string;
  label: string;
}

const DEFAULT_PROPS: Props = {
  link: {
    href: "#",
    text: "Ver agora",
  },
  pins: [],
  image: {
    mobile:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/aa071a4a-fd37-4efa-abf1-f736af0409a3",
    altText: "capybara",
  },
};

export default function ShoppableBanner(props: Props) {
  const {
    link,
    text,
    title,
    textComplement,
    textSecundaryComplement,
    image,
    pins,
  } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div class="relative">
      <figure class="relative">
        <Picture>
          <Source
            media="(max-width: 767px)"
            src={image?.mobile}
            width={150}
            height={150}
          />
          <Source
            media="(min-width: 768px)"
            src={image?.desktop ? image?.desktop : image?.mobile}
            width={1920}
            height={540}
          />
          <img
            class="w-full object-cover"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={image?.mobile}
            alt={image?.altText}
            decoding="async"
            loading="lazy"
          />
        </Picture>
        {pins.map(({ mobile, desktop, link, label }) => (
          <>
            <a
              href={link}
              class="absolute w-min btn btn-accent rounded-full hover:rounded text-accent no-animation md:scale-[30%] hover:text-accent-content hover:scale-125 sm:hidden"
              style={{
                left: `${mobile.x}%`,
                top: `${mobile.y}%`,
              }}
            >
              <span>{label}</span>
            </a>
            <a
              href={link}
              class="absolute w-min btn btn-accent rounded-full hover:rounded text-accent no-animation md:scale-[30%] hover:text-accent-content hover:scale-125 hidden sm:inline-flex"
              style={{
                left: `${desktop?.x ?? mobile.x}%`,
                top: `${desktop?.y ?? mobile.y}%`,
              }}
            >
              <span>{label}</span>
            </a>
          </>
        ))}
      </figure>
      <div class="absolute w-[100%] top-[0] md:top-[auto] md:bottom-[0]">
        <div class="flex justify-center">
          <h2 class="text-[#fff] text-[50px] uppercase shadow-[2px 2px 3px #000000] md:absolute md:right-[50%] md:mr-[10%] md:bottom-[-15px]">
            {text}
          </h2>
          <div class="hidden md:block md:absolute md:left-[50%] md:ml-[10%] md:bottom-0">
            <p class="text-[#ffb300] text-[16px] shadow-[2px 2px 3px #000000]">
              {title}
            </p>
            <p class="text-[#fff] text-[16px] shadow-[2px 2px 3px #000000]">
              {textComplement}
            </p>
            <p class="text-[#fff] text-[16px] shadow-[2px 2px 3px #000000]">
              {textSecundaryComplement}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
