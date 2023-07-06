import { useState } from "preact/hooks";
import ProductShelf from "$store/components/product/ProductShelf.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title: string;
  titleSpecialWord: string;
  subtitle: string;
  specialWord: string;
  products: LoaderReturnType<Product[] | null>;
}

function SelectCar(
  {
    title = "Escolha o seu",
    titleSpecialWord = "Chevrolet:",
    subtitle = "Preencha o formulário ao lado e garanta uma",
    specialWord = "oferta especial",
    products,
  }: Props,
) {
  return (
    <div class="pt-[20px] pb-[20px] md:max-w-[1170px] md:pl-[15px]">
      <div>
        <h3 class="text-[36px] text-center font-medium mr-[auto] ml-[auto] max-w-[15rem] md:max-w-[100%]">
          {title} <span class="text-[#d19631]">{titleSpecialWord}</span>
        </h3>
        <p class="hidden md:block text-[18px] text-center">
          {subtitle} {specialWord}
        </p>
      </div>

      <div class="container hidden md:block mt-[50px]">
        <ul class="grid grid-flow-col">
          <li class="text-center grayscale-0 brightness-0 hover:grayscale-0 hover:brightness-100">
            <div class="flex justify-center">
              <Image
                src={"https://www.ofertasimcauto.com.br/assets/uploads/nt_cores/14184-logo.png"}
                alt="Imagem de carro"
                width={71}
                height={26}
                loading="lazy"
              />
            </div>
            <p class="text-[#d19631] text-[18px] font-bold">Destaques</p>
            <span class="flex w-full border-[3px] border-[#d19631]" />
          </li>
          <li class="text-center grayscale-0 brightness-0 hover:grayscale-0 hover:brightness-100">
            <div class="flex justify-center">
              <Image
                src={"https://www.ofertasimcauto.com.br/assets/uploads/nt_veiculos_categorias/71252-Carros.png"}
                alt="Imagem de carro"
                width={71}
                height={26}
                loading="lazy"
              />
            </div>
            <p class="text-[#d19631] text-[18px] font-bold">Carros</p>
            <span class="flex w-full border-[3px] border-[#e1e1e1]" />
          </li>
          <li class="text-center grayscale brightness-0 hover:grayscale-0 hover:brightness-100">
            <div class="flex justify-center">
              <Image
                src={"https://www.ofertasimcauto.com.br/assets/uploads/nt_veiculos_categorias/37097-SUV.png"}
                alt="Imagem de carro"
                width={71}
                height={26}
                loading="lazy"
              />
            </div>
            <p class="text-[#d19631] text-[18px] font-bold">SUVs</p>
            <span class="flex w-full border-[3px] border-[#e1e1e1]" />
          </li>
          <li class="text-center grayscale brightness-0 hover:grayscale-0 hover:brightness-100">
            <div class="flex justify-center">
              <Image
                src={"https://www.ofertasimcauto.com.br/assets/uploads/nt_veiculos_categorias/98882-Picapes.png"}
                alt="Imagem de carro"
                width={71}
                height={26}
                loading="lazy"
              />
            </div>
            <p class="text-[#d19631] text-[18px] font-bold">Picapes</p>
            <span class="flex w-full border-[3px] border-[#e1e1e1]" />
          </li>
        </ul>
        <div>
          <ProductShelf products={products} />
        </div>
      </div>

      <div class="md:hidden mr-[20px] ml-[20px] mt-[10px]">
        <select
          name="cars"
          id="cars"
          class="w-[100%] text-left border-[1px] border-[#e1e1e1] text-[16px] text-[#4d4d4d] p-[10px] font-bold"
        >
          <option value="">Selecione a categoria</option>
          <option value="destaque">Destaques</option>
          <option value="saab">Carros</option>
          <option value="mercedes">SUVs</option>
          <option value="audi">Picapes</option>
        </select>

        <div class="md:hidden">
          <ProductShelf products={products} />
        </div>
      </div>
    </div>
  );
}

export default SelectCar;
