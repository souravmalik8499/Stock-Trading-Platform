import React from "react";

function Universe() {
  return (
    <div className="container mt-5 text-center">
      {/* Header */}
      <div className="row">
        <div className="col">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>

      {/* Logos Grid */}
      <div className="row mt-5">
        <div className="col-md-4 d-flex flex-column align-items-center mb-4">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="mb-2"
            style={{ maxHeight: "60px", objectFit: "contain" }}
          />
          <p className="text-muted">Thematic investment platform</p>
        </div>

        <div className="col-md-4 d-flex flex-column align-items-center mb-4">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="mb-2"
            style={{ maxHeight: "60px", objectFit: "contain" }}
          />
          <p className="text-muted">Algo & strategy platform</p>
        </div>

        <div className="col-md-4 d-flex flex-column align-items-center mb-4">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="mb-2"
            style={{ maxHeight: "60px", objectFit: "contain" }}
          />
          <p className="text-muted">Options trading platform</p>
        </div>

        <div className="col-md-4 d-flex flex-column align-items-center mb-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            className="mb-2"
            style={{ maxHeight: "60px", objectFit: "contain" }}
          />
          <p className="text-muted">Asset management</p>
        </div>

        <div className="col-md-4 d-flex flex-column align-items-center mb-4">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            className="mb-2"
            style={{ maxHeight: "60px", objectFit: "contain" }}
          />
          <p className="text-muted">Bonds trading platform</p>
        </div>

        <div className="col-md-4 d-flex flex-column align-items-center mb-4">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="mb-2"
            style={{ maxHeight: "60px", objectFit: "contain" }}
          />
          <p className="text-muted">Insurance</p>
        </div>
      </div>

      {/* Button */}
      <div className="row mt-4">
        <div className="col">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
