import React from "react";
import style from "./framer.module.css";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { NewArrival } from "../Data/newArrival";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const FramerCard = () => {
  const [width, setWidth] = useState(0);
  const sliderWrapper = useRef();
  useEffect(() => {
    setWidth(sliderWrapper.current.scrollWidth - sliderWrapper.current.offsetWidth)
  }, [])
  return (
    <div className={style.containerDiv}>
      <div className={style.container}>
        <div className={style.heading}>
          <h1>New Arrival</h1>
          <ArrowCircleRightIcon />
        </div>
        <motion.div
          className={style.sliderWrapper}
          ref={sliderWrapper}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className={style.innerCarousel}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {NewArrival.map((item, index) => {
              const {
                productId,
                description,
                img,
                discountAmount,
                amount,
                discount,
              } = item;
              return (
                <motion.div className={style.card} key={index}>
                  <div className={style.cardHeader}>
                    <div className={style.cardTitle}>
                      {description.substring(0, 50)}
                    </div>
                  </div>
                  <div className={style.cardImg}>
                    <Image
                      className={style.img}
                      src={img}
                      width={0}
                      height={0}
                      alt="Image"
                      sizes="100vw"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className={style.price}>
                    <h3>${discountAmount}</h3>
                    <h4>
                      <del>${amount}</del>
                    </h4>
                  </div>
                  <div className={style.cardFooter}>
                    <div className={style.stars}>
                      <StarIcon style={{ color: "#F59E0B" }} />
                      <StarIcon style={{ color: "#F59E0B" }} />
                      <StarIcon style={{ color: "#F59E0B" }} />
                      <StarIcon style={{ color: "#F59E0B" }} />
                      <StarHalfIcon style={{ color: "#F59E0B" }} />
                    </div>
                    <div className={style.percent}>
                      <b>Buy</b>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FramerCard;
