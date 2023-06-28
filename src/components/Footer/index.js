import meal16 from '../../assets/images/meal5&16@2x.png';
import logo_footer from '../../assets/logos/logo_footer.png';
import facebook from '../../assets/logos/facebook.png';
import twitter from '../../assets/logos/twitter.png';
import instagram from '../../assets/logos/instagram.png';
import pinterest from '../../assets/logos/pinterest.png';
import './style.scss';

const index = () => {
  return (
    <div>
      <section className="block--footer">
        <div className="footer_card">
          <div className="footer_card_img">
            <img src={meal16} alt="" />
          </div>
          <div className="footer_card_content">
            <h2>Best Breakfast</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              laboriosam nostrum natus odit quam fuga temporibus nihil, error
              tenetur animi.
            </p>
          </div>
        </div>
        <div className="footer container">
          <span className="footer_img">
            <img src={logo_footer} alt="" />
          </span>
          <div className="footer_menu">
            <ul className="footer_menu_opt list">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Foods</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Location</a>
              </li>
            </ul>
          </div>
          <div className="footer_social">
            <ul className="social_logo list">
              <li>
                <img src={facebook} alt="" />
              </li>
              <li>
                <img src={twitter} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>
              <li>
                <img src={pinterest} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
