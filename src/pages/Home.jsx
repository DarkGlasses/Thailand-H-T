import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg_home.png')",
      }}
    >
      <section className="relative flex items-center justify-center py-20 h-screen">
        <div className="relative z-10 text-center text-teal-800 px-6 rounded-full p-5 backdrop-blur-lg">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg ">
            ยินดีต้อนรับสู่การท่องเที่ยวไทย
          </h1>
          <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
            ค้นพบสถานที่น่าสนใจ กิจกรรมสนุก ๆ และที่พักแนะนำทั่วประเทศไทย
          </p>
          <Link
            to="/Tour"
            className="bg-teal-600 hover:bg-teal-800 transition px-6 py-3 rounded-full text-lg font-semibold shadow-lg text-white"
          >
            เริ่มสำรวจ
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
