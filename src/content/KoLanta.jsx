import React from "react";

const KoLanta = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold mb-6">เกาะลันตา</h1>

      <img
        src="/เกาะลันเตา.jpg"
        alt="ภาพเกาะลันตา"
        className="w-full rounded-lg mb-8 object-cover"
      />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">สถานที่น่าสนใจ</h2>
        <p className="mb-3">
          เกาะบรรยากาศเงียบสงบ หาดทรายขาวสวย น้ำใส เหมาะสำหรับการดำดิ่งในธรรมชาติและดำน้ำตื้น
        </p>
        <p className="mb-2 font-semibold">สถานที่สำคัญที่แนะนำ:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>ชายหาดคลองดาว – หาดทรายขาวน้ำใส สวยงาม</li>
          <li>เกาะรอก – จุดดำน้ำดูปะการังที่ขึ้นชื่อ</li>
          <li>อุทยานแห่งชาติหมู่เกาะลันตา – ธรรมชาติสมบูรณ์</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">กิจกรรมห้ามพลาด</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>ดำน้ำดูปะการังหลากสีสัน</li>
          <li>พายเรือแคนูสำรวจธรรมชาติรอบเกาะ</li>
          <li>พักผ่อนบนชายหาดเงียบสงบ</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">ที่พักแนะนำ</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Anda Lanta Resort – รีสอร์ทติดทะเล บรรยากาศดี</li>
          <li>Blue Andaman Lanta Resort – ที่พักสะดวกสบายและสงบ</li>
        </ul>
      </section>
    </div>
  );
};

export default KoLanta;
