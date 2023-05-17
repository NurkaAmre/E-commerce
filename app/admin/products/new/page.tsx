'use client'
import * as React from 'react';

const Page = () => {
  const [notice, setNotice] = React.useState<string>('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const product = {
      name: form.productName.value,
      description: form.productDesc.value,
      price: parseInt(form.productPrice.value),
      quantity: parseInt(form.productQuantity.value),
      category: form.productCategory.value,
      set: form.productSet.value,
      images: JSON.stringify(form.productImages.value.split(',')),
      colours: JSON.stringify(form.productColours.value.split(','))
    }
    const endpoint = '/api/products';
    const JSONdata = JSON.stringify(product);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options); 
    const data = await response.json();
    setNotice(data.message);
      
  }
  return (
    <section className="p-5">
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex p-3">
          <label htmlFor="productName">Name:</label>
          <input className="border-2 border-grey-200" type="text" name="productName" id="productName" />
        </div>
        <div className="flex p-3">
          <label htmlFor="productDesc">Description:</label>
          <textarea className="border-2 border-grey-200" name="productDesc" id="productDesc" cols={30} rows={5}></textarea>
        </div>
        <div className="flex p-3">
          <label htmlFor="productPrice">Price:</label>
          <input className="border-2 border-grey-200" type="number" name="productPrice" id="productPrice" />
        </div>
        <div className="flex p-3">
          <label htmlFor="productQuantity">Quanntity:</label>
          <input className="border-2 border-grey-200" type="number" name="productQuantity" id="productQuantity" />
        </div>
        <div className="flex p-3">
          <label htmlFor="productCategory">Category:</label>
          <input className="border-2 border-grey-200" type="text" name="productCategory" id="productCategory" />
        </div>
        <div className="flex p-3">
          <label htmlFor="productSet">Set:</label>
          <input className="border-2 border-grey-200" type="text" name="productSet" id="productSet" />
        </div>
        <div className="flex p-3">
          <label htmlFor="productImages">Images:</label>
          <input className="border-2 border-grey-200" type="text" name="productImages" id="productImages" />
        </div>
        <div className="flex p-3">
          <label htmlFor="productColours">Colours:</label>
          <input className="border-2 border-grey-200" type="text" name="productColours" id="productColours" />
        </div>
        <div className="flex p-3">
          <button className="border-2 border-grey-200" type="submit">Create</button>
        </div>
      </form>
      <p>
        {notice}
      </p>
    </section>
  )
}

export default Page;