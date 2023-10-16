import { KeyboardEvent, useEffect } from "react";

const Btn: React.FC = () => {
  const handleLeftClick = () => {
    console.log("Left button clicked");
  };

  const handleRightClick = () => {
    console.log("Right button clicked");
  };
  const handleKeyDown = (event: globalThis.KeyboardEvent) => {
    if (event.key === "z") {
      handleLeftClick();
    }
    if (event.key === "/") {
      handleRightClick();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-around border-2 h-full">
        <button
          onClick={handleLeftClick}
          className="w-[150px] h-[150px] p-6 rounded-full border-2 border-black
            "
        >
          left
        </button>
        <div className=" text-[400%]">999%</div>
        <button
          onClick={handleRightClick}
          className="w-[150px] h-[150px] p-6 rounded-full border-2 border-black
            "
        >
          right
        </button>
      </div>
    </>
  );
};
export default Btn;
