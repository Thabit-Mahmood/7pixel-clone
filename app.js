(() => {

  const { BrowserRouter, Routes, Route, Link } = ReactRouterDOM;


  const BrowserRouter = ReactRouterDOM.HashRouter;
  
  

  function NavBar() {
    return (
      <nav>
        <div className="logo">
          <Link to="/">
            <img
              src="https://7pixel.com.sa/wp-content/uploads/2023/05/logo-header.png"
              alt="7Pixels logo"
            />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <span>Solutions</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/audio">Audio</Link>
              </li>
              <li>
                <Link to="/video-displays">Video &amp; Displays</Link>
              </li>
              <li>
                <Link to="/lighting">Lighting</Link>
              </li>
              <li>
                <Link to="/projection">Projection</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }

  function Footer() {
    return (
      <div className="footer">
        <div className="top">
          <div>
            <h4>Stay Connected</h4>
            <p>
              <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
              <br />
              <a href="https://vimeo.com" target="_blank">Vimeo</a>
              <br />
              <a href="https://twitter.com" target="_blank">Twitter</a>
              <br />
              <a href="https://www.instagram.com" target="_blank">Instagram</a>
            </p>
          </div>
          <div>
            <h4>Page Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Who are we?</Link>
              </li>
              <li>
                <Link to="/audio">Our Solutions</Link>
              </li>
              <li>
                <Link to="/portfolio">Company Profile</Link>
              </li>
              <li>
                <Link to="/contact">Get in touch!</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Solution</h4>
            <ul>
              <li>
                <Link to="/audio">Audio Systems</Link>
              </li>
              <li>
                <Link to="/video-displays">LED Displays</Link>
              </li>
              <li>
                <Link to="/lighting">Lighting Solutions</Link>
              </li>
              <li>
                <Link to="/projection">Projection Systems</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact Info</h4>
            <p>Riyadh-KSA</p>
            <p>info@7pixel.com.sa</p>
            <p>+966 50 857 7700</p>
            <p>+966 54 001 8187</p>
            <p>+966 55 156 1821</p>
          </div>
        </div>
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "14px",
          }}
        >
          Copyright {new Date().getFullYear()} © All Rights Reserved 7Pixels
        </p>
      </div>
    );
  }

  function Home() {
    return (
      <>
        <section className="hero">
          <div>
            <h6>
              Delivering BEYOND expectations with events powered by
            </h6>
            <h1>
              Professional Audio, <span>Visual and Lighting systems solutions</span>
            </h1>
            <p>
              7 PIXELS is a Top Notch AVL, production company, producing small to
              large scale events and festivals, specialized in finding the best
              creative solutions using the latest technology.
            </p>
            <Link to="/contact" className="btn">
              Contact Us
            </Link>
          </div>
        </section>
        <section className="section">
          <h2>
            WE GIVE YOU ACCESS TO THE STATE-OF-THE-ART TECHNOLOGY
            SOLUTIONS.
          </h2>
          <p>
            7 Pixels is a top notch AVL and rigging production company
            producing from small to large scale events and festivals,
            specialized in finding the best creative solutions using the
            latest technology. 7 Pixels owns a large set of equipment’s,
            covering audio, video, lights, screens, projection and rigging
            from top international brands and backed by a team of experienced
            professionals in the field of AVL production.
          </p>
        </section>
        <section className="section">
          <h2>Smart AVL Technology Solutions</h2>
          <p>
            Sounds Real, Feels Live. A multidimensional experience like no
            other that activates all senses with the latest AVL technology
            solutions.
          </p>
          <div className="cards">
            <div
              className="card"
              style={{
                backgroundImage:
                  "url('https://7pixel.com.sa/wp-content/uploads/2023/05/1200px-Audio_mixer_faders.jpg')",
              }}
            >
              <h3>Audio</h3>
              <Link to="/audio" className="btn">
                Read More
              </Link>
            </div>
            <div
              className="card"
              style={{
                backgroundImage:
                  "url('https://7pixel.com.sa/wp-content/uploads/2023/05/800px_COLOURBOX1908937.jpg')",
              }}
            >
              <h3>LED Displays &amp; Video</h3>
              <Link to="/video-displays" className="btn">
                Read More
              </Link>
            </div>
            <div
              className="card"
              style={{
                backgroundImage:
                  "url('https://7pixel.com.sa/wp-content/uploads/2023/05/image_2023-05-24_131427811.png')",
              }}
            >
              <h3>Lighting</h3>
              <Link to="/lighting" className="btn">
                Read More
              </Link>
            </div>
            <div
              className="card"
              style={{
                backgroundImage:
                  "url('https://7pixel.com.sa/wp-content/uploads/2023/05/iStock-528417441-e1685030687728.jpg')",
              }}
            >
              <h3>Projection</h3>
              <Link to="/projection" className="btn">
                Read More
              </Link>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="service">
            <img
              src="https://7pixel.com.sa/wp-content/uploads/elementor/thumbs/vecteeFFDF-r7n8366bxdvjm5okdgrxd7optfixj0c9nu8pt6cxto.png"
              alt="Technical Design icon"
            />
            <h2>TECHNICAL DESIGN &amp; EXECUTION</h2>
            <p>
              From concept to completion, we turn ideas into precise,
              buildable solutions. We specialize in creating detailed
              technical drawings and execution plans that align with project
              goals and industry standards.
            </p>
          </div>
          <div className="service">
            <img
              src="https://7pixel.com.sa/wp-content/uploads/elementor/thumbs/vecteezy_gear-icon-style_2087jhgjg-scaled-r7n71b8cnm1rzkobg3mvxrmcgq4phw1h4ganxyhsfw.png"
              alt="Maintenance icon"
            />
            <h2>MAINTENANCE &amp; TECHNICAL SUPPORT</h2>
            <p>
              Reliable support that keeps your systems running smoothly. We
              offer comprehensive maintenance and technical support to ensure
              your equipment and systems remain efficient, safe, and fully
              operational.
            </p>
          </div>
        </section>
        <section className="section">
          <h2>OUR CLIENTS</h2>
          <div className="logo-grid">
            <img
              src="https://7pixel.com.sa/wp-content/uploads/2025/06/MiSK_Foundation_Logo.svg-300x100.png"
              alt="Client A"
            />
            <img
              src="https://7pixel.com.sa/wp-content/uploads/2025/06/imagesdsds-300x133.png"
              alt="Client B"
            />
            <img
              src="https://7pixel.com.sa/wp-content/uploads/2025/06/logo-construction-300x128.png"
              alt="Client C"
            />
            <img
              src="https://7pixel.com.sa/wp-content/uploads/2025/06/images-zxxzf-300x92.png"
              alt="Client D"
            />
          </div>
        </section>
      </>
    );
  }

  function About() {
    return (
      <div style={{ paddingTop: "80px" }}>
        <section className="section">
          <h1>About 7 Pixels</h1>
          <p>
            7 Pixels is a top notch AVL and rigging production company producing
            from small to large scale events and festivals, specialized in
            finding the best creative solutions using the latest technology. 7
            Pixels owns a large set of equipment’s, covering audio, video,
            lights, screens, projection and rigging from top international
            brands and backed by a team of experienced professionals in the
            field of AVL production.
          </p>
          <div className="metrics">
            <div className="metric">
              <h3>1000+</h3>
              <p>Projects Executed</p>
            </div>
            <div className="metric">
              <h3>50+</h3>
              <p>Professionals</p>
            </div>
            <div className="metric">
              <h3>100+</h3>
              <p>Business network across the GCC</p>
            </div>
            <div className="metric">
              <h3>11+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
          <h2>ALL ABOUT THE EXPERIENCE</h2>
          <p>
            As we know the importance of your brand, we make sure to place it at
            the heart of all installations by producing customized experiences
            that deliver your message and tell your story. A multidimensional
            experience like no other that activates all senses with the latest
            AVL technology solutions.
          </p>
          <div className="features">
            <div className="feature">
              <h4>Audio Equipment</h4>
              <p>Professional-grade audio system</p>
            </div>
            <div className="feature">
              <h4>Video and Display Equipment</h4>
              <p>Best viewing experience</p>
            </div>
            <div className="feature">
              <h4>Lighting Equipment</h4>
              <p>Exemplary lighting standards</p>
            </div>
            <div className="feature">
              <h4>Projection &amp; Rigging</h4>
              <p>Unparalleled performance</p>
            </div>
          </div>
          <h2>OUR VISION</h2>
          <p>
            To be the leading choice in the field of audio, lighting, and
            display solutions by offering state-of-the-art technologies that
            keep pace with advancements and meet clients’ needs with the
            highest level of professionalism.
          </p>
          <h2>OUR MISSION</h2>
          <p>
            We are committed to providing integrated solutions tailored to each
            project, focusing on quality, innovation, and outstanding customer
            service to ensure the best visual and auditory experience.
          </p>
        </section>
        <section className="section">
          <h2>OUR CLIENTS</h2>
          <div className="logo-grid">
            <img
              src="https://7pixel.com.sa/wp-content/uploads/2025/06/MiSK_Foundation_Logo.svg-300x100.png"
              alt="Client A"
            />
            <img
              src="https://7pixel.com.sa/wp-content/uploads/2025/06/imagesdsds-300x133.png"
              alt="Client B"
            />
            <img
              src="https://7pixel.com.sa/wp-content/uploads/2025/06/logo-construction-300x128.png"
              alt="Client C"
            />
            <img
              src="https://7pixel.com.sa/wp-content/uploads/2025/06/images-zxxzf-300x92.png"
              alt="Client D"
            />
          </div>
        </section>
      </div>
    );
  }

  function AudioPage() {
    return (
      <div style={{ paddingTop: "80px" }} className="section">
        <h1>Audio Equipment</h1>
        <p>
          Professional-grade audio system composition for world-class sound
          experience.
        </p>
        <ul>
          <li>
            Versatile microphones, speakers, amplifiers optimized for audience
            from 1,000 to 10,000
          </li>
          <li>Crystal clear audio quality PA systems</li>
          <li>Powerful, linear low-frequency response</li>
          <li>IP66/65 dust and water protection for indoor and outdoor</li>
          <li>Adjustable volume level to each audio source</li>
          <li>Wireless systems available</li>
        </ul>
      </div>
    );
  }

  function VideoDisplaysPage() {
    return (
      <div style={{ paddingTop: "80px" }} className="section">
        <h1>Video and Display Equipment</h1>
        <p>
          Best viewing experience for exceptional web streaming, video
          conferencing, live broadcasts, and live events.
        </p>
        <ul>
          <li>Low-latency up to 4K 10-bit 4:4:4 image processing</li>
          <li>Exceptional on screen image quality</li>
          <li>Consistent, high-contrast, saturated colors for any graphics</li>
          <li>Presentation in the best possible resolution</li>
          <li>Screen of all scales including convex and concave screens</li>
          <li>Premium, full-functionality SD and HD channels</li>
        </ul>
      </div>
    );
  }

  function LightingPage() {
    return (
      <div style={{ paddingTop: "80px" }} className="section">
        <h1>Lighting Equipment</h1>
        <p>
          Exemplary lighting standards, extensive collection of fixtures,
          infrastructures for bespoke deployment.
        </p>
        <ul>
          <li>LED lighting, entertainment lamps, lighting filters</li>
          <li>Custom lighting systems with remote-control enabled</li>
          <li>Intuitive touchscreen controller system</li>
        </ul>
      </div>
    );
  }

  function ProjectionPage() {
    return (
      <div style={{ paddingTop: "80px" }} className="section">
        <h1>Projection</h1>
        <p>
          Unparalleled performance, coverage, and set-up intelligibility.
        </p>
        <ul>
          <li>
            In house expertise for fully tailored solutions that are cost-
            effective and efficient
          </li>
          <li>
            Special effects and digital signage across any structures and
            buildings
          </li>
          <li>HD quality images, motion graphics and text</li>
          <li>Innovative and robust rigging and staging</li>
          <li>Installations, system consultations and design</li>
        </ul>
      </div>
    );
  }

  function Portfolio() {
    return (
      <div style={{ paddingTop: "80px" }}>
        <section className="section">
          <h1>Our Projects</h1>
          <p>Click the link below to download our company profile.</p>
          <a
            href="https://7pixel.com.sa/wp-content/uploads/2025/06/7PIXELS-PROFILE-ENG.-compressed.pdf"
            className="btn"
            target="_blank"
          >
            Download Profile
          </a>
        </section>
        <section className="section">
          <h2>Previous Projects</h2>
          <p>AVL solutions provided by 7Pixels.</p>
          <div className="logo-grid">
            <img
              src="https://7pixel.com.sa/wp-content/uploads/2025/06/MiSK_Foundation_Logo.svg-300x100.png"
              alt="Project 1"
            />
            <img
              src="https://7pixel.com.sa/wp-content/uploads/2025/06/imagesdsds-300x133.png"
              alt="Project 2"
            />
            <img
              src="https://7pixel.com.sa/wp-content/uploads/2025/06/logo-construction-300x128.png"
              alt="Project 3"
            />
          </div>
        </section>
      </div>
    );
  }

  function Contact() {
    function handleSubmit(e) {
      e.preventDefault();
      alert('Thank you for your message!');
    }
    return (
      <div style={{ paddingTop: "80px" }}>
        <section className="section">
          <h1>Get in Touch</h1>
          <div className="contact-container">
            <div className="contact-info">
              <h4>Our Location</h4>
              <p>Al MALAZ - RIYADH, KSA</p>
              <h4>Call or WhatsApp</h4>
              <p>+966 50 857 7700</p>
              <p>+966 54 001 8187</p>
              <p>+966 55 156 1821</p>
              <h4>Email Us</h4>
              <p>info@7pixel.com.sa</p>
              <h4>Follow us</h4>
              <p>
                <a href="https://www.linkedin.com" target="_blank">
                  LinkedIn
                </a>{' '}
                |{' '}
                <a href="https://vimeo.com" target="_blank">Vimeo</a>{' '}
                |{' '}
                <a href="https://twitter.com" target="_blank">Twitter</a>{' '}
                |{' '}
                <a href="https://www.instagram.com" target="_blank">
                  Instagram
                </a>
              </p>
            </div>
            <div className="contact-form">
              <h4>Information Request</h4>
              <p>
                Our Customer Care Team is available to help you get the best
                experience.
              </p>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="text" placeholder="Subject" required />
                <textarea rows="4" placeholder="Comments / Questions" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }

  function App() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/audio" element={<AudioPage />} />
          <Route path="/video-displays" element={<VideoDisplaysPage />} />
          <Route path="/lighting" element={<LightingPage />} />
          <Route path="/projection" element={<ProjectionPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
})();
