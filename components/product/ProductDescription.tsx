import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import { useId } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Content {
  name?: string;
  buttonText: string;
  specification: string[];
  image?: {
    mobile?: LiveImage;
    desktop?: LiveImage;
  };
}

export interface Props {
  title: string;
  description?: Content[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

const DEFAULT_PROPS: Props = {
  title: "",
  description: [
    {
      name: "",
      buttonText: "",
      specification: ["", ""],
      image: {
        desktop:
          "https://www.ofertasimcauto.com.br/assets/uploads/nt_veiculos_destaques/26364-design.jpg",
      },
    },
  ],
};

function ProductDescription(props: Props) {
  const {
    title,
    description,
    interval,
  } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const id = useId();

  return (
    <div class="md:max-w-[1170px] md:pl-[15px]">
      <div class="p-[20px] mb-[30px] md:text-center">
        <Slider class="carousel carousel-center scrollbar-none w-full md:w-[auto]">
          {description?.map((desc, index) => (
            <Slider.Item
              index={index}
              class="carousel-item w-full justify-center"
            >
              <div class="">
                <h3 class="text-[26px] md:text-[36px] font-bold text-center md:max-w-[70%] md:mr-[auto] md:ml-[auto] md:mb-[20px]">
                  {title}
                </h3>

                <div class="md:grid md:grid-cols-2">
                  <div class="">
                    <div class="flex justify-center">
                      <Image
                        src={"https://www.ofertasimcauto.com.br/assets/uploads/nt_veiculos_versoes/28524-mt.jpg"}
                        alt="Imagem de marca"
                        width={224}
                        height={120}
                        loading="lazy"
                        class="border-b-[1px] border-[#eee]"
                      />
                    </div>
                    <h4 class="text-center text-[18px] font-bold m-[10px]">
                      {desc.name}
                    </h4>
                    <div class="flex justify-between">
                      <div></div>
                      <button class="btn uppercase bg-[#d19631] text-[10px] text-secondary-content h-[32px]">
                        {desc.buttonText} <i class="fa"></i>
                      </button>
                    </div>
                  </div>
                  <div class="">
                    <ul class="border-t-[1px] border-b-[1px] pt-[5px] pb-[5px] mt-[15px] mb-[15px] border-[#000]">
                      {desc.specification.map((spec, index) => (
                        <li class="text-[12px] md:text-left font-bold">
                          <i class="fa fa-check text-[#d19631] font-bold"></i>
                          {" "}
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Slider.Item>
          ))}
        </Slider>
        <SliderJS rootId={id} interval={interval && interval * 1} />
      </div>
    </div>
  );
}

export default ProductDescription;
