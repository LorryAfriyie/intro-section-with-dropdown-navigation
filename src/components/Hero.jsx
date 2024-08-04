export const Hero = () => {
  return (
    <main className="hero">
      <div className="hero__content-grid">
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
        <div className="hero__img-container">
          <img src="images/image-hero-desktop.png" alt="" />
        </div>
      </div>
    </main>
  );
};
