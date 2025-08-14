import BlurText from "/Reactbits/BlurText/BlurText.jsx";

const Hero = () => {
  return (
    <div className="container sm:mx-auto p-5 mt-20 sm:mt-40 gap-5 sm:gap-20 grid grid-cols-1 md:grid-cols-2 items-center">
      <div
        className="flex justify-center items-center bg-red-100 p-5"
        data-aos="fade-down"
      >
        <img
          src="/img/hero.jpeg"
          className="w-full h-50  md:w-full md:h-100 object-cover bg-white"
        />
      </div>
      <div className="right">
        <BlurText
          text={`Happy Birth Day Intan Noeraini 🎉`}
          delay={90}
          animatedBy="words"
          direction="top"
          className="text-purple-100 font-bold text-[23px] tracking-tighter"
        />
        <BlurText
          text="haii sayangg👋... selamat ulang tahun yaa, terimakasih sudah hadir dihidup aku dan membuat setiap hariku lebih berarti. semoga hal baik datang hari ini dan seterusnya yaa, aku bahagia banget bisa rayain hari spesial ini yang ke 3x nyaa. kamuitu unik, nyebelin tapi ngangenin, ngeselin tapi bikin senyum, dan yang paling penting kamu adalah favoritku, tiap hari, setiap waktu. di hari spesial ini, aku cuman punya satu harapan, semoga kamu selalu bahagia, sehat, dan terus jadi versi terbaik dari diri kamu, aku bakal selalu ada buat kamu, dan di setiap langkah kamu aku mencintaimu selalu. HAPPY BIRTH DAY CINTAKU 💝💝💝"
          delay={200}
          animatedBy="words"
          // direction="top"
          className="text-white text-[13px] md:text-[15px] pt-2"
        />
      </div>
    </div>
  );
};

export default Hero;
