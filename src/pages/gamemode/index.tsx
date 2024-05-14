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
    { src: GetMode, alt: "快速捕獲", path: "/getMode", label: "快速捕獲" },
    { src: PKMode, alt: "活動對戰", path: "/pkMode", label: "活動對戰" },
    { src: PkGetMode, alt: "對戰捕獲", path: "/pkgetMode", label: "對戰捕獲" },
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchMove = (e: any) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    }

    if (touchStartX - touchEndX < -50) {
      prevSlide();
    }
  };

  return (
    <>
      <Layout className="mode_page_bg relative">
        <div className=" absolute left-1 right-1 top-[40vh] flex justify-center items-center "
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}
        >
          {!isMobile && (
            <button
              onClick={prevSlide}
              className="w-[30px] h-[30px] rounded-full  m-1 bg-gray-300"
            >
              {"<"}
            </button>
          )}
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
          {!isMobile && (
            <button
              onClick={nextSlide}
              className="w-[30px] h-[30px] rounded-full  m-1 bg-gray-300"
            >
              {">"}
            </button>
          )}
        </div>
      </Layout>
    </>
  );
};

export default GameMode;
