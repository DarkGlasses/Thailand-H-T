import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto my-auto grid grid-cols-1 md:grid-cols-3 gap-50">
        <div>
          <p className="py-10 px-10">
            80/1 ถนนเพชรเกษม<br />
            ตำบลโพรงมะเดื่อ<br />
            จังหวัดนครปฐม 73000<br />
          </p>
        </div>

        <div className='py-10'>
          <h4 className="font-semibold mb-2">Social Network</h4>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/siththi.chokh.khid.di/" className="text-white text-2xl"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white text-2xl"><i className="bi bi-envelope-fill"></i></a>
          </div>
        </div>

        <div className='p-10'>
          <h4 className="font-semibold mb-2">ติดต่อเรา</h4>
          <p><strong>Hotline:</strong> 061 592 9399</p>
          <p><strong>Email:</strong> sitthichokkiddee@gmail.com</p> 
        </div>
      </div>

      <div className="bg-teal-600 text-center text-white py-3 mt-10 ">
        &copy; {new Date().getFullYear()} Thailand H&T. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
