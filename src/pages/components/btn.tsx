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
      <div className="flex justify-between mt-5 w-[600px]">
        <button
          onClick={handleLeftClick}
          className=" w-[100px] h-[100px] rounded-full border-2 border-black
            "
        >
          left
        </button>
        <button
          onClick={handleRightClick}
          className=" w-[100px] h-[100px] rounded-full border-2 border-black
            "
        >
          right
        </button>
      </div>
    </>
  );
};
export default Btn;
