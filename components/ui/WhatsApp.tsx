import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  phone?: number;
}

function WhatsApp({ phone }: Props) {
  if (!phone) {
    return null;
  }

  return (
    <a
      href={`https://api.whatsapp.com/send/?phone=${phone}&text&type=phone_number&app_absent=0`}
      class="fixed bottom-6 right-6 z-40"
      aria-label="Chat on WhatsApp"
    >
      <button
        class="bg-[#45D268] text-white p-2 rounded-full shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <Image
          src={"https://www.ofertasimcauto.com.br/assets/img/site/common/img/wpp-logo.png"}
          alt="WhatsApp"
          width={80}
          height={80}
          loading="lazy"
        />
      </button>
    </a>
  );
}

export default WhatsApp;
