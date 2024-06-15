import "./personalArea.scss";

export default function PersonalArea() {
  return (
    <>
      <main className="container">
        <div className="personalAreaMain">
          <div className="personalArea">
            <aside>
              <span>My details</span>
              <span>Rent</span>
              <span>Leasing</span>
              <span>Payment cards</span>
              <span>Fines</span>
              <span>Subscriptions</span>
            </aside>

            <div className="personalArea__Name">
              <div className="personalArea__Name__Info">
                <img src="" alt="" />
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
          </div>

          <div className="personalManager">
            <div className="cardHolder">
              <img src="" alt="" />
              <button>+</button>
            </div>

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
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
