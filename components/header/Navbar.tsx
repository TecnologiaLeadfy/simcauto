import Image from "deco-sites/std/components/Image.tsx";
import type { INavItem } from "./NavItem.tsx";

function Navbar({ items }: {
  items: INavItem[];
}) {
  return (
    <>
      <div class="flex flex-row justify-between items-center p-[16px]">
        <a
          href="/"
          class="flex-grow flex justify-center items-center"
          aria-label="Store logo"
        >
          <Image
            src={"https://www.ofertasimcauto.com.br/assets/uploads/nt_cores/57674-logo-simcauto-sem-o-presidente.png"}
            alt="Logo"
            width={300}
            height={73}
            loading="lazy"
          />
        </a>
      </div>
    </>
  );
}

export default Navbar;
