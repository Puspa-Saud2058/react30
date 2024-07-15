import { Carousel,Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
export const HomePageBanner=()=>{
//store
const [bannerData,setBannerData]=useState([])
let [loading,setLoading]=useState(true)
//allow use any  number of hooks
 //to update call and delete value from the api

 //setLoading(false);
 //after renders
//  useEffect(()=>{

//     return()=>{
//         console.log("I am always called whenever any state/props update/changes/create") 
//     }
// })

//axios or fetch
const getBanners=async()=>{
    try{
        //TODO:axio api caller
        const response={data:{result:[],meta:null,message:""}}
        setBannerData(response.data.result);
        setLoading(false);
     }catch(exception){
      //handling
    }finally{
        //
    }
}
 useEffect(()=>{
    // return()=>{
    //     console.log("I am  only called once when component is loaded")
    // setLoading(false) 
    // }
    getBanners();
},[])

 useEffect(()=>{
    return()=>{
console.log("I am only called when the loading state is updated")  //by writing code in return it cleans the garbage
    }
//
 },[bannerData,loading])
    return(
<>
<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
     {
     loading ?<>
     <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
     </>:<>
      <Carousel slide={true}>
        {/*Loop for the image*/}
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

