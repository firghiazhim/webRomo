import ReactPlayer from "react-player";

const Hope = () => {
  return (
    <div
      id="hope"
      className="container sm:mx-auto p-5  mt-20 sm:mt-40 gap-5 sm:gap-20"
    >
      <h1
        data-aos="fade-down"
        className="text-white font-bold text-2xl text-center"
      >
        Hope for hope 😻
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5 mt-10">
        {/* aca */}
        <div data-aos="fade-down" className="bg-white shadow-2xl rounded-xl">
          <div className="p-5">
            <ReactPlayer
              src="/video/aca.mp4"
              controls="true"
              height={`300px`}
              width={`100%`}
              className="rounded-xl"
            />
            <h1 className="text-black pt-2">Aca</h1>
            <p className="text-slate-500 text-[13px] md:text-[15px]">
              Happy Birth Day jamett akuu, semoga kita jadi rich woman terus
              nongkrong di dubai yaaa
            </p>
          </div>
        </div>

        {/* nisa */}
        <div data-aos="fade-down" className="bg-white shadow-2xl rounded-xl">
          <div className="p-5">
            <ReactPlayer
              src="/video/nisa.mp4"
              controls="true"
              height={`300px`}
              width={`100%`}
              className="rounded-xl"
            />
            <h1 className="text-black pt-2">Nisa</h1>
            <p className="text-slate-500 text-[13px] md:text-[15px]">
              Hallo intan, selamat ulang tahun ya sehat selalu, panjang umur,
              semoga semua kebahagian di dunia tertuju ke kamuu
            </p>
          </div>
        </div>

        {/* mira */}
        <div data-aos="fade-down" className="bg-white shadow-2xl rounded-xl">
          <div className="p-5">
            <ReactPlayer
              src="/video/mira.mp4"
              controls="true"
              height={`300px`}
              width={`100%`}
              className="rounded-xl"
            />
            <h1 className="text-black pt-2">Mira</h1>
            <p className="text-slate-500 text-[13px] md:text-[15px]">
              Hallo intan, selamat ulang ulang tahun yaa, panjang umur,nurut ke
              orang tua makin cantik. dan, yang paling penting langgeng ama
              pacarnya yaa
            </p>
          </div>
        </div>

        {/* mita */}
        <div data-aos="fade-down" className="bg-white shadow-2xl rounded-xl">
          <div className="p-5">
            <ReactPlayer
              src="/video/mita.mp4"
              controls="true"
              height={`300px`}
              width={`100%`}
              className="rounded-xl"
            />
            <h1 className="text-black pt-2">Mita</h1>
            <p className="text-slate-500 text-[13px] md:text-[15px]">
              Hallo intan selamat ulang tahun yaa, makin cantik, makin lucu,
              makin gemes ya, semoga karirnya bagus yaa
            </p>
          </div>
        </div>

        {/* desri */}
        <div data-aos="fade-down" className="bg-white shadow-2xl rounded-xl">
          <div className="p-5">
            <ReactPlayer
              src="/video/desri.mp4"
              controls="true"
              height={`300px`}
              width={`100%`}
              className="rounded-xl bg-white"
            />
            <h1 className="text-black pt-2">Desri</h1>
            <p className="text-slate-500 text-[13px] md:text-[15px]">
              Hallo intan, selamt ulang tahun, semangat terus kerjanya, apa yang
              kamu pengen tercapai yaaa...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hope;
