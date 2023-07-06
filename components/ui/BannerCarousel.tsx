import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import { useId } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

/**
 * @titleBy alt
 */
export interface Banner {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
  /** @description Image's alt text */
  alt: string;
  action?: {
    /** @description when user clicks on the image, go to this link */
    href: string;
    /** @description Image text title */
    title: string;
    /** @description Image text subtitle */
    subTitle: string;
    /** @description Button label */
    label: string;
  };
}

export interface Props {
  images?: Banner[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function BannerItem({ image, lcp }: { image: Banner; lcp?: boolean }) {
  const {
    alt,
    mobile,
    desktop,
    action,
  } = image;

  return (
    <a
      href={action?.href ?? "#"}
      aria-label={action?.label}
      class="relative h-[155px] md:h-[100%] overflow-y-hidden w-full"
    >
      <Picture preload={lcp}>
        <Source
          media="(max-width: 767px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={mobile}
          width={390}
          height={155}
        />
        <img
          class="object-cover w-full h-full"
          loading={lcp ? "eager" : "lazy"}
          src={desktop}
          alt={alt}
        />
      </Picture>
    </a>
  );
}

function Dots({ images, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel flex justify-center md:justify-start col-span-full gap-1 z-10 row-start-4 flex absolute bottom-[0] w-full md:ml-[25px]">
        {images?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-3">
                <div
                  class="w-[72px] md:w-[175px] h-[5px] group-disabled:animate-progress bg-[#2c2c25] from-base-100 from-[length:var(--dot-progress)] to-[rgba(255,255,255,0.4)] to-[length:var(--dot-progress)]"
                  style={{ animationDuration: `${interval}s` }}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function BannerCarousel({ images, preload, interval }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="md:max-w-[1170px]"
    >
      <div class="relative">
        <Slider class="carousel carousel-center w-full">
          {images?.map((image, index) => (
            <Slider.Item index={index} class="carousel-item w-full">
              <BannerItem image={image} lcp={index === 0 && preload} />
            </Slider.Item>
          ))}
        </Slider>

        <Dots images={images} interval={interval} />
      </div>

      <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
    </div>
  );
}

export default BannerCarousel;
