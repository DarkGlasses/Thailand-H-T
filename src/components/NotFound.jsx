import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-600 to-pink-500 text-white text-center px-6">
      <h1 className="text-9xl font-extrabold mb-4 drop-shadow-lg">404</h1>
      <h2 className="text-3xl font-bold mb-4">ไม่พบหน้าที่คุณต้องการ</h2>
      <p className="text-lg mb-8">
        อาจเป็นเพราะลิงก์หมดอายุ หรือคุณพิมพ์ URL ไม่ถูกต้อง
      </p>
      <Link
        to="/"
        className="bg-white text-purple-700 hover:bg-purple-200 transition px-6 py-3 rounded-full font-semibold shadow-lg"
      >
        กลับหน้าหลัก
      </Link>
    </div>
  );
};

export default NotFound;
