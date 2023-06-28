import Hero from '../../components/Hero';
import AboutUs from '../../components/AboutUs';
import Curve from '../../components/Curve';
import FoodGallery from '../../components/FoodGallery';
import Testimonial from '../../components/Testimonial';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import '../../styles/global.scss';

function index() {
  return (
    <>
      <section className="block--hero">
        <Hero />
      </section>
      <AboutUs />
      <Curve />
      <FoodGallery />
      <Testimonial />
      <Menu />
      <Footer />
    </>
  );
}

export default index; 
