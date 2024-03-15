import "./main.css"
import logo from "../../assets/img/logo.png"



export const Header = () => {
    return(
        <>
        <div className="Header">
            <div className="container">
                <div className="header-inner">
                    <a href="#" className="header-logo">
                        <img src={logo} alt="logo"  width={44} height={43} />
                    </a>
                    <ul className="header-list">
                        <li className="list-item">
                            <a href="#" className="list-link">
                            Home
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="#" className="list-link">
                            About us
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="#" className="list-link">
                            Menu
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="#" className="list-link">
                            Features    
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="#" className="list-link">
                            Contact us
                            </a>
                        </li>
                        <button className="list-btn">Booking Now</button>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}