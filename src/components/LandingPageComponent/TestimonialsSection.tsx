import { Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import TestimonialPerson from "../../assets/images/landing/testimonialPerson.png";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { stylesMui } from "./styles";

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="px-2 md:px-[3.41rem] pt-16 md:pt-[5.63rem] pb-20 md:pb-[10.2rem] w-full flex flex-col items-center justify-center bg-[#131313]"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.10)" }}
    >
      <div
        className="w-[65%] mb-7 md:mb-11 flex flex-col items-center"
        id="title-section"
      >
        <div className="w-full flex flex-col items-center mb-10 md:mb-[4.81rem]">
          <Typography sx={stylesMui.pageSubheadings}>
            What People Says About <br />
            <span className="text-[#00BE64] ml-2">Wealth Funding?</span>
          </Typography>
          <Typography sx={stylesMui.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Feugiat nulla suspendisse tortor aene.
          </Typography>
        </div>
      </div>
      <div className="w-full">
        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            bulletClass: "sample",
            bulletActiveClass: "activeSample",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div
              className="p-6 rounded-2xl"
              id="profile-testimonial"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.10)",
                background: "rgba(255, 255, 255, 0.02)",
              }}
            >
              <Typography sx={stylesMui.testimonialText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                commodo dolor fermentum dignissim et pellentesque egestas
                mauris, faucibus. Tellus nisi amet non at phasellus faucibus
                senectus.
              </Typography>
              <div id="credential" className="mt-6 flex gap-4 items-center">
                <img
                  src={TestimonialPerson}
                  alt="person"
                  width="58px"
                  height="58px"
                />
                <Typography sx={stylesMui.testimonialPerson}>Mick G</Typography>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="p-6 rounded-2xl"
              id="profile-testimonial"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.10)",
                background: "rgba(255, 255, 255, 0.02)",
              }}
            >
              <Typography sx={stylesMui.testimonialText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                commodo dolor fermentum dignissim et pellentesque egestas
                mauris, faucibus. Tellus nisi amet non at phasellus faucibus
                senectus.
              </Typography>
              <div id="credential" className="mt-6 flex gap-4 items-center">
                <img
                  src={TestimonialPerson}
                  alt="person"
                  width="58px"
                  height="58px"
                />
                <Typography sx={stylesMui.testimonialPerson}>Mick G</Typography>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="p-6 rounded-2xl"
              id="profile-testimonial"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.10)",
                background: "rgba(255, 255, 255, 0.02)",
              }}
            >
              <Typography sx={stylesMui.testimonialText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                commodo dolor fermentum dignissim et pellentesque egestas
                mauris, faucibus. Tellus nisi amet non at phasellus faucibus
                senectus.
              </Typography>
              <div id="credential" className="mt-6 flex gap-4 items-center">
                <img
                  src={TestimonialPerson}
                  alt="person"
                  width="58px"
                  height="58px"
                />
                <Typography sx={stylesMui.testimonialPerson}>Mick G</Typography>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="p-6 rounded-2xl"
              id="profile-testimonial"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.10)",
                background: "rgba(255, 255, 255, 0.02)",
              }}
            >
              <Typography sx={stylesMui.testimonialText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                commodo dolor fermentum dignissim et pellentesque egestas
                mauris, faucibus. Tellus nisi amet non at phasellus faucibus
                senectus.
              </Typography>
              <div id="credential" className="mt-6 flex gap-4 items-center">
                <img
                  src={TestimonialPerson}
                  alt="person"
                  width="58px"
                  height="58px"
                />
                <Typography sx={stylesMui.testimonialPerson}>Mick G</Typography>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
