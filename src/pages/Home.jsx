import GreenBtn from "../components/GreenBtn";
import WhiteBtn from "../components/WhiteBtn";

//hooks
function Home() {
  return (
    <>
      <section className="main-container mt-8 mb-4">
        <div className="hero-section flex justify-between bg-color-lightgreen py-[50px] pl-[76px] relative">
          <div className="w-[650px] text-primary">
            <h1 className="text-5xl leading-[54px] -tracking-[1px] font-semibold mb-3">
              SEEDRA Basil Seeds for Indoor and Outdoor Planting
            </h1>
            <p className="text-base leading-[28px] font-light text-[#1F2533] mb-[21px] ">
              Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee
            </p>
            <div className="flex items-center mb-[25px]">
              <img className="mr-[6px]" src="../assets/svg/ant-design_fire-filled.svg" alt="fire" />
              <p className="mr-[21px] font-semibold text-[42px] text=[#1F2533] ">
                $12.56
              </p>
              <p className="line-through text-[22px] text-[#70737C] font-semibold">
                $15.56
              </p>
            </div>
            <div className="flex gap-3">
              <GreenBtn text='Add to card' />
              <WhiteBtn text='Discover' />
            </div>
          </div>

          <div className="absolute right-0 z-10">
            <img className="" src="../assets/png/seed-packet.png" alt="packet" />
          </div>

          <img className="absolute bottom-0 z-[1] right-0" src="../assets/png/hero-leaves.png" alt="leaves" />
        </div>
      </section>

      <section className="main-container mb-[58px] text-center">
        <div className="w-full bg-[#fffdec] rounded-xl py-[23px] relative">

          <img className="absolute left-4 top-2" src="../assets/png/home-barg2.png" alt="barg" />
          <img className="absolute left-9 bottom-0" src="../assets/png/home-limon.png" alt="limon" />
          <img className="absolute top-[44px] left-[103px]" src="../assets/png/urug.png" alt="urug" />
          <img className="absolute bottom-0 left-[142px]" src="../assets/png/home-barg3.png" alt="barg" />

          <h1 className="text-2xl font-semibold text-[#1F2533] mb-2">
            We sell seeds
          </h1>
          <p className="text-base font-semibold text-[#70737c]">
            that always sprout and gardening supplies which never break
          </p>

          <img className="absolute bottom-0 right-0" src="../assets/png/home-barg.png" alt="img" />
          <img className="absolute bottom-4 right-[124px]" src="../assets/png/blur-img-home.png" alt="img" />
          <img className="absolute top-[15px] right-[84px]" src="../assets/png/semichka-home.png" alt="img" />
          <img className="absolute top-0 right-[120px]" src="../assets/png/danak-home.png" alt="img" />

        </div>
    
      </section>
    </>
  );
}

export default Home;
