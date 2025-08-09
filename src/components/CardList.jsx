import React from 'react'
import cardData from '../services/cardData'
import Card from './Card'

const CardList = () => {
    return (
        <>
            <div className='grid sm:grid-cols-2 gap-4 py-10 px-3  '>
                {cardData.map(card => (
                    <Card
                        key={card.id}
                        id={card.id}
                        description1={card.description1}
                        description2={card.description2}
                        description3={card.description3}
                        title={card.title}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </div>
        </>
    )
}

export default CardList 