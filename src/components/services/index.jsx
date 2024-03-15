import "./main.css";
import uy from "../../assets/img/uy.png";
import eltivchu from "../../assets/img/eltivchu.png";
import smayil from "../../assets/img/smayil.png";
import qiz from "../../assets/img/qiz.png";

export const Services = () => {
  return (
    <>
      <div className="services">
        <div className="container">
          <div className="services-inner">
            <div className="box">
              <p className="services-p">Features</p>
              <h2 className="services-h2">Food with a New Passion</h2>
              <div className="services-menu">
                <ul className="services-list">
                  <a href="#" className="services-img">
                    <img src={uy} height={88} width={88} alt="" />
                  </a>
                  <li className="services-item">
                    <h4 className="services-h4">Quality Food</h4>
                    <p className="services-item-p">
                      It can be a very secure path to earn good money and make
                      you very successful creative entrepreneur.
                    </p>
                  </li>
                </ul>
                <ul className="services-list">
                  <a href="#" className="services-img">
                    <img src={eltivchu} height={88} width={88} alt="" />
                  </a>
                  <li className="services-item">
                    <h4 className="services-h4">Food Delivery</h4>
                    <p className="services-item-p">
                      It can be a very secure path to earn good money and make
                      you very successful creative entrepreneur.
                    </p>
                  </li>
                </ul>
                <ul className="services-list">
                  <a href="#" className="services-img">
                    <img src={smayil} height={88} width={88} alt="" />
                  </a>
                  <li className="services-item">
                    <h4 className="services-h4">Super Taste</h4>
                    <p className="services-item-p">
                      It can be a very secure path to earn good money and make
                      you very successful creative entrepreneur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="about">
              <div className="about-inner">
                <a href="#" className="about-img">
                  <img src={qiz} alt="" width={555} height={500} />
                </a>
                <div className="about-box">
                  <h4 className="about-h4">About us</h4>
                  <p className="about-p">
                    Food Stalls with Persons but to Product marketing plane
                    catlogues etc to.
                  </p>
                  <p className="about-item-p">
                    There are many things are needed to start the Fast Food
                    Business. You need not only Just Food Stalls with Persons
                    but also equipment make your marketing plane Effective.
                  </p>
                  <button className="about-btn">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
