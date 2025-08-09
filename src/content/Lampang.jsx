import React from "react";

const Lampang = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold mb-6">ลำปาง</h1>

      <img
        src="/ลำปาง.jpeg"
        alt="ภาพลำปาง"
        className="w-full rounded-lg mb-8 object-cover"
      />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">สถานที่น่าสนใจ</h2>
        <p className="mb-3">
          เมืองเก่าในสไตล์ล้านนา โดดเด่นด้วยสถาปัตยกรรมไม้สักและวิถีชีวิตแบบดั้งเดิม มีรถม้ารอบเมืองให้นั่ง ช่วยให้คุณสัมผัสบรรยากาศโบราณได้อย่างใกล้ชิด
        </p>
        <p className="mb-2 font-semibold">สถานที่สำคัญที่แนะนำ:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>วัดพระแก้วดอนเต้า – วัดเก่าแก่ที่มีสถาปัตยกรรมล้านนาอันงดงาม</li>
          <li>บ้านเสานัก – บ้านไม้สักทรงโบราณที่อนุรักษ์วัฒนธรรมล้านนา</li>
          <li>พิพิธภัณฑ์รถม้า – เรียนรู้ประวัติและวัฒนธรรมรถม้าของลำปาง</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">กิจกรรมห้ามพลาด</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>นั่งรถม้าชมเมืองลำปาง เพลิดเพลินกับบรรยากาศย้อนยุค</li>
          <li>เดินเที่ยวตลาดเช้าและตลาดวัดเกาะ ชิมของกินพื้นเมือง เช่น ขนมเส้น ข้าวซอย</li>
          <li>เยี่ยมชมวัดวาอารามเก่าแก่ เช่น วัดพระธาตุลำปางหลวง</li>
          <li>ถ่ายรูปกับอาคารเก่าที่มีสถาปัตยกรรมล้านนาและจีนผสมผสาน</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">ที่พักแนะนำ</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>โรงแรมลำปางเวียงทอง – ที่พักใจกลางเมือง ใกล้ตลาดและสถานที่ท่องเที่ยว</li>
          <li>บ้านเสานัก โฮมสเตย์ – สัมผัสบรรยากาศบ้านไม้โบราณแบบล้านนาแท้ ๆ</li>
          <li>โรงแรมเวียงลคอทเทจ – บรรยากาศเงียบสงบ เหมาะสำหรับการพักผ่อน</li>
        </ul>
      </section>
    </div>
  );
};

export default Lampang;
