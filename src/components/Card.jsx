import React from 'react'
import Image from './Image'




export default function Card(props) {
    // console.log(props)
    return (
        <>
            <div className='cards'>
                <div className='card'>
                    {/* <img src={props.imgsrc} alt='mypic' className='card_img' /> */}
                    <Image imgsrcfromcard={props.imgsrc} />
                    <div className='card_info'>
                        <span className='card_cateory'>{props.title}</span>
                        <h3 className='card_title'>{props.sname} </h3>
                        <a href={props.link} target='_'>
                            <button className='button'>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
