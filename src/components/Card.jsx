import React from "react";
import IMG from "../assets/Ni.png";
import LOGO from "../assets/logo.svg";
import { useMotionValue, useTransform, motion } from "framer-motion";

const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]); // Changed to x for better effect

  const colors = [
    { Value: "#b6a179" },
    { Value: "#272425" },
    { Value: "#6389cb" },
    { Value: "#f2c758" },
    { Value: "#ffffff" },
  ];

  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
        whileHover={{ scale: 1.05, rotateY: 10 }} // Add hover effects here
        transition={{ type: "spring", stiffness: 300 }}
        className="w-[426px] min-h-[600px] bg-slate-200 rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative"
      >
        <div>
          <img src={LOGO} alt="" />
        </div>

        <h1 className="text-5xl mb-4 font-extrabold">Nike Fuel Your Passion</h1>

        <p className="max-w-[300px] text-[#000000] mb-6">
          Experience the speed of Nike’s fast running shoes. Designed for
          ultimate performance and comfort, they propel you forward. Run faster,
          go further, and feel the thrill with every step!
        </p>

        <div className="flex items-center gap-x-[20px] mb-12">
          <button className="bg-slate-900 text-white text-base font-medium py-[16px] px-[40px] rounded-lg">
            Add to Purchase
          </button>
          <div className="text-[24px] font-bold text-[#000000]">$495.00</div>
        </div>

        <ul className="flex gap-x-[10px]">
          {colors.map((color, index) => {
            return (
              <li
                key={index}
                style={{ backgroundColor: color.Value }}
                className="w-8 h-8 rounded-full cursor-pointer"
              ></li>
            );
          })}
        </ul>

        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100000 }}
          className="absolute top-64 -right-52 w-[440px]"
        >
          <img src={IMG} alt="" draggable="false" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
