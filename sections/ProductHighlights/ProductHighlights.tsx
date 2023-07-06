import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

import { useId } from "preact/hooks";

export interface Content {
  title?: string;
  subtitle?: string;
  image?: {
    mobile?: LiveImage;
    desktop?: LiveImage;
    altText?: string;
  };
}

export interface Props {
  title: string;
  highlights?: Content[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

const DEFAULT_PROPS: Props = {
  title: "",
  highlights: [
    {
      title: "",
      subtitle: "",
      image: {
        desktop:
          "https://www.ofertasimcauto.com.br/assets/uploads/nt_veiculos_destaques/26364-design.jpg",
        altText: "capybara",
      },
    },
  ],
};

function ProductHighlights(props: Props) {
  const {
    title,
    highlights,
    interval,
  } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const id = useId();

  return (
    <div class="bg-[#0c1421] pt-[50px] pb-[50px]">
      <div class=" md:max-w-[1170px] text-center">
        <div class="highlightsTitle mb-[50px]">
          <div class="flex justify-center">
            <Image
              src={"https://www.ofertasimcauto.com.br/assets/uploads/nt_cores/14184-logo.png"}
              alt="Imagem de marca"
              width={71}
              height={26}
              loading="lazy"
            />
          </div>
          <h4 class="text-[30px] uppercase text-secondary-content">{title}</h4>
        </div>
        <div class="pr-[20px] pl-[20px]">
          <Slider class="carousel carousel-center scrollbar-none w-full">
            {highlights?.map((highlight, index) => (
              <Slider.Item
                index={index}
                class="carousel-item w-full justify-center"
              >
                <div class="grid md:grid-cols-2">
                  <div class="md:pr-5">
                    <p class="text-[12px] text-[#d19631] text-center md:text-right uppercase mb-[10px] font-bold">
                      {highlight.title}
                    </p>
                    <p class="text-secondary-content text-[17px] text-center uppercase">
                      {highlight.subtitle}
                    </p>
                  </div>
                  <div class="mt-[30px] mb:mt-[auto]">
                    <img
                      class=""
                      src={highlight?.image?.desktop
                        ? highlight?.image?.desktop
                        : highlight?.image?.mobile}
                      alt={highlight?.image?.altText}
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Slider.Item>
            ))}
          </Slider>

          <SliderJS rootId={id} interval={interval && interval * 1} />
        </div>
      </div>
    </div>
  );
}

export default ProductHighlights;
