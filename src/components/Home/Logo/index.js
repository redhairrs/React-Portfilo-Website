import './index.scss'
import laptopImg from "../../../assets/images/about.png";

const Logo = () => {

    return (
        <div className="logo-container">
            <img src={laptopImg} alt="about" className='solid-logo' />
        </div>
    )
}

export default Logo