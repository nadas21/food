import "./main.css";
import girl from "../../assets/img/grill.png"



export const Main = () => {
  return (
    <>
      <div className="Main">
        <div className="container">
          <div className="main-inner">
            <div className="text">
              <h4 className="text-h4">Menu</h4>
              <h2 className="text-h2">Food Full of treaty Love</h2>
              <p className="text-p">
                There are many things are needed to start the Fast Food
                Business. You need not only Just Food Stalls with Persons but
                also specialized equipment, Skills to manage Customers,
              </p>
            </div>
            <div className="card">
                <ul className="card-list">
                    <a href="#" className="card-img">
                        <img src={girl} alt="" />
                    </a>
                    <li className="card-list-item">

                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
