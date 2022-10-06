import React from 'react'
import AVTR1 from '../../Assets/avatar1.jpg'
import AVTR2 from '../../Assets/avatar2.jpg'
import AVTR3 from '../../Assets/avatar3.jpg'
import AVTR4 from '../../Assets/avatar4.jpg'
import './Testimonial.css'

// importing Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Importing Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar:AVTR1,
    name:"Sofia Roy",
    review:"EXCELLENT WORK. Friendly, professional, and took care of everything I needed and more. Akash is fantastic to work with. They works hard to help you get exactly what you need in a website. Their service is quick and on point. I will continue to do work with them.",
  },
  {
    avatar:AVTR2,
    name:"Murari Suman",
    review:" The project was well planned and managed from the start. The milestones were reachable and delivered on time.",
  },
  {
    avatar:AVTR3,
    name:"Jatin Jain",
    review:"They have been able to meet and exceed our expectations. Our experience with Akash is excellent I recommend him to any other company.",
  },
  {
    avatar:AVTR4,
    name:"Maria Khan",
    review:"Amazing work as always. I hope to hire again in the future. Very prompt. Very good communication. Job well done!",
  },
]
const Testimonial = () => {
  return (
    <>
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
       { data.map(({avatar, name, review}, index)=>{
          return(
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt="" />
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
          </SwiperSlide>
          )
        })
        }
      </Swiper>
    </section>
    </>
   
  )
}

export default Testimonial