import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import CardSliderProduct from "./CardSliderProduct";
import ImageChairProduct from "../public/image/popular/Rectangle 23-3.png";
import ImageLampProduct from "../public/image/popular/Rectangle 23.png";
import ImageSofaProduct from "../public/image/popular/Rectangle 23-1.png";
import ImageBookShelfProduct from "../public/image/popular/Rectangle 23-2.png";

import "swiper/css";
import "swiper/css/navigation";

const SliderProduct: FC = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        "480": {
          slidesPerView: 2,
        },
        "640": {
          slidesPerView: 3,
        },
        "768": {
          slidesPerView: 4,
        },
      }}
    >
      <SwiperSlide>
        <CardSliderProduct
          img={ImageChairProduct}
          badge="Chair"
          title="White Aesthetic Chair"
          price="$63.47"
        >
          Combination of wood and wool
        </CardSliderProduct>
      </SwiperSlide>
      <SwiperSlide>
        <CardSliderProduct
          img={ImageLampProduct}
          badge="Lamp"
          title="Bardono Smart Lamp"
          price="$62.23"
        >
          Easy to use with bluetooth connection
        </CardSliderProduct>
      </SwiperSlide>
      <SwiperSlide>
        <CardSliderProduct
          img={ImageSofaProduct}
          badge="Sofa"
          title="Sofa Empuk Banget"
          price="$58.39"
        >
          Using kapuk randu material
        </CardSliderProduct>
      </SwiperSlide>
      <SwiperSlide>
        <CardSliderProduct
          img={ImageBookShelfProduct}
          badge="Living Room"
          title="Wooden Bookshelf"
          price="$62.23"
        >
          Combination of wood and wool
        </CardSliderProduct>
      </SwiperSlide>
      <SwiperSlide>
        <CardSliderProduct
          img={ImageChairProduct}
          badge="Chair"
          title="White Aesthetic Chair"
          price="$63.47"
        >
          Combination of wood and wool
        </CardSliderProduct>
      </SwiperSlide>
      <SwiperSlide>
        <CardSliderProduct
          img={ImageChairProduct}
          badge="Chair"
          title="White Aesthetic Chair"
          price="$63.47"
        >
          Combination of wood and wool
        </CardSliderProduct>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderProduct;
