'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { userFavStore } from '@/store'
import discountPrice from "@/util/discountPrice";
import AddCartButton from "@/components/AddCartButton";
import getProduct from "@/functions/getProduct";
import LoadingAnimation from "@/components/loadingAnimation";

export default function ProductDetails({ params }: { params: { slug: string } }) {
  const favStore = userFavStore()
  const slug = params.slug;
  const [product, setProduct] = useState({} as ProductType);
  const [multiplier, setMultiplier] = useState(1);
  let isLiked = false;
  if (favStore.favList.find((item) => item.id === product.id)) {
    isLiked = true;
  }
  useEffect(() => {
    getProduct(slug).then((res) => {
      setProduct(res.data as ProductType);
    })
  }, [])

  if (product.id) {
    return (
      <div className="md:[my-150px]">
        <div className="flex flex-col md:flex-row md:gap-6 mx-[50px] my-[150px] text-[#324d67]">
          <div className="md:h-[400px] md:w-1/2 md:mt-[3rem]">
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
                    className="max-h-[400px] !w-auto"
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
              <h1 className="text-3xl md:text-6xl font-[dancingScript] text-gray-600">{product.name}</h1>
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
              <h6 className="text-lg md:texl-xl font-[castoro]">{product.description}</h6>
            </div>
            <h3>Характеристики</h3>
            <hr />
            <p className="font-roboto">{product.details}</p>
            <div className="flex gap-5 md:gap-10 mt-5">

              <div className="flex self-center">
                <button 
                  className="text-red-700 border-l border-t border-b rounded-l-xl hover:bg-gray-200 cursor-pointer p-2 flex items-center"
                  onClick={() => {
                    if (multiplier > 1) {
                      setMultiplier(multiplier - 1);
                    }
                  }}
                >
                  <AiOutlineMinus />
                </button>
                <span className="border-t border-b p-2">{multiplier}</span>
                <button 
                  className="text-green-500 border-r border-t border-b rounded-r-xl hover:bg-gray-200 cursor-pointer p-2 flex items-center"
                  onClick={() => {
                    setMultiplier(multiplier + 1);
                  }}
                >
                  <AiOutlinePlus />
                </button>
              </div>
              <div className="product-prices">
                {(!product.discount) ? <p className="price">{product.price * multiplier}&#x20B8;</p> : null}
                {(product.discount) ? <p className="price">{discountPrice(product.price, product.discount) * multiplier}&#x20B8;</p> : null}
                {(product.discount) ? <p className="price-old">{product.price}&#x20B8;</p> : null}
              </div>
                {(product.discount) && (
                  <div className="discount">
                    <p className="pl-1">-{product.discount}%</p>
                  </div>
                )}
            </div>
            <div className="flex flex-wrap gap-6 my-10">
              <AddCartButton { ...product } />
              {!isLiked ? (
                <button 
                type="button"
                className="bg-white text-[#8CCCC1] border-[1px] border-[#8CCCC1] rounded-3xl cursor-pointer text-lg font-medium whitespace-nowrap hover:scale-110 transition-transform duration-500 ease-out px-4 py-2 min-w-[180px]"
                onClick={(e) => {
                  favStore.toggleProduct(product)
                }}
              >
                избранное
              </button>
              ) : (
                <button
                  className="bg-white text-[#8CCCC1] border-[1px] border-[#8CCCC1] rounded-3xl text-lg font-medium whitespace-nowrap px-4 py-2 min-w-[180px]"
                  disabled={true}
                >
                  любимый
                </button>
              )}
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
