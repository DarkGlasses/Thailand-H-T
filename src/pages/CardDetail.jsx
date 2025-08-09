import React from 'react'
import cardData from '../services/cardData'
import { useNavigate, useParams } from 'react-router-dom'

import Lampang from '../content/Lampang'
import Pai from '../content/Pai'
import Sukhothai from '../content/Sukhothai'
import PhuChiFa from '../content/PhuChiFa'
import KoLanta from '../content/KoLanta'


const contentComponents = {
    1: Lampang,
    2: Pai,
    3: Sukhothai,
    4: PhuChiFa,
    5: KoLanta,
}

const CardDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const cardDetail = cardData.find(item => item.id === parseInt(id))

  if (!cardDetail) {
    return (
      <main className='flex-grow bg-gray-50 min-h-screen flex flex-col justify-center'>
        <div className='container mx-auto py-10 px-4 text-center'>
          <button
            onClick={() => navigate(-1)}
            className='bg-teal-600 hover:bg-teal-800 text-white font-semibold rounded-full transition px-5 py-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400'
          >
            กลับ
          </button>
          <p className='mt-10 text-red-600 font-semibold text-xl'>ไม่พบข้อมูลของการ์ดนี้</p>
        </div>
      </main>
    )
  }

  const ContentComponent = contentComponents[cardDetail.id]

  return (
    <main className='flex-grow bg-teal-50 min-h-screen py-10'>
      <div className='container mx-auto px-4 max-w-4xl'>
        <button
          onClick={() => navigate(-1)}
          className='mb-8 bg-teal-600 hover:bg-teal-800 text-white font-semibold rounded-full transition px-6 py-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400'
        >
          กลับ
        </button>

        <section className='bg-white rounded-lg shadow-xl p-6'>
          {ContentComponent ? (
            <ContentComponent />
          ) : (
            <p className='text-gray-600 text-center'>
              ยังไม่มีข้อมูลเพิ่มเติมสำหรับสถานที่นี้
            </p>
          )}
        </section>
      </div>
    </main>
  )
}

export default CardDetail
