import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import SanityClient from "@/sanity/client";
import discountPrice from "@/util/discountPrice";
import Product from "@/components/Product";
import Category from "@/app/category/[name]/page";

export default async function ProductDetails({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const query = `*[_type == "product" && slug.current == '${slug}'][0]{
    _id,
    name,
    price,
    quantity,
    details,
    type,
    description,
    discount,
    "imagesURL": images[].asset->url
  }`;

  const product = await SanityClient.fetch(query);

  return (
    <div>
      <div key={product._id} className="product-detail-container">
        <div className="product-image">
          <div className="image-container">
            <Image src={product.imagesURL[1]} alt={product.name} width={250} height={250} />
          </div>
          <div className="small-images-container carousel w-full">
            {product.imagesURL.map((imageURL: string, index: number) => {
              if (index !== 0) {
                return (
                  <div id={`item${index}`} className="carousel-item w-full">
                    <Image src={imageURL} alt={product.name} width={100} height={100} />
                  </div>
                );
              }
            })}
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
          {product.imagesURL.map((imageURL: string, index: number) => {
              if (index !== 0) {
                return (
                  <a href={`#item${index}`} className="justify-center btn btn-xs">{index}</a> 
                );
              }
            })}
          </div>
        </div>

        <div className="product-detail-desc">
          <div className="flex gap-20">
            <h1 className="text-6xl font-dancing_script text-gray-600">{product.name}</h1>
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
            <h6 className="text-xl font-castoro">{product.description}</h6>
          </div>
          <h3>Характеристики</h3>
          <hr />
          <p className="font-roboto">{product.details}</p>
          <div className="flex gap-10 mt-5">
            <div className="quantity">
              <p className="quantity-desc">
                <span className="minus"><AiOutlineMinus /></span>
                <span className="num">0</span>
                <span className="plus" ><AiOutlinePlus /></span>
              </p>
            </div>
            {(!product.discount) ? <p className="price">{product.price}&#x20B8;</p> : null}
            {(product.discount) ? <p className="price">{discountPrice(product.price, product.discount)}&#x20B8;</p> : null}
            {(product.discount) ? <p className="price-old">{product.price}&#x20B8;</p> : null}
            <div className="discount">
              <p className="pl-1">-{product.discount}%</p>
              {/* <Image src={sale} alt="sale" width={50} height={50} /> */}
            </div>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart">В корзину</button>
            <button type="button" className="buy-now">Купить</button>
          </div>
        </div>

      </div>
      {/* <div className="maylike-products-wrapper">
        <h2> You may also Like</h2>
        <div className="marquee">
          <div className="may-like-product-container">
            {product.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
