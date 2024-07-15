import { Navbar,MegaMenu } from "flowbite-react";
const Navbars=()=>{
    return(
        <Navbar fluid className="bg-slate-600" >
        <Navbar.Brand  href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">
            About
          </Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">
          <MegaMenu.Dropdown toggle={<>Contact</>}>
           <ul className="grid grid-cols-3">
             <div className="space-y-4 p-4">
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                   About Us
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                   Library
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                   Resources
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                   Pro Version
                 </a>
               </li>
             </div>
             <div className="space-y-4 p-4">
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                   Contact Us
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                   Support Center
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                   Terms
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                   Blog
                 </a>
               </li>
             </div>
             <div className="space-y-4 p-4">
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                   Newsletter
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                   Playground
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                   License
                 </a>
               </li>
             </div>
           </ul>
         </MegaMenu.Dropdown>
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Navbars