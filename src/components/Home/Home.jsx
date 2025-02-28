import React from "react";
import "./Home.css";
import { assets } from "../../assets/assets";

const Home = () => {
  return (
    <div className="home">
      <div>
        <img
          className="background-img"
          src={assets.background_img}
          alt="Background"
        />
        <div className="images-section-mobile">
          {[assets.img1, assets.img2, assets.img3].map((img, i) => (
            <img key={i} src={img} alt={`img${i + 1}`} />
          ))}
        </div>
      </div>
      <div className="container">
        <div className="left-section">
          <div className="rating">
            <img src={assets.google_icon} alt="Google Rating" />
            <div className="rating-stars">
              {[...Array(4)].map((_, i) => (
                <img key={i} src={assets.star_icon} alt="star" />
              ))}
              <img src={assets.half_star} alt="half star" />
            </div>
            <p className="rating-p">(4.8/5.0)</p>
          </div>
          <h3 className="left-section-title">
            Small warehouse space for rent in{" "}
            <span className="highlight">Upper West Side, Atlanta, GA</span>
          </h3>
          <div className="features">
            {[
              {
                icon: assets.calendar,
                title: "Flexible spaces & leases",
                desc: "Leases as short as 6 months. Upscale or downscale anytime!",
              },
              {
                icon: assets.warehouse,
                title: "All-inclusive warehousing",
                desc: "Rental includes racking, equipment, loading docks & more",
              },
              {
                icon: assets.key,
                title: "Immediate availability",
                desc: "Move in today!",
              },
            ].map((feature, i) => (
              <div key={i} className="features-section">
                <img src={feature.icon} alt={feature.title} />
                <div className="features-section-item">
                  <p className="features-section-item-title">{feature.title}</p>
                  <p className="features-section-item-desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="images-section">
            {[assets.img1, assets.img2, assets.img3, assets.img4].map(
              (img, i) => (
                <img key={i} src={img} alt={`img${i + 1}`} />
              )
            )}
          </div>
          <div className="button-left">
            <button>Ask about a space &gt;</button>
          </div>
          <div className="last-section">
            <p>200-2,000 sq ft starting as low as $625/month</p>
          </div>
        </div>
        <div className="right-section">
          <h3 className="right-section-title">Visit for an in-person tour</h3>
          <div className="right-section-item">
            <img src={assets.person} alt="Representative" />
            <p>
              Cashana or Khadijah will answer your questions and find you a
              space that meets your needs.{" "}
              <span className="italic">No commitment necessary!</span>
            </p>
          </div>
          <form>
            {["First name", "Last name", "Email", "Phone number"].map(
              (placeholder, i) => (
                <input
                  key={i}
                  type={i === 2 ? "email" : "text"}
                  placeholder={`${placeholder} here`}
                />
              )
            )}

            <div className="button-right">
              <button>Step 2: Find a time that works &gt;</button>
            </div>
          </form>

          <div className="right-last-p">
            <p className="right-last-p1">
              Questions? Give us a call:{" "}
              <span className="clickable">415-985-0940</span>
            </p>
            <p className="right-last-p2">
              Looking for a job? <span className="clickhere">Click here.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
