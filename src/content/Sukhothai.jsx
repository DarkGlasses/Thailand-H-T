import React from "react";

const Sukhothai = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold mb-6">สุโขทัย</h1>

      <img
        src="/สุโขทัย.jpg"
        alt="ภาพสุโขทัย"
        className="w-full rounded-lg mb-8 object-cover"
      />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">สถานที่น่าสนใจ</h2>
        <p className="mb-3">
          อดีตเมืองหลวงเก่าที่มีความสำคัญทางประวัติศาสตร์ สวยงามด้วยอุทยานประวัติศาสตร์สุโขทัยที่ได้รับการรับรองเป็นมรดกโลกโดย UNESCO
        </p>
        <p className="mb-2 font-semibold">สถานที่สำคัญที่แนะนำ:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>อุทยานประวัติศาสตร์สุโขทัย – ชมโบราณสถานและวัดเก่าแก่</li>
          <li>พิพิธภัณฑสถานแห่งชาติ สุโขทัย – เรียนรู้ประวัติศาสตร์และวัฒนธรรม</li>
          <li>วัดมหาธาตุ – โบราณสถานสำคัญที่โดดเด่น</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">กิจกรรมห้ามพลาด</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>ปั่นจักรยานชมโบราณสถานรอบเมือง</li>
          <li>ชมประติมากรรมและสถาปัตยกรรมไทยโบราณ</li>
          <li>เดินเล่นชมธรรมชาติและวัดวาอาราม</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">ที่พักแนะนำ</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>ArtHostel At Sukhothai – ที่พักราคาย่อมเยา สะดวกสบาย</li>
          <li>Ruean Thai Hotel – โรงแรมบรรยากาศไทยแท้ ใกล้สถานที่ท่องเที่ยว</li>
        </ul>
      </section>
    </div>
  );
};

export default Sukhothai;
