import meal13 from '../../assets/images/meal13.jpg';
import meal14 from '../../assets/images/meal14.jpg';
import meal15 from '../../assets/images/meal15.jpg';
import './style.scss';

const Menu = () => {
  return (
    <div>
      <section className="block--media">
        <div className="menu container">
          <div className="media_heading">
            <h2>Our Menu</h2>
          </div>
          <div className="grid grid--1x3">
            <div className="media_object grid">
              <picture className="mediaImg">
                <img src={meal13} alt="" />
              </picture>
              <div className="media_content">
                <h3 className="mediaHeading">Italian Source Mushroom</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis enim, incidunt harum id ipsa, ea pariatur.
                </p>
                <h3 className="mediaPrice">Price: $12.00</h3>
              </div>
            </div>
            <div className="media_object grid">
              <picture className="mediaImg">
                <img src={meal14} alt="" />
              </picture>
              <div className="media_content">
                <h3 className="mediaHeading">Italian Source Mushroom</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis enim, incidunt harum id ipsa, ea pariatur.
                </p>
                <h3 className="mediaPrice">Price: $12.00</h3>
              </div>
            </div>
            <div className="media_object grid">
              <picture className="mediaImg">
                <img src={meal15} alt="" />
              </picture>
              <div className="media_content">
                <h3 className="mediaHeading">Italian Source Mushroom</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis enim, incidunt harum id ipsa, ea pariatur.
                </p>
                <h3 className="mediaPrice">Price: $12.00</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
