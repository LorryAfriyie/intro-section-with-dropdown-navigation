import img from '/images/image-hero-desktop.png';
import imgMobile from '/images/image-hero-mobile.png';

import databiz from '/images/client-databiz.svg';
import audiophile from '/images/client-audiophile.svg';
import meet from '/images/client-meet.svg';
import marker from '/images/client-maker.svg';

export const Hero = () => {
  return (
    <main className="hero">
      <div className="hero__content-grid">
        {/* Information container section */}
        <div className="hero__info">
          <h1 className="hero__main-text">Make remote work</h1>

          <p className="hero__sub-text">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <button className="hero__learn-btn">Learn more</button>

          <div className="hero__client-grid">
            <img src={databiz} alt="" />
            <img src={audiophile} alt="" />
            <img src={meet} alt="" />
            <img src={marker} alt="" />
          </div>
        </div>

        {/* Image container section */}
        <div className="hero__img-container">
          <picture>
            <source
              media="(min-width: 40em)"
              srcSet={img}
            />
            <source srcSet={imgMobile} />
            <img src={img} alt="hero-image" />
          </picture>
        </div>
      </div>
    </main>
  );
};
