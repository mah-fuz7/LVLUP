import React, { useState } from "react";
import { Link } from "react-router";
import bannerBg from "../assets/bannerBg.jpg";
import { useSpring, animated } from "react-spring"; // <-- import animated

const Banner = () => {
  const [flip, setFlip] = useState(false);

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 1500,
    onRest: () => setFlip(!flip),
  });

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bannerBg}')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          {/* Use animated.h1 instead of div */}
          <animated.h1 style={props} className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Discover Amazing Games
          </animated.h1>

          <p className="mb-8 text-xl text-gray-200 md:text-2xl">
            Explore top-rated indie and AAA games from developers around the world.
          </p>

          <button className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:scale-105 active:scale-95">
            <Link to="/Allapps">Browse Games</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
