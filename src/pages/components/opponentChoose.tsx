import { useNavigate } from "react-router";

const OpponentChoose = () => {
  const go = useNavigate();
  return (
    <>
      <div className="flex justify-around">
        <div
          onClick={() => {
            go("/fighting");
          }}
          className="border-2 p-10 rounded-full"
        >
          對手一
        </div>
        <div
          onClick={() => {
            go("/fighting");
          }}
          className="border-2 p-10 rounded-full"
        >
          對手二
        </div>
      </div>
    </>
  );
};
export default OpponentChoose;
