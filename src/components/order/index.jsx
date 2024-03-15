import "./main.css";

export const Order = () => {
  return (
    <>
      <div className="Order">
        <div className="container">
          <div className="order-inner">
            <h2 className="order-h2">
              Buyurtma bering va pishirishni unuting!
            </h2>
            <div className="order-now">
              <div className="order-list">
                <ul className="list">
                  <h4 className="order-h4">Darhol to'lash</h4>
                  <h4 className="order-item-h4">2-kun</h4>
                  <p className="order-p">6 kun Foyda 40%</p>
                  <p className="oreder-item-p">12 kun Foyda 6%</p>
                  <li className="list-list">
                    <h3 className="list-h3">Bo'lib-bo'lib to'lash</h3>
                    <p className="list-p">30 kun Foyda 9%</p>
                  </li>
                </ul>
              </div>
              <div className="box2">
                <h2 className="box2-h2">
                  Men mazali taom iste'mol qilmoqchiman
                </h2>
                <p className="box2-p">200 000-so'm</p>
                <p className="box2-item-p">
                  Sizning imtiyozingiz - 100 000-so'm
                </p>
                <input type="text" className="box2-input" placeholder="nomer" />
                <div className="btn">
                <button className="box2-btn">zakaz berish</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
