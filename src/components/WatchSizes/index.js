import { useState, useRef } from "react";
import "./style.css";

const watchSizeOptions = [
  {
    id: 1,
    name: "APPLE WATCH SERIES 10",
    description: "46mm Jet Black Aluminum Case with Black Solo Loop",
    price: "$429",
    size: "46mm",
    sideImage:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S01mb3pHMHA2MzFpM1RZVVFGV0dVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
    watchStrap:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
    watch:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
  },
  {
    id: 2,
    name: "APPLE WATCH SERIES 10",
    description: "42mm Jet Black Aluminum Case with Black Solo Loop",
    price: "$399",
    size: "42mm",
    sideImage:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY7N3ref_VW_34FR+watch-case-42-aluminum-jetblack-nc-s10_VW_34FR+watch-face-42-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=K2t1bnExRnFNdEtwODg0U2VzTVNiWjNqbENGcEFFTlJVaXJwL2VzdGxEMU9NU1VZS1dIdzdkNjZzejNRdFdUZzBnRnJNVU50TjZtbUN3ZjYvVksrL1FtTHNhRmRKQkE2OXJHRVEvRTFWdXVoSHlqYUY2YWdsek45M29HTWxyVHhWNEM0ZHZzMzMzajJiOGZuamRiTE9vd244Uy9uZVBMWExUVnVOTDZqcWVYWktMOUF6cmN5SDFRZExjLzZRR3NvZVBpbmE4U0VxZC94d1Y1L0ZOTkpUZw",
    watchStrap:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY7N3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=V0p1YnJBTzdtN2g0SkpiRThzUmdWenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
    watch:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
  },
];

const WatchSizes = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sideView, setSideView] = useState(false);

  const carouselRef = useRef(null);

  const handleNext = () => {
    if (activeIndex < watchSizeOptions.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const displaySIdeImage = () => {
    setSideView(!sideView);
  };

  return (
    <div className="carousel-container">
      <button
        className="case-arrow-button case-left-arrow"
        onClick={handlePrev}
        style={{ visibility: `${activeIndex === 0 ? "hidden" : "visible"}` }}
      >
        &#8249;
      </button>
      <div className="carousel-wrapper" ref={carouselRef}>
        {watchSizeOptions.map((image, index) => (
          <div
            key={image.id}
            className={`case-carousel-item ${
              index === activeIndex
                ? "case-active"
                : index === activeIndex - 1
                  ? "case-prev"
                  : index === activeIndex + 1
                    ? "case-next"
                    : "case-hidden"
            }`}
          >
            <div>
              <div className="home-watch-container-2">
                {sideView ? (
                  <img
                    src={image.sideImage}
                    alt={image.name}
                    className="top-image"
                    width="400px"
                    height="400px"
                  />
                ) : (
                  <>
                    <img
                      src={image.watch}
                      alt={image.size}
                      className="top-image"
                      width="400px"
                      height="400px"
                    />
                    <img
                      src={image.watchStrap}
                      alt={image.size}
                      className="strap-image"
                      width="400px"
                      height="400px"
                    />
                  </>
                )}
              </div>
              <p className="desc">{image.description}</p>

              {index === activeIndex && (
                <div className="watch-details-container">
                  <button
                    type="button"
                    className="side-view-btn"
                    onClick={displaySIdeImage}
                  >
                    side view
                  </button>
                  <p className="watch-name">{image.name}</p>
                  <p className="watch-description">{image.description}</p>
                  <p>From {image.price}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <button
        className="case-arrow-button case-right-arrow"
        onClick={handleNext}
        style={{
          visibility: `${activeIndex === watchSizeOptions.length - 1 ? "hidden" : "visible"}`,
        }}
      >
        &#8250;
      </button>
    </div>
  );
};

// const WatchSizes = () => {
//      const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === watchSizeOptions.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? watchSizeOptions.length - 1 : prevIndex - 1
//     );
//   };

//   const currentWatch = watchSizeOptions[currentIndex];

//      return (
//           <div className="carousel">
//             <div className="carousel-content">
//               <button className="carousel-btn prev" onClick={prevSlide}>
//                     &#10094;
//               </button>
//                <div className="carousel-item">
//                <div className='watches-container'>
//                {watchSizeOptions.map((watch, index) => {
//               const position =
//                 index === watch
//                   ? "center"
//                   : index === (watch - 1 + watchSizeOptions.length) % watchSizeOptions.length
//                   ? "left"
//                   : "right";

//               return (

//                <div className={`watch ${position}`}>
// <button type='button' className='home-watch-container-2'>
//   <img
//   src={watch.watch}
//   alt={watch.size}
//   className='top-image'
//   />
//   <img
//   src={watch.watchStrap}
//   alt={watch.size}
//   className='strap-image'
// />
// </button>

//                </div>
//               );
//             })}
//                </div>
//           <div className="watch-details">
//             <h2>{currentWatch.name}</h2>
//             <p>From {currentWatch.price}</p>
//           </div>
//         </div>
//         <button className="carousel-btn next" onClick={nextSlide}>
//           &#10095;
//         </button>
//       </div>
//       </div>
//      )
// }

export default WatchSizes;
