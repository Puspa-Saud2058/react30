import { useParams, useSearchParams } from "react-router-dom"
import HomePageTitle from "../../components/common/title/home-title.component"
import Cards from "../../components/common/card/card.comonent"
import { useEffect } from "react"
const CategoryDetailPage=()=>{
    //slug
    const params=useParams()
    const [query,setQuery]=useSearchParams();
    console.log(query.get('price'))
     //TODO:API CALL to populate
const handleFilterClick=(price:string)=>{
       setQuery({
        price:price
    })
}
useEffect(()=>{
    console.log(query.get('price'))
},[query])
  
return(
    <>
 
    <HomePageTitle title={`Category Detail of ${params.slug}`}/>
      <button className="me-3" onClick={(e)=>{
        e.preventDefault()
        handleFilterClick('1000-10000')
      }}>1000-10000</button>
      <button className="me-3" onClick={(e)=>{
        e.preventDefault()
        handleFilterClick('10000-30000')
      }}>1000-30000</button>
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
      </>
)
}

export default CategoryDetailPage