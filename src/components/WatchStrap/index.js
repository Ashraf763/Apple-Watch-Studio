import React, { useState } from "react";
import "./style.css";

const WatchStrap = () => {
  const watchCases = [
    {
      id: 1,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7J4ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dEtVZDJwdGdSUTNydjBzY0ltbTBpRHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      description: "46mm Natural Titanium Case with Natural Milanese Loop",
      price: "$799.00",
    },
    {
      id: 2,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7K4ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=YkFzZ2NhdC8rT28wTVJIMG8zVGJhanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      description: "6mm Natural Titanium Case with Gold Milanese Loop",
      price: "$799.00",
    },
    {
      id: 3,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7L4ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Zms0YTN2QWltRzdYTFhmdGNUQ3Y3enVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      description: "46mm Natural Titanium Case with Slate Milanese Loop",
      price: "$799.00",
    },
    {
      id: 4,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMF3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MWgzUlBDUHFLc09nNXp6YkQ2R2tRNFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZVF0MVBoQTNhT0JsTU9wemdVTERUbGtsUWtsVFJIQnpsQUUwTmlqMmlPcWM",
      description: "46mm Natural Titanium Case with Natural Link Bracelet",
      price: "$1,049.00",
    },
    {
      id: 5,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMH3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=aHdtU2pZdHZkZkdRMDR1T1VOK1RNSVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZVF0MVBoQTNhT0JsTU9wemdVTERUbGtsUWtsVFJIQnpsQUUwTmlqMmlPcWM",
      description: "46mm Natural Titanium Case with Gold Link Bracelet",
      price: "$1,049.00",
    },
    {
      id: 6,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMK3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=bHRhN2Rod0NDaU9ITnVtNkJjSWpkSVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZVF0MVBoQTNhT0JsTU9wemdVTERUbGtsUWtsVFJIQnpsQUUwTmlqMmlPcWM",
      description: "46mm Natural Titanium Case with Slate Link Bracelet",
      price: "$1,049.00",
    },
    {
      id: 7,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL73_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZDltL2RrNFBVSStNSERYSUpVdENCSVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs",
      description: "46mm Natural Titanium Case with Ultramarine Sport Loop",
      price: "$749.00",
    },
    {
      id: 8,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL83_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=a3p5RDNCTHlpSnh6eE1kSXZuUXJ6NFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs",
      description: "46mm Natural Titanium Case with Lake Green Sport Loop",
      price: "$749.00",
    },
    {
      id: 9,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL53_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WnQyLzFySlFDbE0zazUzelhSWnYrSVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs",
      description: "46mm Natural Titanium Case with Blue Cloud Sport Loop",
      price: "$749.00",
    },
    {
      id: 10,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=QTFaVlplN1d2dmovWUttemNVR3Y3VHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDFsZVFCNzVxV1ZrUEZaNngvTVNzc0k",
      description: "46mm Natural Titanium Case with Ink Sport Loop",
      price: "$749.00",
    },
    {
      id: 11,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL63_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=SlQ2VStRTHBMMTFPRU1uTmxoVHpJNFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs",
      description: "46mm Natural Titanium Case with Plum Sport Loop",
      price: "$749.00",
    },
    {
      id: 12,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MN6L3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=elNlK2NZbXc4Rmtkb0pudWY3ZFBTNFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZTlEblVKbEZPd1BUQzZVeitvQWlDU0NTK2lCQXhRdDRQSVI1dHVzMFlaUlk",
      description: "46mm Natural Titanium Case with Pride Edition Sport Loop",
      price: "$749.00",
    },
    {
      id: 13,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTJ3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=VHBsUmlDTHRQNFBFUHMxNEhiNm4yNFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZTlEblVKbEZPd1BUQzZVeitvQWlDU0NTK2lCQXhRdDRQSVI1dHVzMFlaUlk",
      description: "46mm Natural Titanium Case with Black Unity Sport Loop",
      price: "$749.00",
    },
    {
      id: 14,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLX3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=TWYvajZ0Wi9GK0c4Q3Z5S1J6ejJ2VHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      description: "46mm Natural Titanium Case with Stone Gray Sport Band",
      price: "$749.00",
    },
    {
      id: 15,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM63ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ODl3Z1Q2VWx4QjZLd3Y4U3Brb3Y0VHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      description: "46mm Natural Titanium Case with Starlight Sport Band",
      price: "$749.00",
    },
    {
      id: 16,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=bTVPWG9LeURGUk1MeHRrSXdzZHJFenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      description: "46mm Natural Titanium Case with Black Sport Band",
      price: "$749.00",
    },
    {
      id: 17,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWY3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=cENDQStWaTl2LytFZ0J1Z08zeVNPanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      description: "46mm Natural Titanium Case with Black Magnetic Link",
      price: "$799.00",
    },
    {
      id: 18,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWW3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=RW5hV0wrL0xmSE8rMHRSZVArazBMenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      description: "46mm Natural Titanium Case with Dark Taupe Magnetic Link",
      price: "$799.00",
    },
    {
      id: 19,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY373ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=azQvbVNwVzRJcWRlblRnV01DRGIrVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc",
      description:
        "46mm Natural Titanium Case with Lake Green Braided Solo Loop",
      price: "$749.00",
    },
    {
      id: 20,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY2P3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dlkybTZ4d2drVWNXZnNmdXVuKzNlRHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc",
      description: "46mm Natural Titanium Case with Midnight Braided Solo Loop",
      price: "$749.00",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < watchCases.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="app-container">
      <div className="carousel-container-two">
        <div className="watch-background"></div>
        <button
          className="case-arrow-button case-left-arrow"
          onClick={handlePrev}
          style={{ visibility: `${currentIndex === 0 ? "hidden" : "visible"}` }}
        >
          &#8249;
        </button>

        <div className="case-carousel">
          {watchCases.map((watch, index) => (
            <div
              key={watch.id}
              className={`case-carousel-item ${
                index === currentIndex
                  ? "strap-active"
                  : index === currentIndex - 1
                    ? "strap-prev"
                    : index === currentIndex + 1
                      ? "strap-next"
                      : "strap-hidden"
              }`}
            >
              <div className="home-watch-container">
                <img
                  src={watch.image}
                  alt={watch.description}
                  className="top-image"
                  width="400px"
                  height="400px"
                />
              </div>
              <p className="desc">{watch.description}</p>

              {index === currentIndex && (
                <div className="watch-case-description-container">
                  <button type="button" className="side-view-btn">
                    side view
                  </button>
                  <p className="watch-name" style={{ fontSize: "12px" }}>
                    APPLE WATCH SERIES 10
                  </p>
                  <p className="watch-description">{watch.description}</p>
                  <p>From {watch.price}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          className="case-arrow-button case-right-arrow"
          onClick={handleNext}
          style={{
            visibility: `${currentIndex === watchCases.length - 1 ? "hidden" : "visible"}`,
          }}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default WatchStrap;
