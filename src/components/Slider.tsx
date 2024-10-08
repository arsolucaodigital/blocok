'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { ObrasProps } from '@/configs/obras';
import Image from 'next/image';

export function SliderObras({images}: ObrasProps ) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      }
    ]
  };
  return (
    <div className="slider-container pointer-events-none">
      <Slider {...settings} className='pointer-events-none'>
        {images.map(({image}, index) => (
          <div key={index} className='pointer-events-none'>
            <Image {...image} className='pointer-events-none' />
          </div>
        ))}
      </Slider>
    </div>
  );
}
