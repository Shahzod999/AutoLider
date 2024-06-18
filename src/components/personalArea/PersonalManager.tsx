import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import UserCard from "../userCard/UserCard";

const PersonalManager = () => {
  return (
    <div className="personalArea">
      <div className="personalArea__Name">
        <div className="personalArea__Name__Info">
          <img src="/user.jpg" alt="" />
          <h2>John Doe</h2>
        </div>
        <form>
          <label htmlFor="">FULL NAME</label>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Surname" />

          <label htmlFor="">CONTACTS</label>
          <input type="text" placeholder="+998 ( __ ) - ___-__-__" />
          <input type="email" placeholder="E-mail" />
        </form>
      </div>

      <div className="personalManager">
        
        <UserCard />
        
        <div className="personalManager__info">
          <div className="personalManager__info__namebox">
            <h3>Your manager</h3>
            <div>
              <span>Lorem Ipsum</span>
              <span>+998 ( __ ) ___ - __ - __</span>
              <span>loremipsum.ii@mail.uz</span>
            </div>
          </div>

          <div className="personalManager__info__accauntBox">
            <p>We are in touch every day from 09:00 to 18:00</p>
            <div>
              <FaTelegram className="personalAreaIcons" />
              <IoLogoWhatsapp className="personalAreaIcons" />
              <BsFacebook className="personalAreaIcons" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalManager;
