import React, { useState } from "react";
import "./style.css";

const WatchCaseCases = () => {
  const watchCases = [
    {
      id: 1,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-silver-nc-s10_VW_PF+watch-face-46-aluminum-silver-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3Ni9MMjFrdVpVbER4UTlYL0F6UUxMTXlKN3h2cmJhZy9Wa2xIdm9lcGFpb09vMDVrRDBTL1JGOWgwenZrMUlPenphRldCVytibDdFVW4zaGQraXo4V2lGb0grci9sTHk0cW5yeWNFd2tRMXRGdEhRVmRIZVBLS2FtUFNyZG1CeE40OVlNTUpXNVJHaTMrakMzTkw0cUFRY2xKemp2MTFPaUhOWjNINUFjT21B",
      description: "46mm Silver Aluminum Case with Black Solo Loop",
      price: "$429",
    },
    {
      id: 2,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-rosegold-nc-s10_VW_PF+watch-face-46-aluminum-rosegold-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3MFhCVTI0TG9VSWowa2ZNaXhKRWFaSm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWVRZ3NtU2dFUnRuSVJhQzVBeFVadWtFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      description: "46mm Rose Gold Aluminum Case with Black Solo Loop",
      price: "$429",
    },
    {
      id: 3,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      description: "46mm Jet Black Aluminum Case with Black Solo Loop",
      price: "$429",
    },
    {
      id: 4,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-natural-cell-s10_VW_PF+watch-face-46-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqdVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsL3NqLzlHdDZiZk5mQ3ZsSjZIUUJtOVQzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      description: "46mm Natural Titanium Case with Black Solo Loop",
      price: "$749.00",
    },
    {
      id: 5,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-gold-cell-s10_VW_PF+watch-face-46-titanium-gold-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqa2NVRDBtRHBIdlNvZFpvSFN3SFNrVXlKN3h2cmJhZy9Wa2xIdm9lcGFpb285ZnlFYUluNlVpdEVDTlo4UFJtQnVWV3Bsak5WR3RZeXgwZTJxZ1FBQWQwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdUYVhFbmVlOVBZQVJ6YVVMREY4VVdDSkxMYjhBbEZsbUNjbmtLUUgvNzJC",
      description: "46mm Gold Titanium Case with Black Solo Loop",
      price: "$749.00",
    },
    {
      id: 6,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-slate-cell-s10_VW_PF+watch-face-46-titanium-slate-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqcVNqaHozUE8wNjI5UVd3V1MzZU9ITDk1ZDUyeHhvREd4VE1qbnlsOGRsRkpsRGF2TDgzZHo4RzR2eUh2TDZyckFIRjBBZXk0a1ZITlZxZjFUK21za1dGb0grci9sTHk0cW5yeWNFd2tRMXRGdEhRVmRIZVBLS2FtUFNyZG1CeE40OVlNTUpXNVJHaTMrakMzTkw0cUFRY2xKemp2MTFPaUhOWjNINUFjT21B",
      description: "46mm Slate Titanium Case with Black Solo Loop",
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
        <div className="strap-background"></div>
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
                  ? "case-active"
                  : index === currentIndex - 1
                    ? "case-prev"
                    : index === currentIndex + 1
                      ? "case-next"
                      : "case-hidden"
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
                  <p className="watch-name">{watch.name}</p>
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

export default WatchCaseCases;
