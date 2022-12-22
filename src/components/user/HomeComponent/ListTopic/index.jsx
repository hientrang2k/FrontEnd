import { Box } from "@mui/system";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image from "../../../../assets/img/154000-1-vc-medlatec.png";

const Slideshow = () => {
  return (
    <Box component="div" className="bg-white flex justify-center pt-[50px]">
      <div className="slide-container max-w-[70%]">
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          indicators={true}
          autoplay={false}
          responsive={[
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ]}
        >
          <div
            style={{
              textAlign: "center",
              background: "red",
              padding: "200px 0",
              fontSize: "30px",
            }}
          >
            First Slide
          </div>
          <div
            style={{
              textAlign: "center",
              background: "orange",
              padding: "200px 0",
              fontSize: "30px",
            }}
          >
            Second Slide
          </div>
          <div
            style={{
              textAlign: "center",
              background: "yellow",
              padding: "200px 0",
              fontSize: "30px",
            }}
          >
            Third Slide
          </div>
          <div
            style={{
              textAlign: "center",
              background: "green",
              padding: "200px 0",
              fontSize: "30px",
            }}
          >
            Fourth Slide
          </div>
          <div className="max-w-[350px]">
            <img src={image} alt="" />
            <div className="font-bold">Xét nghiệm COVID</div>
            <div>
              Giải pháp chuyển đổi số BookingCare DX ứng dụng công nghệ tiên
              phong được phát triển theo mô hình Nền tảng như một dịch vụ
              (Platform as a service - PaaS) bao gồm Website, ứng dụng di động
              (Mobile App) và phần mềm quản trị, tích hợp 3 trong 1 nền tảng
              tiện ích dễ dùng.
            </div>
          </div>
        </Slide>
      </div>
    </Box>
  );
};

export default Slideshow;
