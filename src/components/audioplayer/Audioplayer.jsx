// import { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";
// import myMusic from "/src/song/song.mp3";

// export default function App() {
//   const [showSite, setShowSite] = useState(false);
//   const audioRef = useRef(null);
//   const alreadyAsked = useRef(false); // flag supaya alert tidak berulang

//   // --- Tampilkan alert sekali ---
//   useEffect(() => {
//     if (alreadyAsked.current) return;
//     alreadyAsked.current = true;

//     alert("hey sayanggku, ciee ulang tahunkann??");
//     alert("ini hari bener bener spesial yaa sayangg");
//     alert("di tanggal 14 ini jadi tanda bahwa bidadari turun ke bumi");
//     alert(
//       "semoga kamu selalu sama aku ya!! aku se-beruntung itu bisa sama kamu"
//     );
//     setShowSite(true); // setelah semua pertanyaan selesai, tampilkan web
//   }, []);

//   // --- Play musik setelah web muncul ---
//   useEffect(() => {
//     if (!showSite) return;
//     const audio = audioRef.current;
//     if (!audio) return;

//     const tryPlay = () => {
//       audio.muted = false;
//       audio.volume = 0;
//       audio
//         .play()
//         .then(() => {
//           // fade-in volume
//           let v = 0;
//           const fade = setInterval(() => {
//             v += 0.05;
//             if (v >= 0.5) {
//               v = 0.5;
//               clearInterval(fade);
//             }
//             audio.volume = v;
//           }, 200);
//         })
//         .catch((err) => console.log("Autoplay gagal:", err));
//     };

//     // coba langsung play, kalau gagal tunggu interaksi user
//     tryPlay();
//     window.addEventListener("click", tryPlay, { once: true });
//     window.addEventListener("touchstart", tryPlay, { once: true });

//     return () => {
//       window.removeEventListener("click", tryPlay);
//       window.removeEventListener("touchstart", tryPlay);
//     };
//   }, [showSite]);

//   // --- Jika belum showSite, tampilkan loading sementara ---
//   if (!showSite) {
//     return (
//       <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
//         <h1 className="text-2xl animate-pulse">Menyiapkan pertanyaan...</h1>
//       </div>
//     );
//   }

//   // --- Tampilan utama dengan animasi fade-in ---
//   return (
//     <motion.div
//       className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 text-white"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <audio ref={audioRef} src={myMusic} autoPlay muted loop />
//       <h1 className="text-3xl font-bold">Selamat datang sayangku! 🎉</h1>
//     </motion.div>
//   );
// }

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import myMusic from "/src/song/song.mp3";

export default function App() {
  const [showSite, setShowSite] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // state mute/unmute
  const audioRef = useRef(null);
  const alreadyAsked = useRef(false); // flag supaya alert tidak berulang

  // --- Tampilkan alert sekali ---
  useEffect(() => {
    if (alreadyAsked.current) return;
    alreadyAsked.current = true;

    alert("hey sayanggku, ciee ulang tahunkann??");
    alert("ini hari bener bener spesial yaa sayangg");
    alert("di tanggal 14 ini jadi tanda bahwa bidadari turun ke bumi");
    alert(
      "semoga kamu selalu sama aku ya!! aku se-beruntung itu bisa sama kamu"
    );
    setShowSite(true); // setelah semua pertanyaan selesai, tampilkan web
  }, []);

  // --- Play musik setelah web muncul ---
  useEffect(() => {
    if (!showSite) return;
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = () => {
      audio.muted = false;
      audio.volume = 0;
      audio
        .play()
        .then(() => {
          // fade-in volume
          let v = 0;
          const fade = setInterval(() => {
            v += 0.05;
            if (v >= 0.5) {
              v = 0.5;
              clearInterval(fade);
            }
            audio.volume = v;
          }, 200);
        })
        .catch((err) => console.log("Autoplay gagal:", err));
    };

    // coba langsung play, kalau gagal tunggu interaksi user
    tryPlay();
    window.addEventListener("click", tryPlay, { once: true });
    window.addEventListener("touchstart", tryPlay, { once: true });

    return () => {
      window.removeEventListener("click", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
    };
  }, [showSite]);

  // --- Toggle mute/unmute ---
  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const newMute = !isMuted;
    audio.muted = newMute;
    setIsMuted(newMute);
  };

  // --- Jika belum showSite, tampilkan loading sementara ---
  if (!showSite) {
    return (
      <div></div>
      // <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      //   <h1 className="text-2xl animate-pulse">Menyiapkan pertanyaan...</h1>
      // </div>
    );
  }

  // --- Tampilan utama dengan animasi fade-in ---
  return (
    <motion.div
      className=" text-white bg-red-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <audio ref={audioRef} src={myMusic} autoPlay muted loop />

      {/* Tombol mute di pojok kanan atas */}
      <button
        onClick={toggleMute}
        className="fixed top-120 right-5 bg-white/20 backdrop-blur-md px-3 py-2 rounded-lg shadow-lg hover:bg-white/30 transition"
      >
        {isMuted ? "🔊" : "🔇"}
      </button>
    </motion.div>
  );
}
