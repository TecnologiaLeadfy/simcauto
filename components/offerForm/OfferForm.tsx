import { Runtime } from "$store/runtime.ts";

const subscribe = Runtime.create(
  "deco-sites/std/actions/vtex/newsletter/subscribe.ts",
);

export interface Form {
  name?: string;
  email?: string;
  telephone?: string;
  store?: string;
  model?: string;
  message?: string;
}

export interface Props {
  title?: string;
  form: Form;
}

function OfferForm(
  { title = "Receba uma oferta especial:", form }: Props,
) {
  return (
    <div class="bg-[#2c2c25] pr-[20px] pl-[20px] pt-[10px] pb-[10px] md:fixed md:top-0 md:right-0 md:max-w-[255px] md:bg-[#2c2c25] md:z-[100] md:h-[100%] md:pt-[15px] md:pb-[15px] md:pl-[30px] md:pr-[30px]">
      <div class="flex flex-col justify-center pt-[10px] md:pt-[20px]">
        <span class="border-[.5px] border-[#d19631] mb-[10px]" />
        <h3 class="text-[#d19631] text-[17px] md:text-[20px] mb-[10px] uppercase text-center">
          {title}
        </h3>
      </div>
      <div class="flex">
        <form class="form-control w-full pb-[10px]">
          <input
            name="name"
            class="flex-auto md:flex-none input text-base-content h-[60px] md:h-[34px] rounded-[0px] text-[#343434] text-[12px] border-[1px] border-[#9ea1a2]"
            placeholder={form?.name || "Nome"}
          />
          <input
            name="email"
            class="flex-auto md:flex-none input text-base-content h-[60px] md:h-[34px] rounded-[0px] text-[#343434] text-[12px] border-[1px] border-t-[0] border-b-[0] border-[#9ea1a2]"
            placeholder={form?.email || "E-mail"}
          />
          <input
            name="phone"
            class="flex-auto md:flex-none input text-base-content h-[60px] md:h-[34px] rounded-[0px] text-[#343434] text-[12px] border-[1px] border-b-[0] border-[#9ea1a2]"
            placeholder={form?.telephone || "DDD + Telefone"}
          />
          <select
            name="store"
            class="flex-auto md:flex-none input text-base-content w-full h-[60px] md:h-[34px] rounded-[0px] text-[#343434] text-[12px] border-[1px] border-b-[0] border-[#9ea1a2]"
          >
            <option value="1">
              {form?.store || "Loja mais próxima"}
            </option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
          </select>
          <select
            name="model"
            class="flex-auto md:flex-none input text-base-content w-full h-[60px] md:h-[34px] rounded-[0px] text-[#343434] text-[12px] border-[1px] border-b-[0] border-[#9ea1a2]"
          >
            <option value="1">{form?.model || "Modelos"}</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
          </select>
          <input
            name="text"
            class="flex-auto md:flex-none input text-base-content h-[60px] md:h-[34px] rounded-[0px] text-[#343434] text-[12px] border-[1px] border-b-[0] border-[#9ea1a2]"
            placeholder={form?.message || "Mensagem"}
          />
          <input
            name="checkbox"
            class="flex-auto md:flex-none input text-base-content h-[60px] md:h-[34px] rounded-[0px] text-[#343434] text-[12px] border-[1px] border-[#9ea1a2]"
            placeholder={form?.message || "Desejo dar carro na troca."}
          />
          <div class="flex align-center mt-[5px]">
            <input
              type="checkbox"
              id="replacement"
              name="scales"
              class="mr-[5px]"
            />
            <label for="replacement" class="text-[12px] text-secondary-content">
              Desejo dar carro na troca.
            </label>
          </div>
          <div class="flex align-center">
            <input type="checkbox" id="policy" name="scales" class="mr-[5px]" />
            <label for="policy" class="text-[12px] text-secondary-content">
              Aceito a Política de Privacidade
            </label>
          </div>
          <div class="mb-[10px] flex align-center">
            <input type="checkbox" id="offer" name="scales" class="mr-[5px]" />
            <label for="offer" class="text-[12px] text-secondary-content">
              Receber ofertas por e-mail.
            </label>
          </div>
          <button
            type="submit"
            class="rounded-[4px] text-secondary-content bg-[#a8852c] h-[49px] text-[22px] md:text-[16px] uppercase font-bold mb-[10px] mt-[10px]"
          >
            Solicitar agora
          </button>
          <button
            type="submit"
            class="rounded-[4px] text-secondary-content bg-[#d19631] h-[39px] text-[22px] md:text-[18px] font-bold mb-[10px]"
          >
            Financiamento <i class="fa fa-refresh" aria-hidden="true"></i>
          </button>
          <button
            type="submit"
            class="rounded-[4px] text-secondary-content bg-[#d19631] h-[39px] text-[22px] md:text-[18px] font-bold"
          >
            Vendas Diretas <i class="fa fa-refresh" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default OfferForm;
