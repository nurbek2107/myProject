import GreenBtn from "../components/GreenBtn";
import WhiteBtn from "../components/WhiteBtn";

//hooks
function Home() {
  return (
    <section className="main-container mt-8 mb-4">
      <div className="hero-section flex justify-between bg-color-lightgreen py-[50px] pl-[76px] relative">
        <div className="w-[650px]">
          <h1 className="text-5xl leading-[54px] -tracking-[1px] font-semibold mb-3 text-primary">
            SEEDRA Basil Seeds for Indoor and Outdoor Planting
          </h1>
          <p className="text-base leading-[28px] font-light text-[#1F2533] mb-[21px]  ">
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. Your easy growing experience is our guarantee
          </p>
          <div className="flex items-center mb-[25px]">
            <img
              className="mr-[6px]"
              src="../assets/svg/ant-design_fire-filled.svg"
              alt="fire"
            />
            <p className="mr-[21px] font-semibold text-[42px] text=[#1F2533] ">
              $12.56
            </p>
            <p className="line-through text-[22px] text-[#70737C] font-semibold">
              $15.56
            </p>
          </div>
          <div className="flex gap-3">
            <GreenBtn text="Add to card" />
            <WhiteBtn text="Discover" />
          </div>
        </div>

          <div className="absolute right-0 z-10">
            <img className="" src="../assets/png/seed-packet.png" alt="packet" />
          </div>

        <img
          className="absolute bottom-0 z-[1] right-0"
          src="../assets/png/hero-leaves.png"
          alt="leaves"
        />
      </div>
    </section>
  );
}

export default Home;
