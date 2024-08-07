import { Navbar,MegaMenu } from "flowbite-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../context/auth.context";
import { useSelector } from "react-redux";
import { useGetLoggedInUserQuery } from "../../../pages/auth/auth.Api";
import { FaMessage } from "react-icons/fa6";


const LinkComponent=({text,icon="",link}:{text:string,icon?:string|any,link:string})=>{
  return(
    <>
      <NavLink to={link} className={({isActive}:{isActive:boolean})=>isActive?'text-cyan-800':'text-gray-700'+"hover:text-cyan-700 flex"}>
            {text} {icon}
          </NavLink>
    </>
  )
}
const Navbars=()=>{
 //const auth:any=useContext(AuthContext);

 const { data, isLoading, isError } = useGetLoggedInUserQuery();

 if(isLoading) return <>Loading</>
 //if(isError) return <>Error</>

 let auth=data?.result;
  //  const auth:any=useSelector((root:any)=>{
  //    return root.auth.loggedInUser ||null;
  //  })


    return(
        <Navbar fluid  rounded className="bg-gray-200 h-20 py-5 border-gray-200">
        
        <Navbar.Brand  href="/" className="mx-0 md:mx-6 lg:mx-10 xl:mx-16">
        <span className="self-center whitespace-nowrap  font-semibold dark:text-white">Flowbite React</span>
        </Navbar.Brand>
             <Navbar.Toggle />
        <Navbar.Collapse>
        <LinkComponent link="/" text="Home"/>
        <LinkComponent link="/about" text="About"/>
        <LinkComponent link="/service" text="Service"/>
          <Navbar.Link href="#">
          <MegaMenu.Dropdown toggle={<>Contact</>}>
           <ul className="grid grid-cols-3">
             <div className="space-y-4 p-4">
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                 <LinkComponent link="/about" text="About us"/>
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                 <LinkComponent link="/library" text="Library"/>
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                 <LinkComponent link="/resources" text="Resources"/>
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                 
                   <LinkComponent link="/pro-version" text="  Pro Version"/>
                 </a>
               </li>
             </div>
             <div className="space-y-4 p-4">
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                 
                   <LinkComponent link="/contact-us" text="Contact Us"/>
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                 
                   <LinkComponent link="/support-center" text="Support Center"/>
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
               
                   <LinkComponent link="/terms" text="Terms"/>
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                  <LinkComponent link="/blog" text="Blog"/>
                 </a>
               </li>
             </div>
             <div className="space-y-4 p-4">
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                  
                   <LinkComponent link="/ newsletter" text=" Newsletter"/>
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                   
                   <LinkComponent link="/playground" text="Playground"/>
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                 <LinkComponent link="/license" text="License"/>
                 </a>
               </li>
             </div>
           </ul>
         </MegaMenu.Dropdown>
          </Navbar.Link>
          <LinkComponent link="/pricing" text="Pricing"/>
        </Navbar.Collapse>
        <Navbar.Collapse>
      {
        auth && auth ?<>
           <LinkComponent link={"/chat"} icon={<FaMessage className="ms-3 mt-1 text-blue-500"/>} text={"Chat"}/>
           <LinkComponent link={"/"+auth.role} icon="&rarr;" text={auth.name}/>
           <LinkComponent link="/logout" icon="&rarr;" text="Logout"/>
        </>:<>
          <LinkComponent link="/register" icon="&rarr;" text="Register"/>
          <LinkComponent link="/login" icon="&rarr;" text="Login"/>
          </>
      }
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Navbars