import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
export const HomePageBanner=()=>{
//store
const [bannerData,setBannerData]=useState([])
let [loading,setLoading]=useState(true)
//allow use any  number of hooks
 //to update call and delete value from the api

 //setLoading(false);
 //after renders
 useEffect(()=>{
    console.log("I am always called whenever any state/props update/changes/create")
 })
 useEffect(()=>{
    console.log("I am  only called once when component is loaded")
    setLoading(false) 
},[])

 useEffect(()=>{
//
console.log("I am only called when the loading state is u")
 },[bannerData,loading])
    return(
<>
<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
     {
     loading ?<>Loading</>:<>
      <Carousel slide={false}>
      <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
    </Carousel></>
     }
      </div>
</>
    )
}

