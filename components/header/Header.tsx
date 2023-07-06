import type { Image } from "deco-sites/std/components/types.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";

import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: {
    src?: Image;
    alt?: string;
  };
}

export interface Props {
  alerts: string[];
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];
}

function Header({
  alerts,
  navItems = [],
}: Props) {
  return (
    <>
      <header class="h-[195px] md:h-[105px]">
        <div class="bg-base-100 fixed w-full z-50">
          <div class="md:max-w-[1170px]">
            <Navbar items={navItems} />
            <Alert alerts={alerts} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
