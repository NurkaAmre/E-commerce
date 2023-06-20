'use client'

import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import discountPrice from "@/util/discountPrice";
import AddCartButton from "@/components/AddCartButton";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import getProduct from "@/functions/getProduct";
import { useEffect, useState } from "react";
import LoadingAnimation from "@/components/loadingAnimation";

export default function ProductDetails({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const [product, setProduct] = useState({} as ProductType);
  useEffect(() => {
    getProduct(slug).then((res) => {
      setProduct(res.data as ProductType);
    })
  })

  if (product.id) {
    return (
      <div>
        <div className="flex flex-col md:flex-row md:gap-6 mx-[50px] my-[150px] text-[#324d67]">
          <div className="product-image md:h-[300px] md:w-1/2">
            <Carousel
              renderThumbs={() => {
                return product.imagesURL.map((imageURL: string) => {
                  return (
                    <Image
                      className="max-h-[75px]"
                      src={imageURL}
                      alt={product.name}
                      width={100}
                      height={100} />
                  )
                })
              }}
            >
              {product.imagesURL.map((imageURL: string) => {
                return (
                  <Image
                    className="max-h-[400px]"
                    src={imageURL}
                    alt={product.name}
                    width={400}
                    height={400} />
                )
              })}
            </Carousel>
          </div>
  
          <div className="product-detail-desc">
            <div className="flex gap-20">
              <h1 className="text-3xl md:text-6xl font-dancing_script text-gray-600">{product.name}</h1>
              <div className="reviews">
                <div className="review-stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <p>
                  (20)
                </p>
              </div>
            </div>
            <div className="product-desc">
              <h6 className="text-lg md:texl-xl font-castoro">{product.description}</h6>
            </div>
            <h3>Характеристики</h3>
            <hr />
            <p className="font-roboto">{product.details}</p>
            <div className="add-cart flex gap-10 mt-5">
              <div className="quantity">
                <p className="quantity-desc">
                  <span className="minus"><AiOutlineMinus /></span>
                  <span className="num">0</span>
                  <span className="plus" ><AiOutlinePlus /></span>
                </p>
              </div>
              <div className="product-prices">
                {(!product.discount) ? <p className="price">{product.price}&#x20B8;</p> : null}
                {(product.discount) ? <p className="price">{discountPrice(product.price, product.discount)}&#x20B8;</p> : null}
                {(product.discount) ? <p className="price-old">{product.price}&#x20B8;</p> : null}
              </div>
                {(product.discount) && (
                  <div className="discount">
                    <p className="pl-1">-{product.discount}%</p>
                  </div>
                )}
            </div>
            <div className="buttons">
              <AddCartButton { ...product } />
              <button type="button" className="buy-now whitespace-nowrap">Add To WishList</button>
            </div>
          </div>
  
        </div>
  
      </div>
    );
  } else {
    return (
      <LoadingAnimation />
    )
  }
  
}
