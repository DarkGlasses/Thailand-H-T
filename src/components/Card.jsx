import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <Link to={`/card_detail/${props.id}`}>
            <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-teal-600 to-teal-700 flex transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
                <div className="relative w-1/3 overflow-hidden">
                    <img 
                        className="h-full w-full object-cover transform transition duration-500" 
                        src={props.imageUrl}  
                        alt={props.title}
                    />
                </div>

                <div className="px-6 py-5 flex flex-col w-2/3 text-white justify-between">
                    <div>
                        <h2 className="font-bold text-3xl mb-2 text-left drop-shadow-lg">{props.title}</h2>
                        <hr className="border-white/30 mb-4" />
                        <p className="text-sm leading-relaxed opacity-90">{props.description1}</p>
                        <p className="text-sm leading-relaxed opacity-90">{props.description2}</p>
                        <p className="text-sm leading-relaxed opacity-90">{props.description3}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card
