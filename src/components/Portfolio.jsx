import React from "react";

import bookingApp from "../assets/portfolio/booking-app.png";
import meetupsApp from "../assets/portfolio/meetups-app.png";
import tradingApp from "../assets/portfolio/trading-app.png";
import weatherApp from "../assets/portfolio/weather-app.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bookingApp,
      demo: "https://mybooking-app.netlify.app/",
      code: "https://github.com/thiyagu23/booking-app",
    },
    {
      id: 2,
      src: meetupsApp,
      demo: "https://my-meetups-app.netlify.app/",
      code: "https://github.com/thiyagu23/meetups-app",
    },
    {
      id: 3,
      src: tradingApp,
      demo: "https://my-trading-app.netlify.app/",
      code: "https://github.com/thiyagu23/trading-app",
    },
    {
      id: 4,
      src: weatherApp,
      demo: "https://forecasting-weather-app.netlify.app/",
      code: "https://github.com/thiyagu23/weather-app",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>

        <div className="grid max-w-screen-lg sm:grid-cols-2 md:grid-cols-2 gap-20 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a target="_blank" rel="noreferrer" href={demo}>
                    Live
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a target="_blank" rel="noreferrer" href={code}>
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
