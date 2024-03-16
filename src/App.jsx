import "./App.css";

function App() {
  return (
    <>
      <section id="main">
        <header id="top">
          <div id="logo">
            <img src="./res/1stlogo.png" alt="" />
            <h1>LuminaLens</h1>
          </div>

          <nav id="nav">
            <a href="">Home</a>
            <a href="">About US</a>
            <a href="">Our Portfolio </a>
            <a href="">Contact Us</a>
          </nav>

          <h1 id="sess">Book Session</h1>
        </header>

        <section id="begin">
          <div>
            <h1>
              Lens and life: <br />
              Where <br />
              <h2>Every click</h2>
              Counts <br />
            </h1>

            <img src="./res/bookasession.png" alt="" />
          </div>
        </section>
        <section id="img1">
          <div>
            <img src="./res/camera.png" alt="" />
          </div>
        </section>

        <section id="abttext">
          <div id="abttext2">
            <h1>About Us</h1>
            <div id="text">
              <p>
                {" "}
                <br /> Welcome to LuminaLens Photography, where we freeze
                fleeting
                <br /> moments and transform them into timeless memories through
                <br /> the lens, capturing the essence of wildlife, love-filled
                weddings,
                <br /> curated interiors, vast landscapes, and delectable
                gourmet
                <br /> cuisine, blending creativity and technical expertise to
                bridge the
                <br /> gap between the visual and the emotional, aiming to craft
                each
                <br /> photograph into a unique narrative that resonates with
                hearts
                <br /> inviting you to join us on this photographic journey
                where every
                <br /> click is a testament to life's beautiful moments.{" "}
              </p>
            </div>
          </div>
        </section>

        <section id="video">
          <div>
            <img src="./res/video.png" alt="" />
          </div>
        </section>

        <section id="abttext">
          <div id="abttext2">
            <h1>Our Portfolio</h1>
            <div id="text" className="nxt">
              <p>
                Explore the beauty of diverse worlds through our lens - from the{" "}
                <br />
                untamed wilderness to love-filled weddings, curated interiors,
                <br />
                vast landscapes, and exquisite gourmet creations, each frame{" "}
                <br />
                holds a story waiting to be told
              </p>
            </div>
          </div>
        </section>

        <section id="imgrow">
          <div>
            <img src="./res/image1.png" alt="" />
          </div>
          <div>
            <img src="./res/image2.png" alt="" />
          </div>
          <div>
            <img src="./res/image3.png" alt="" />
          </div>
          <div>
            <img src="./res/image4.png" alt="" />
          </div>
          <div>
            <img src="./res/image5.png" alt="" />
          </div>
        </section>

        <section id="abttext">
          <div id="abttext2">
            <h1>FAQ</h1>
            <div id="text">
              <p>
                Got questions?we've got answers!Browse our FAQs for all the{" "}
                <br /> info you need
              </p>
            </div>
          </div>
        </section>

        <div id="design">
          <p>
            What type of Photography service do we offer?
            <br />
            How can i book a Photography session with your studio? <br />
            Do you offer customised Photography packages?
            <br />
            Can we view sample work or a portfolio before booking? <br />
            Are your photographers experienced and skilled?
            <br />
          </p>
          <div id="plus">
            <p>
              +<br />
              +<br />
              +<br />
              +<br />
              +<br />
            </p>
          </div>
        </div>

        <section>
          <div className="footer">{/* <img src={background} alt="" /> */}</div>
          {/* <div>
            <img src="./res/Logo1.png" alt="" />
            <p>LuminaLens</p>
            <p>X</p>
            <p>Instagram</p>
          </div> */}
        </section>
      </section>
    </>
  );
}

export default App;
