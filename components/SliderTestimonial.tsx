import { FC } from "react";
import TestimonilaSliderContent from "./TestimonilaSliderContent";
import Profile1 from "../public/image/profile1.png";
import Profile2 from "../public/image/profile2.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from "swiper"
import "swiper/css";
import "swiper/css/autoplay";


const SliderTestimonial: FC = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={60}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}

      breakpoints={{
        "480": {
          slidesPerView: 1,
        },
        "640": {
          slidesPerView: 2,
        },
        "768": {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide>
      <TestimonilaSliderContent name="jane cooper" userImg={Profile1} numberStar="3.5">
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
      </TestimonilaSliderContent>
        </SwiperSlide>
      <SwiperSlide>
      <TestimonilaSliderContent name="jane cooper" userImg={Profile2} numberStar="3.0">
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
      </TestimonilaSliderContent>
        </SwiperSlide>
      <SwiperSlide>
      <TestimonilaSliderContent name="jane cooper" userImg={Profile1} numberStar="4.0">
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
      </TestimonilaSliderContent>
        </SwiperSlide>
      <SwiperSlide>
      <TestimonilaSliderContent name="jane cooper" userImg={Profile2} numberStar="2.5">
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
      </TestimonilaSliderContent>
        </SwiperSlide>
      <SwiperSlide>
      <TestimonilaSliderContent name="jane cooper" userImg={Profile1} numberStar="4.0">
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
      </TestimonilaSliderContent>
        </SwiperSlide>
      </Swiper>
  )
}

export default SliderTestimonial
