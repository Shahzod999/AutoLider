import { PiNotePencil } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import './accauntName.scss'

const AccauntName = () => {
  return (
      <div className="accauntNameHolder">
        <div className="accauntNameHolder__title">
          <h3>Account name</h3>
          <div className="accauntNameHolder__title__icons">
            <PiNotePencil size={22} />
            <FaStar />
          </div>
        </div>
        <span>Name of the bank :</span>
        <span>VAT : No</span>
        <span>CC : 0000 0000 0000</span>
        <span>INN : 0000 0000 0000</span>
        <span>CHECKPOINT : 0000 0000 0000</span>
      </div>
  );
};

export default AccauntName;
