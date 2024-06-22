import React from "react";
import logo from "../assets/logoimg.png";
import SigninBtn_1 from "../components/SigninBtn_1";
import SignupBtn_1 from "../components/SignupBtn_1";
import GetStartButton from "../components/GetStartButton";


const Nav_1 = () => 
{
    let Links=[
        {name:"Home",link:"/"},
        {name:"About Us",link:"/about"},
        
    ]
    return(
        <div className="shadow-md w-full fixed top-0 left-0">
          <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800">
                <span className="text-3xl text-indigo-600 mr-1 pt-2"><img className="h-20 inline"src={logo} alt=""/></span>
                Quick Helper
            </div>
            <ul className="md:flex md:items-center">
                {
                    Links.map((link)=>(
                        <li key={link.name} className="md:ml-20 text-2xl ">
                            <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
                        </li>
                    ))
                }
               
               <SigninBtn_1></SigninBtn_1>
               <SignupBtn_1></SignupBtn_1>
               <GetStartButton/>
            </ul>
          </div>
      </div>
    )
}

export default Nav_1
