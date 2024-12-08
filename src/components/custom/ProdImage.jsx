import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProdImage = ({ images,Index,setBagImage}) => {
  const [image, setImage] = useState();
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setImage(Index);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [images]);

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 640);
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxImage(images[index]);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setIsZoomed(false);
  };

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setLightboxImage(images[nextIndex]);
    setIsZoomed(false);
  };

  const showPreviousImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setLightboxImage(images[prevIndex]);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const minSwipeDistance = 50;

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);

  const handleTouchMove = (e) => setTouchEnd(e.touches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < images.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <div className="p-2 flex gap-2 h-[904px] ">
      <div className="overflow-y-scroll element-class hidden sm:grid gap-2 ">
        {images.map((img, index) => (
          <div
            className="h-[215px] cursor-pointer hover:scale-[0.95] transition-all ease-linear"
            onClick={() => {setImage(img);setBagImage(img)}}
            key={index}
          >
            <img src={`https://image-server-ebon.vercel.app/image/${images[index]}`} className="h-full" alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
      <div
        className="flex-1 justify-center flex relative overflow-x-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {isSmallScreen ? (
          <>
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  className="flex-shrink-0 h-full w-full object-cover"
                  src={`https://image-server-ebon.vercel.app/image/${image}`}
                  alt={`Product ${index + 1}`}
                  onClick={() => openLightbox(index)}
                />
              ))}
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full mx-1 ${currentSlide === index ? 'bg-black' : 'bg-gray-300'
                    }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <img className="flex h-full object-cover" src={`https://image-server-ebon.vercel.app/image/${image}`} alt="Main Product" />
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-zoom-in"
              onClick={() => openLightbox(images.indexOf(image))}
            ></div>
          </>
        )}
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-white flex items-center justify-center z-50 cursor-default border"
          onClick={closeLightbox}
        >
          <div className="relative max-w-full max-h-full flex items-center justify-center">
            <img
              src={`https://image-server-ebon.vercel.app/image/${image}`}
              alt="Lightbox"
              className={`max-w-[450px] max-h-[50%] object-contain cursor-pointer transition-transform duration-300 ${isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
                }`}
              onClick={(e) => {
                e.stopPropagation();
                toggleZoom();
              }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPreviousImage();
              }}
              className="absolute left-0 p-2 mt-[100%] ml-[90px] text-black bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full text-[26px] w-12 h-12 flex items-center justify-center"
            >
              &larr;
            </button>
            <button
              onClick={(e) => {
                closeLightbox();
              }}
              className="absolute mt-[100%] sm:right-0 sm:mr-[200px] p-2 text-3xl text-black bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full text-[26px] w-12 h-12 flex items-center justify-center"
            >
              X
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNextImage();
              }}
              className="absolute right-0 p-2 mt-[100%] mr-[90px] text-black bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full text-[26px] w-12 h-12 flex items-center justify-center"
            >
              &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProdImage;

export const SimilarProd = ({ prods, cName, scrollable }) => {
  const navigate = useNavigate();

  const handleImageClick = (index) => {
    navigate(`/productDesc/${index}`);
  };

  if (scrollable) {
    return (
      <div className="w-[300px] h-[150px]">
        <div className="overflow-x-scroll element-class flex">
          {prods.map((prod, ind) => (
            <div key={ind} className="flex-shrink-0 mr-2">
              <img
                src={`https://image-server-ebon.vercel.app/image/${image}`}
                className={cName ? cName : "w-[90px] h-[120px] cursor-pointer"}
                alt={prod.title}
                onClick={() => handleImageClick(ind)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  //else optional to write as code will continue if above is false
  return (
    <div className="h-full w-full flex gap-3 justify-center md:justify-start">
      {prods.map((prod, index) => (
        <div key={index}>
          <img
            src={`https://image-server-ebon.vercel.app/image/${image}`}
            className={cName ? cName : "h-[75px] w-[60px] flex rounded border border-black cursor-pointer"}
            alt={prod.title}
            onClick={() => handleImageClick(index)}
          />
        </div>
      ))}
    </div>
  );
};


// export const YouMayLike = ({ prods }) => {
//   const navigate = useNavigate();

//   const handleImageClick = (index) => {
//     navigate(`/product?index=${index}`);
//   };

//   return (
//     <div className="w-[300px] h-[150px]">
//       <div className="overflow-x-scroll element-class flex">
//         {prods.map((prod, index) => (
//           <div key={index} className="flex-shrink-0 mr-2">
//             <img
//              src={`http://localhost:8000/image/${image}`}
//               className="w-[90px] h-[120px] cursor-pointer"
//               alt={prod.title}
//               onClick={() => handleImageClick(index)}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };