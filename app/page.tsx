import Head from "next/head"
import Discount from "../components/discount"
import MainSection from "../components/main"
import ProductSection from "../components/product-section"
import DeliveryServices from "../components/DeliveryServices"

export default function Main (){
  return (
    <>
      <Head>
        {/* Google Analytics tracking code */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W76140GXRJ"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-W76140GXRJ');
          `}
        </script>
      </Head>
      <MainSection />
      <ProductSection />
      <Discount />
      <DeliveryServices />
    </>
  )
}