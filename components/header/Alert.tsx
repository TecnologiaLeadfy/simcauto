import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "preact/hooks";
import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  alerts: string[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Alert({ alerts = [], interval = 5 }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="h-[70px] relative md:absolute md:top-[1.5rem] md:left-[15rem]"
    >
      <Slider class="carousel carousel-center w-screen gap-6 scrollbar-none">
        {alerts.map((alert, index) => (
          <Slider.Item
            index={index}
            class="carousel-item flex flex-col align-center"
          >
            <span class="text-[18px] text-[#ffb300] flex justify-center items-center w-screen font-bold">
              {alert}
            </span>
            <a
              class="flex align-center justify-center text-[18px] font-bold"
              href="tel:2135596202"
            >
              <i class="fa fa-phone mr-[5px]"></i> (21) 3559-6202
            </a>
          </Slider.Item>
        ))}
      </Slider>

      <SliderJS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default Alert;
