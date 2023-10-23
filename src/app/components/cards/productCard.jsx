import React from 'react'
import cardStyle from "./productcard.module.css"
import Image from 'next/image'
import { AiOutlineHeart, AiFillStar } from "react-icons/Ai";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { PopularItems } from '../Data/popularProducts';
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";


const productCard = () => {
  return (
    <div className={cardStyle.containerDiv} style={{marginBottom: "25px"}}>
      <div className={cardStyle.title}>
        <h4>Now Trending</h4>
        <ArrowCircleRightIcon />
      </div>

      <div className={cardStyle.container}>
        {PopularItems.map((item, index) => {
          const { img, description, amount } = item;
          return (
            <div className={cardStyle.card} key={index}>
              <div className={cardStyle.imgBx}>
                <Image
                  className={cardStyle.img}
                  src={img}
                  width={0}
                  height={0}
                  alt="image"
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                />
                <ul className={cardStyle.action}>
                  <li>
                    <ShoppingCartIcon
                      sx={{ color: "#3c0202", fontSize: "20px" }}
                    />
                    <span>Add to Cart</span>
                  </li>
                  <li>
                    <FavoriteIcon sx={{ color: "#3c0202", fontSize: "20px" }} />
                    <span>Add to Wishlist</span>
                  </li>
                  <li>
                    <RemoveRedEyeIcon
                      sx={{ color: "#3c0202", fontSize: "20px" }}
                    />
                    <span>View Details</span>
                  </li>
                </ul>
              </div>
              <div className={cardStyle.content}>
                <div className={cardStyle.productName}>
                  <h3>{description.substring(0, 20)}</h3>
                </div>
                <div className={cardStyle.productRating}>
                  <h2>{amount}</h2>
                  <div className={cardStyle.rating}>
                    <AiFillStar style={{ color: "#F59E0B" }} />
                    <AiFillStar style={{ color: "#F59E0B" }} />
                    <AiFillStar style={{ color: "#F59E0B" }} />
                    <AiFillStar style={{ color: "#F59E0B" }} />
                    <AiFillStar style={{ color: "#F59E0B" }} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default productCard