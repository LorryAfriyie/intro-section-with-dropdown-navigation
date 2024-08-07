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
            <img src="images/client-databiz.svg" alt="" />
            <img src="images/client-audiophile.svg" alt="" />
            <img src="images/client-meet.svg" alt="" />
            <img src="images/client-maker.svg" alt="" />
          </div>
        </div>

        {/* Image container section */}
        <div className="hero__img-container">
          <img
            srcSet="images/image-hero-mobile.png 500w, images/image-hero-desktop.png 1200w"
            src="images/image-hero-mobile.png"
            alt="hero-image"
          />
        </div>
      </div>
    </main>
  );
};
