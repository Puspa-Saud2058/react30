import Cards from "../../components/common/card/card.comonent"
import "./index.css";
import "flowbite";
import { HomePageBanner } from "../../components/banner/banner.component";
import SingleProductComponent from "../../components/product/single-product.component";
import HomePageTitle from "../../components/common/title/home-title.component";
import HomeFooter from "../../components/common/footer/footer";
const LandingPage = () => {
  return (
    // <React.Fragment>
    //     {/* <h1 style={{...textCenter}}>{name}</h1> */}
    //       {/* <Heading1>Hello world</Heading1>  */}
    //     {/* <Heading1 value="Puspa Saud"></Heading1>  for passing value to props*/ }
    //   <Heading1 value="Puspa Saud"></Heading1>
    //   <Heading1 className={'text-teal-600 text-center'} value={name}></Heading1>

    // </React.Fragment>
    <>
           <HomePageBanner />
      <HomePageTitle title="Categories" url="/categories"/>
      <div className=" md:flex lg:flex sm:grid-cols-1 mx-3 md:mx-20 py-5 gap-2 mt-5">
 
      {[...Array(6)].map((_, i) => (
          <Cards
           key={i} 
           title="Gaming Chairs"
           image="https://media.istockphoto.com/id/1143095082/photo/computer-chair-professional-series-orthopedic-chair.webp?b=1&s=170667a&w=0&k=20&c=Ed8-K0CsuQq07KHLr0EP5Bi3dcnOL7hDRPOTg5XCj_4="
           url="category/gaming-chairs"
           />
        ))}
      </div>

   <HomePageTitle title="Just-for-you" url="/all-products"/>
      <div className=" grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mx-3 md:mx-20 py-5 gap-1 mt-5">
        {[...Array(20)].map((_, i) => (
          <SingleProductComponent key={i} />
        ))}
      </div>

    </>
  );
};

export default LandingPage;
