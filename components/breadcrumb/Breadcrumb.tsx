function Breadcrumb() {
  return (
    <div class="bg-[#f1f1f1] p-[8px]">
      <ul class="flex align-items pl-[4rem]">
        <li class="text-[#444] text-[12px] font-bold pr-[5px] border-r-[1px] border-[#cecece]">
          <a href="">HOME</a>
        </li>
        <li class="text-[#444] text-[12px] font-bold pl-[5px] pr-[5px] border-r-[1px] border-[#cecece]">
          <a href="">NOVOS</a>
        </li>
        <li class="text-[#ffb300] text-[12px] pl-[5px] font-bold">
          <a href="">
            TRAILERBLAZER
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumb;
