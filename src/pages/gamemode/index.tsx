import Layout from "../components/layout";
import GetMode from "../../img/home/get.png";
import PKMode from "../../img/home/pk.png";
import PkGetMode from "../../img/home/pkGet.png";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const GameMode = () => {
  const go = useNavigate();
  const [currentMode, setCurrentMode] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const images = [
    { src: PkGetMode, alt: "對戰捕獲", path: "/pkgetMode", label: "對戰捕獲" },
    { src: PKMode, alt: "活動對戰", path: "/pkMode", label: "活動對戰" },
    { src: GetMode, alt: "快速捕獲", path: "/getMode", label: "快速捕獲" },
  ];
  const nextSlide = () => {
    setCurrentMode(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const prevSlide = () => {
    setCurrentMode((prevIndex) => (prevIndex + 1) % images.length);
  };
  const getDisplayIndices = (currentMode: number, length: number) => {
    const prevIndex = (currentMode - 1 + length) % length;
    const nextIndex = (currentMode + 1) % length;
    return [prevIndex, currentMode, nextIndex];
  };
  const displayIndices = getDisplayIndices(currentMode, images.length);

  

  return (
    <>
      <Layout className="mode_page_bg relative">
        <div className=" absolute left-1 right-1 top-[40vh] flex justify-center items-center ">
          <div className="flex justify-center text-center ">
            {displayIndices.map((index) => (
              <div
                key={index}
                className="p-4"
                onClick={() => {
                  go(images[index].path);
                }}
              >
                <img src={images[index].src} alt={images[index].alt} />
                <p className="text-[12px] text-[white]">
                  {images[index].label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default GameMode;
