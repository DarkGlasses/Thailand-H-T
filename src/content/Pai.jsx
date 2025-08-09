import React from "react";

const Pai = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold mb-6">ปาย</h1>

      <img
        src="/ปาย.jpg"
        alt="ภาพปาย"
        className="w-full rounded-lg mb-8 object-cover"
      />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">สถานที่น่าสนใจ</h2>
        <p className="mb-3">
          เมืองเล็กที่ผ่อนคลาย เต็มไปด้วยคาเฟ่บรรยากาศดี และเสียงเพลงสดในบาร์ยามค่ำคืนที่สร้างบรรยากาศอบอุ่นเป็นกันเอง
        </p>
        <p className="mb-2 font-semibold">สถานที่สำคัญที่แนะนำ:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>น้ำตก Mo Paeng – น้ำตกสวย เหมาะแก่การลงเล่นน้ำ</li>
          <li>น้ำตก Pam Bok – จุดชมวิวและน้ำตกที่สวยงาม</li>
          <li>Yun Lai Viewpoint – จุดชมวิวทะเลหมอกและพระอาทิตย์ขึ้นสุดโรแมนติก</li>
          <li>หมู่บ้านชนเผ่ากะเหรี่ยง – เรียนรู้วัฒนธรรมท้องถิ่นและธรรมชาติ</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">กิจกรรมห้ามพลาด</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>แช่น้ำแร่ธรรมชาติเพื่อผ่อนคลาย</li>
          <li>เที่ยวน้ำตก Mo Paeng และ Pam Bok</li>
          <li>ชมวิวทะเลหมอกที่ Yun Lai Viewpoint</li>
          <li>Trekking สำรวจหมู่บ้านชนเผ่ากะเหรี่ยง</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">ที่พักแนะนำ</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>PaiApartHotel – ที่พักสะดวกสบาย ใกล้แหล่งท่องเที่ยว</li>
          <li>Muang Pai Resort – รีสอร์ทบรรยากาศธรรมชาติและเงียบสงบ</li>
        </ul>
      </section>
    </div>
  );
};

export default Pai;
