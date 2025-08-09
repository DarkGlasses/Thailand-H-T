import React from "react";

const PhuChiFa = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold mb-6">ภูชี้ฟ้า</h1>

      <img
        src="/ภูชี้ฟ้า.jpg"
        alt="ภาพภูชี้ฟ้า"
        className="w-full rounded-lg mb-8 object-cover"
      />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">สถานที่น่าสนใจ</h2>
        <p className="mb-3">
          ชมวิวทะเลหมอกยามเช้าและดอกซากุระเมืองไทย (Prunus cerasoides) บนเส้นทางภูเขาที่งดงามในฤดูหนาว
        </p>
        <p className="mb-2 font-semibold">สถานที่สำคัญที่แนะนำ:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Sakura Viewpoint – จุดชมซากุระบานในช่วงธ.ค.–ก.พ.</li>
          <li>จุดชมทะเลหมอกยามเช้า</li>
          <li>เส้นทางเดินป่าภูชี้ฟ้า – เหมาะกับการเดินเทรคกิ้ง</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">กิจกรรมห้ามพลาด</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>ตื่นเช้าชมวิวทะเลหมอกสุดอลังการ</li>
          <li>ชมซากุระบานที่ Sakura Viewpoint</li>
          <li>เดินเทรคกิ้งตามเส้นทางธรรมชาติ</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">ที่พักแนะนำ</h2>
        <p>ไม่มีข้อมูลเฉพาะ</p>
      </section>
    </div>
  );
};

export default PhuChiFa;
