import { KeyboardEvent, useEffect, useState, useCallback } from "react";

const Btn: React.FC = () => {
  const [attack, setAttack] = useState(0);

  const handleAttackChange = (value: number) => {
    if (value <= 999) {
      setAttack(value);
    } else {
      setAttack(999);
    }
  };

  const handleLeftClick = () => {
    console.log("Left button clicked");
    handleAttackChange(attack + 3);
  };

  const handleRightClick = () => {
    console.log("Right button clicked");
    handleAttackChange(attack + 3);
  };

  const handleKeyDown = useCallback((event: globalThis.KeyboardEvent) => {
    event.preventDefault(); // 阻止默认行为
    if (event.key === "z" || event.key === "/") {
      handleAttackChange(attack + 3);
    }
  }, [attack]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <div className="flex items-center justify-around border-2 h-full">
        <button
          onClick={handleLeftClick}
          className="w-[150px] h-[150px] p-6 rounded-full border-2 border-black"
        >
          left
        </button>
        <div className="text-[400%]">{attack}%</div>
        <button
          onClick={handleRightClick}
          className="w-[150px] h-[150px] p-6 rounded-full border-2 border-black"
        >
          right
        </button>
      </div>
    </>
  );
};

export default Btn;
