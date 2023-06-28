import logo from '../../assets/logos/logo.png';
import './style.scss';

const index = () => {
  return (
    <>
      <nav>
        <div className="navBar">
          <ul className="list grid grid--1x8">
            <li className="pos">
              <a className="navBar_img" href="">
                <img src={logo} alt="" />
              </a>
            </li>
            <li className="pos">
              <a href="">Home</a>
            </li>
            <li className="pos">
              <a href="">About</a>
            </li>
            <li className="pos">
              <a href="">Menus</a>
            </li>
            <li className="pos">
              <a href="">Offers</a>
            </li>
            <li className="pos">
              <a href="">Gallery</a>
            </li>
            <li className="pos">
              <a href="">Contact</a>
            </li>
            <li className="pos">
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default index;
