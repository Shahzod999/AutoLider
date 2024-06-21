import "./successfully.scss";
import { BiSolidCheckShield } from "react-icons/bi";

const Successfully = () => {
  return (
    <div className="successfully">
      <BiSolidCheckShield />
      <span>The card has been added successfully</span>
    </div>
  );
};

export default Successfully;
