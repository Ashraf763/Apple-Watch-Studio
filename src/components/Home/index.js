import { useState, useEffect } from "react";

import "./style.css";
import Header from "../Header";
import WatchSizes from "../WatchSizes";
import WatchCaseCases from "../WatchCase";
import WatchStrap from "../WatchStrap";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sideView, setSideView] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const [buttonText, setButtonText] = useState("Size");
  const [showCases, setShowCases] = useState(false);
  const [showStrap, setShowStrap] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setButtonText("42MM 46MM"); // First transition
    }, 1000); // Change after 1 second

    const timeout2 = setTimeout(() => {
      setButtonText("Size"); // Back to original
    }, 3000); // Change back after 3 seconds

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [isVisible]);

  const onClickStartBtn = () => {
    setIsVisible(true);
  };

  const displaySIdeImage = () => {
    setSideView(!sideView);
  };

  const onCLickShowSizes = () => {
    setShowSizes(!showSizes);
    showSizes ? setButtonText("Size") : setButtonText("42MM 46MM");
    setShowCases(false);
    setShowStrap(false);
  };

  const onCLickCase = () => {
    setShowSizes(false);
    setButtonText("Size");
    setShowCases(!showCases);
    setShowStrap(false);
  };

  const onCLickStrap = () => {
    setShowStrap(!showStrap);
    setShowSizes(false);
    setButtonText("Size");
    setShowCases(false);
  };

  return (
    <div className="main-container">
      <Header isVisible={isVisible} />
      <div className="home-container">
        <div
          style={{ display: isVisible ? "none" : "block" }}
          className="details"
        >
          <h2 className="name">Apple Watch Studio</h2>
          <h1 className="title">
            Choose a case. <br />
            Pick a band. <br />
            Create your own style.
          </h1>
          <button
            type="button"
            className="get-started"
            onClick={onClickStartBtn}
          >
            Get started
          </button>
        </div>

        {showSizes === false && showCases === false && showStrap === false && (
          <>
            <div className="home-watch-container">
              {sideView ? (
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S01mb3pHMHA2MzFpM1RZVVFGV0dVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA"
                  alt="apple-watch"
                  className="top-image"
                  width={`${isVisible ? "400px" : "550px"}`}
                  height={`${isVisible ? "400px" : "550px"}`}
                />
              ) : (
                <div className={`image ${isVisible ? "move-up" : ""}`}>
                  <img
                    src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv"
                    alt="apple-watch"
                    className="top-image"
                    width={`${isVisible ? "400px" : "550px"}`}
                    height={`${isVisible ? "400px" : "550px"}`}
                  />
                  <img
                    src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM"
                    alt="apple-watch-strap"
                    className="strap-image"
                    width={`${isVisible ? "400px" : "550px"}`}
                    height={`${isVisible ? "400px" : "550px"}`}
                  />
                </div>
              )}
            </div>

            <div
              className="watch-details-container"
              style={{ display: isVisible ? "block" : "none" }}
            >
              <button
                type="button"
                className="side-view-btn"
                onClick={displaySIdeImage}
              >
                side view
              </button>
              <p className="watch-name">APPLE WATCH SERIES 10</p>
              <p className="watch-description">
                46mm Jet Black Aluminum Case with Black Solo Loop
              </p>
              <p>From $429</p>
            </div>
          </>
        )}

        {showSizes && <WatchSizes />}
        {showCases && <WatchCaseCases />}
        {showStrap && <WatchStrap />}

        <div
          style={{ display: isVisible ? "block" : "none" }}
          className="btns-container"
        >
          <button
            type="button"
            className="button animated"
            onClick={onCLickShowSizes}
          >
            {buttonText}
          </button>
          <button type="button bottom" className="button" onClick={onCLickCase}>
            {showCases ? "Aluminium  Titanium" : "Case"}
          </button>
          <button type="button" className="button" onClick={onCLickStrap}>
            {showStrap
              ? "Stainless  SteelSport  LoopSport  BandFineWovenBraided  Solo  LoopSolo  Loop"
              : "Band"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
