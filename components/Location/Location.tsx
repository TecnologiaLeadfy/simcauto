import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import { useId } from "preact/hooks";

export interface Address {
  title?: string;
  address?: string;
  telephone?: string;
}

export interface Props {
  title: string;
  subtitle: string;
  addresses?: Address[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Location(
  {
    title = "Localização",
    subtitle = "Encontre a loja mais perto de você:",
    interval = 5,
    addresses = [],
  }: Props,
) {
  const id = useId();

  return (
    <div class="bg-[#2c2c25]">
      <div class="pt-6 pb-6 md:max-w-[1170px] md:pl-[15px]">
        <div class="container">
          <div class="text-center">
            <div class="flex align-center justify-center">
              <Image
                src={"https://www.ofertasimcauto.com.br/assets/uploads/nt_cores/01477-1461814992794_copiar.png"}
                alt="Imagem de localização"
                width={56}
                height={61}
                loading="lazy"
              />
              <h3 class="text-secondary-content text-[36px] font-bold">
                {title}
              </h3>
            </div>
            <p class="text-secondary-content text-[13px] mb-[70px]">
              {subtitle}
            </p>
          </div>
          <div>
            <Slider class="carousel carousel-center scrollbar-none w-full">
              {addresses.map((address, index) => (
                <Slider.Item
                  index={index}
                  class="carousel-item w-full md:w-[25%]"
                >
                  <div class="block text-center bg-[#d19631] p-[20px] mr-[20px] md:mr-[0] ml-[20px] md:ml-[0]">
                    <h4 class="text-secondary-content text-[18px] mb-[10px] font-bold">
                      {address.title}
                    </h4>
                    <p class="text-secondary-content">{address.address}</p>
                    <p class="text-secondary-content text-[16px] mt-[10px] font-bold">
                      {address.telephone}
                    </p>
                  </div>
                </Slider.Item>
              ))}
            </Slider>

            <SliderJS rootId={id} interval={interval && interval * 1e3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
