import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleUser, faCompass, faHeart, faHouse, faLocationArrow, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faSquareYoutube, faThreads } from '@fortawesome/free-brands-svg-icons';

export default function SideBar () {
 return(
   <>
   <div className="relative flex flex-col bg-clip-border bg-white border-l border-r sm:w-64 w-60 text-gray-700  w-full max-w-[20rem] p-4  shadow-blue-gray-900/5">
   <p className="text-xl font-bold p-2">Instagram</p>

     <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700 mb-1">
       <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
         <div className="grid place-items-center mr-4">
           {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
             <path fill-rule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" clip-rule="evenodd"></path>
           </svg> */}
      <FontAwesomeIcon icon={faHouse} className="text-2xl text-black-700" />
         </div>
         Home
       </div>
       <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
         <div className="grid place-items-center mr-4">
         <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl text-black-500 " />
         </div>
         Search
       </div>
       <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
         <div className="grid place-items-center mr-4">
         <FontAwesomeIcon icon={faCompass} className="text-2xl text-black-900 "/>
         </div>Explore 
         <div className="grid place-items-center ml-auto justify-self-end">
         </div>
       </div>
       <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
         <div className="grid place-items-center mr-4">
         <FontAwesomeIcon icon={faSquareYoutube} className="text-2xl text-black-500 "/>
         </div>Reels
       </div>
       <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
         <div className="grid place-items-center mr-4">
         <FontAwesomeIcon icon={faLocationArrow} className="text-2xl text-black-500 "/>
         </div>Message
       </div>
       <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
         <div className="grid place-items-center mr-4">
           <FontAwesomeIcon icon={faHeart} className="text-2xl text-black-500 "/>
         </div>Notifications
       </div>
       <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
         <div className="grid place-items-center mr-4">
         <FontAwesomeIcon icon={faSquarePlus} className="text-2xl text-black-500 "/>
         </div>Create
       </div>
       <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
         <div className="grid place-items-center mr-4">
         <FontAwesomeIcon icon={faCircleUser} className="text-2xl text-black-500 "/>
         </div>Profile
       </div>
       <div>
       <div className='bg-white border-t text-gray-700 w-full'>
       <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
         <div className="grid place-items-center mr-4">
         <FontAwesomeIcon icon={faThreads} className="text-2xl text-black-500 "/>
         </div>Threads
       </div>
       <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
         <div className="grid place-items-center mr-4">
         <FontAwesomeIcon icon={faBars} className="text-2xl text-black-500 "/>
         </div>More
       </div>
       </div>
       </div>
     </nav>
   </div>
   </>
 )
};