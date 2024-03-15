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
              <p className="services-p">Xususiyatlari</p>
              <h2 className="services-h2">Al-baraka Food qanday ishlaydi?</h2>
              <div className="services-menu">
                <ul className="services-list">
                  <a href="#" className="services-img">
                    <img
                      src="https://cdn.growfood.pro/s1/vcp/62a96a91c9c49.svg?fmt=webp&quality=95"
                      height={117}
                      width={117}
                      alt=""
                    />
                  </a>
                  <li className="services-item">
                    <p className="services-p">

                    </p>
                    <h4 className="services-h4">
                      Keling, KBZHU ni hisoblaylik va porsiya o'lchamlari
                    </h4>
                  </li>
                </ul>
                <ul className="services-list">
                  <a href="#" className="services-img">
                    <img
                      src="https://cdn.growfood.pro/s1/vcp/62a96a9963d86.svg?fmt=webp&quality=95"
                      height={117}
                      width={117}
                      alt=""
                    />
                  </a>
                  <li className="services-item">
                    <h4 className="services-h4">
                      Keling, mazali taom tayyorlaymiz va sog'lom taomlar
                    </h4>
                  </li>
                </ul>
                <ul className="services-list">
                  <a href="#" className="services-img">
                    <img
                      src="https://cdn.growfood.pro/s1/vcp/62a96aab79e9e.svg?fmt=webp&quality=95"
                      height={117}
                      width={117}
                      alt=""
                    />
                  </a>
                  <li className="services-item">
                    <h4 className="services-h4">
                      Biz qulay 2 soatlik intervalda bepul yetkazib beramiz
                    </h4>
                  </li>
                </ul>
                <ul className="services-list">
                  <a href="#" className="services-img">
                    <img
                      src="https://cdn.growfood.pro/s1/vcp/62a96aa688c47.svg?fmt=webp&quality=95"
                      height={117}
                      width={117}
                      alt=""
                    />
                  </a>
                  <li className="services-item">
                    <p className="sercices-p">
                    Sizda bo'ladi shunchaki 
                       isinish
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
