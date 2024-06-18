import "./pagination.scss";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Pagination = () => {
  return (
    <div className="pagination">
      <MdOutlineKeyboardArrowLeft className="icon left" />
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <MdOutlineKeyboardArrowRight className="icon right" />
      <MdOutlineKeyboardDoubleArrowRight className="icon right" />
      <button>10</button>
    </div>
  );
};

export default Pagination;
