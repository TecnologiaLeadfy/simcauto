import PoweredBy from "$store/components/footer/PoweredBy.tsx";
import Image from "deco-sites/std/components/Image.tsx";

function Footer() {
  return (
    <footer
      class={`w-full flex flex-col pt-10 pb-2 md:pb-10 md:relative md:max-w-[1170px]`}
    >
      <div class="flex justify-center items-center">
        <PoweredBy />
      </div>

      <div class="mt-[15px] flex justify-center w-full md:absolute md:right-[30px] md:top-[20px] md:w-[auto]">
        <Image
          src={"https://www.ofertasimcauto.com.br/assets/uploads/nt_cores/99564-logo_leadforce.png"}
          alt="Imagem"
          width={145}
          height={33}
          loading="lazy"
        />
      </div>
    </footer>
  );
}

export default Footer;
