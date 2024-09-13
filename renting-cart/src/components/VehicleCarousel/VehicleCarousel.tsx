// "use client";
// import React from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import { vehicles } from "@/utils/availableVehicles";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const VehicleCarousel: React.FC = () => {
//   const CustomPrevArrow = (props: any) => {
//     const { onClick } = props;
//     return (
//       <button className="slick-prev" onClick={onClick} aria-label="Previous">
//         &lt;
//       </button>
//     );
//   };

//   const CustomNextArrow = (props: any) => {
//     const { onClick } = props;
//     return (
//       <button className="slick-next" onClick={onClick} aria-label="Next">
//         &gt;
//       </button>
//     );
//   };

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="max-w-6xl mx-auto py-8">
//       <h2 className="text-2xl sm:text-3xl text-center text-blue-700 font-bold mb-6">
//         Vehículos Disponibles para Renting
//       </h2>
//       <Slider {...settings}>
//         {vehicles.map((vehicle) => (
//           <div key={vehicle.id} className="p-4">
//             <div className="relative h-64">
//               <Image
//                 src={vehicle.imageUrl}
//                 alt={vehicle.name}
//                 layout="fill"
//                 objectFit="contain"
//                 className="rounded-lg"
//               />
//             </div>
//             <h3 className="text-center mt-4">{vehicle.name}</h3>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default VehicleCarousel;

"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { vehicles } from "@/utils/availableVehicles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./VehicleCarousel.css";

const VehicleCarousel: React.FC = () => {
  // Declarar las funciones de los botones antes de usarlas en Slider
  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="slick-prev"
        onClick={onClick}
        aria-label="Previous"
      >
        &lt;
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="slick-next"
        onClick={onClick}
        aria-label="Next"
      >
        &gt;
      </button>
    );
  };

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h2 className="text-2xl sm:text-3xl text-center text-blue-700 font-bold mb-6">
        Vehículos Disponibles para Renting
      </h2>
      <Slider {...settings}>
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="p-4">
            <div className="relative h-64">
              <Image
                src={vehicle.imageUrl}
                alt={vehicle.name}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-center mt-4">{vehicle.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VehicleCarousel;
