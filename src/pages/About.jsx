function About() {
  return (
    <div className="main-container mb-[200px]">
      <div className="block_1 h-[251px] bg-[#EAF1EB]  rounded-3xl mt-[32px] ">
        <h1 className="text-primary text-5xl text-center pt-[65px] font-semibold">
          Who we are and what we do
        </h1>
        <p className="m-auto text-center mt-[12px] w-[560px] text-primary">
          Here you can find a lot of interesting and useful information that you
          need in gardening and creating a beautiful garden
        </p>
        <div className="images relative">
          <img
            className="absolute -top-40 right-0"
            src="../assets/png/barg_1.png"
            alt="instagram"
          />
          <img
            className="absolute -top-36 right-0"
            src="../assets/png/barg_2.png"
            alt="instagram"
          />
          <img
            className="absolute left-10 -top-40"
            src="../assets/png/barg_3.png"
            alt="instagram"
          />
          <img
            className="absolute left-0 -top-14"
            src="../assets/png/barg_4.png"
            alt="instagram"
          />
        </div>
      </div>
      <div className="first-section flex gap-[84px] relative mt-[57px]">
        <div className="w-[524px]">
          <h1 className="text-primary font-semibold text-4xl leading-[54px] mb-8">
            Seedra helps to grow fast and efficiant
          </h1>
          <p className="text-primary">
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PhD Helga George <br /> <br />{" "}
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. <br /> Your easy growing experience is our
            guarantee Spinach commom culinary uses: salads, soups, smoothies,
            lasagne, pizza, pies, risotto, and more <br /> <br /> Proudly
            sourced in the USA - our garden seeds are grown, harvested, and
            packaged in the USA. We support local farmers and are happy to
            produce this American-made product
          </p>
        </div>
        <div className="">
          <img
            className="absolute  z-50  top-10 right-10 "
            src="../assets/png/farmerFemale.png"
            alt=""
          />
          <img
            className="absolute z-10 top-4 -right-16"
            src="../assets/png/aboutbarg_1.png"
            alt=""
          />
          <img
            className="absolute -top-8 right-0"
            src="../assets/png/aboutbarg_3.png"
            alt=""
          />
          <img
            className="absolute z-50 top-20 right-[430px] "
            src="../assets/png/aboutbarg_4.png"
            alt=""
          />
          <img
            className="absolute -bottom-28 right-[380px]"
            src="../assets/png/aboutbarg_5.png"
            alt=""
          />
          <img
            className="absolute top-0 right-0 z-0"
            src="../assets/png/border_1.png"
            alt=""
          />
        </div>
      </div>
      <div className="second-section mt-24 flex gap-16 items-center">
        <img src="../assets/png/purpleWoman.png" alt="" />
        <div className="second-section--text">
          <h1 className="text-primary font-semibold text-4xl mb-7">Our story</h1>
          <p className="text-primary">
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PhD Helga George <br /> <br />{" "}
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. <br /> Your easy growing experience is our
            guarantee Spinach commom culinary uses: salads, soups, smoothies,
            lasagne, pizza, pies, risotto, and more <br /> <br /> Proudly
            sourced in the USA - our garden seeds are grown, harvested, and
            packaged in the USA. We support local farmers and are happy to
            produce this American-made product
          </p>
        </div>
      </div>
      <div className="final-section flex flex-col gap-20 mt-32 mb-20">
        <h1 className="font-semibold text-4xl text-primary text-center">Meet our team</h1>
        <div className="flex gap-[30px]">
          <div className="flex flex-col items-center gap-4">
            <img src="../assets/png/team1.png" alt="" />
            <h3 className="text-primary font-semibold text-2xl text-center ">Leslie Alexander</h3>
            <p className="font-light text-primary text-base text-center">Nursing Assistant</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src="../assets/png/team2.png" alt="" />
            <h3 className="text-primary font-semibold text-2xl text-center ">Robert Fox</h3>
            <p className="font-light text-primary text-base text-center">Dog Trainer</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src="../assets/png/team3.png" alt="" />
            <h3 className="text-primary font-semibold text-2xl text-center ">Floyd Miles</h3>
            <p className="font-light text-primary text-base text-center">Web Designer</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src="../assets/png/team4.png" alt="" />
            <h3 className="text-primary font-semibold text-2xl text-center ">Wade Warren</h3>
            <p className="font-light text-primary text-base text-center">Medical Assistant</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
