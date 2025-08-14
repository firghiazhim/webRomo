import BlurText from "/Reactbits/BlurText/BlurText.jsx";

const You = () => {
  return (
    <div
      id="you"
      className="container sm:mx-auto p-5  mt-20 sm:mt-40 gap-5 sm:gap-20"
    >
      <h1
        className="text-white font-bold text-2xl text-center"
        data-aos="fade-down"
      >
        Youu 🫵 In My Eye 👁️
      </h1>
      {/* 1 */}
      <div
        data-aos="fade-down"
        className="mt-20 items-center grid grid-cols-1 sm:gap-20 sm:mt-30 sm:grid-cols-2"
      >
        <section className="bg-white flex justify-center items-center">
          <img
            src="./src/assets/img/you1.png"
            className="w-full h-100 object-cover"
          />
        </section>
        <section className="">
          <BlurText
            text="sayang aku suka kalo kamu pake kerudung model kaya gini, keliatannya kaya cocok bangett sayangg, kaya yalili bangett pokonyaa, pokonyaa pacarr ku thebestt dehh sholehahh hahhaha, always cantikkk digimanapunn ituu"
            delay={200}
            animatedBy="words"
            // direction="top"
            className="text-white text-[13px] md:text-[15px] pt-2"
          />
        </section>
      </div>

      {/* 2 */}
      <div
        data-aos="fade-down"
        className="mt-20 items-center grid grid-cols-1 sm:gap-20 sm:mt-30 sm:grid-cols-2"
      >
        <section className="order-2 sm:order-1">
          <BlurText
            text="ini pap yang kamuu kasii ke aku pas kamu lagi kerja sayangg. kamuu hebatt sayangg, kamu bisa dapett kerjaan pas baruu lulus sekolah, walaupun kamu sering bangett cerita ke aku kalo kamu tu kerja nya cape tapi gaji nya
            ga nentu, kamu juga kepengen pindah kerjaan yang gajih nya ga nentu dan kerja diruangan adem hahaha, walaupun kamu sering ngeluh sama aku tentang kerjaan kamu tapi aku yakin kalo kamu bisa lakuinn semua itu sayang,
            semogaa semua yang kamu pengenin dan wishlist kamuu secepat nyaa kecapai yaa sayangg, semangatt sayangg"
            delay={200}
            animatedBy="words"
            // direction="top"
            className="text-white text-[13px] md:text-[15px] pt-2"
          />
        </section>
        <section className="bg-white flex justify-center items-center order-1 sm:order-2">
          <img
            src="./src/assets/img/you2.png"
            className="w-full h-100 object-cover"
          />
        </section>
      </div>

      {/* 3 */}
      <div
        data-aos="fade-down"
        className="mt-20 items-center grid grid-cols-1 sm:gap-20 sm:mt-30 sm:grid-cols-2"
      >
        <section className="bg-white flex justify-center items-center">
          <img
            src="./src/assets/img/you3.jpeg"
            className="w-full h-80 object-cover"
          />
        </section>
        <section className="">
          <BlurText
            text="sayang aku suka kalo kamu pake kerudung model kaya gini, keliatannya kaya cocok bangett sayangg, kaya yalili bangett pokonyaa, pokonyaa pacarr ku thebestt dehh sholehahh hahhaha, always cantikkk digimanapunn ituu"
            delay={200}
            animatedBy="words"
            // direction="top"
            className="text-white text-[13px] md:text-[15px] pt-2"
          />
        </section>
      </div>

      {/* 4 */}
      <div
        data-aos="fade-down"
        className="mt-20 items-center grid grid-cols-1 sm:gap-20 sm:mt-30 sm:grid-cols-2"
      >
        <section className="order-2 sm:order-1">
          <BlurText
            text="ohh iyaa ayy akuu mauu sumpah lagii ni hahaha akuu sukaa bangett sama fotoo inii, rambutt kamuu cantikk kayaa orangnya, rambutt nya berwarnaa lagiii fixx akuu sukaa bangett kaloo liatt rambutt kamu berwarna, tau ga
            sii ayy kalo akuu liatt rambutt kamu berwarna tuu kayaaaa gada obatt bangett apotek tutupp pokonya hahaha"
            delay={200}
            animatedBy="words"
            // direction="top"
            className="text-white text-[13px] md:text-[15px] pt-2"
          />
        </section>
        <section className="bg-white flex justify-center items-center order-1 sm:order-2">
          <img
            src="./src/assets/img/you4.jpeg"
            className="w-full h-100 object-cover"
          />
        </section>
      </div>
    </div>
  );
};

export default You;
