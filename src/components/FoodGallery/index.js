import meal6 from '../../assets/images/meal6.jpg';
import meal7 from '../../assets/images/meal7.jpg';
import meal8 from '../../assets/images/meal8.jpg';
import meal9 from '../../assets/images/meal9.jpg';
import meal10 from '../../assets/images/meal10.jpg';
import meal11 from '../../assets/images/meal11.jpg';
import './style.scss';

const index = () => {
  return (
    <div>
      <section className="block--gallery">
        <div className="gallery container">
          <h2 className="gallery_heading">Our Food Gallery</h2>
          <div className="grid grid--1x2x3 galleryAlbum">
            <picture className="gallery_img">
              <img src={meal6} alt="" />
            </picture>
            <picture className="gallery_img">
              <img src={meal7} alt="" />
            </picture>
            <picture className="gallery_img">
              <img src={meal8} alt="" />
            </picture>
            <picture className="gallery_img">
              <img src={meal9} alt="" />
            </picture>
            <picture className="gallery_img">
              <img src={meal10} alt="" />
            </picture>
            <picture className="gallery_img">
              <img src={meal11} alt="" />
            </picture>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
