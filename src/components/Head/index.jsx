import "./main.css";
import gosht from "../../assets/img/gosht.png"


export const Head = () => {
  return (
    <>
      <div className="Head">
        <div className="container">
          <div className="head-inner">
            <nav className="nav">
              <h1 className="nav-text">
                Making time a good time by making food the good food.
              </h1>
              <p className="nav-p">
                There are many things are needed to start the Fast Food
                Business. You need not only Just Food Stalls with Persons but
                also specialized equipment,
              </p>
            <div className="head-box">
            <button className="nav-btn">Order Now</button>
              <button className="nav-item-btn">
              Food Details
              </button>
            </div>
            </nav>
            <div className="head-img">
                <img src={gosht} alt="" width={801} height={600} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
