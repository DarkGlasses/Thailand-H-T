import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('bg_home.png')", 
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-3xl text-center text-white px-8 py-10 bg-white/20 backdrop-blur-lg rounded-3xl shadow-lg">
        <h1 className="text-5xl font-bold mb-6">เกี่ยวกับเรา</h1>
        <p className="text-lg leading-relaxed mb-4">
          เว็บไซต์นี้จัดทำขึ้นเพื่อรวบรวมข้อมูลการท่องเที่ยวในประเทศไทย
          ไม่ว่าจะเป็นสถานที่ท่องเที่ยวที่สวยงาม วัฒนธรรมที่หลากหลาย
          และกิจกรรมสนุก ๆ ที่คุณสามารถสัมผัสได้
        </p>
        <p className="text-lg leading-relaxed">
          เรามุ่งมั่นที่จะนำเสนอข้อมูลที่ถูกต้อง ทันสมัย และเป็นประโยชน์ต่อผู้เดินทาง
          เพื่อให้การท่องเที่ยวของคุณเต็มไปด้วยความประทับใจ
        </p>
        <hr className="p-5"/>
          <div>
            <span className="font-semibold">โทรศัพท์:</span>{' '}
            <a href="tel:0615929399" className="text-blue-600 hover:underline">
              061-592-9399
            </a>
          </div>
          <div>
            <span className="font-semibold">อีเมล:</span>{' '}
            <a href="mailto:supachok119732@gmail.com" className="text-blue-600 hover:underline">
              supachok119732@gmail.com
            </a>
          </div>
          <div className="font-semibold">
              80/1 ถนนเพชรเกษม
              ตำบลโพรงมะเดื่อ
              จังหวัดนครปฐม 73000
          </div>
      </div>
    </div>
  );
};

export default About;
