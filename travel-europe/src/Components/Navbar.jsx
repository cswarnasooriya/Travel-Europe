import {useState} from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import logo from '../assets/logo.png';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    const showDropdown = ()=>{
        setDropdown(!dropdown);
    };

  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center bg-black fixed z-20">
        <div className="container mx-auto lg:px-6">
            <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
                <div className="flex flex-col gap-y-4">
                    <div className="flex items-center gap-x-4">
                        <img src={logo} alt="logo image" className='w-12' />
            
                        <span>
                            <p className="text-white font-semibold text-lg leading-tight">Travel</p>
                            <p className="text-white text-sm">Europe</p>
                        </span>
                    </div>
                </div>
            

                <ul className="flex-1 flex justify-center items-center xl:gap-12 gap-x-4 max-lg:hidden">
                    <a href="#home" className="leading-normal no-underline text-white text-lg hover:text-primary flex items-center">Home</a>

                    <a href="#france" className="leading-normal no-underline text-white text-lg hover:text-primary flex items-center">France</a>

                    <a href="#travel" className="leading-normal no-underline text-white text-lg hover:text-primary">Travel</a>

                    <a href="#facilities" className="leading-normal no-underline text-white text-lg hover:text-primary flex items-center">Facilities</a>

                    <a href="#tour" className="leading-normal no-underline text-white text-lg hover:text-primary flex items-center">Tour</a>

                    <a href="#blog" className="leading-normal no-underline text-white text-lg hover:text-primary flex items-center">Blog</a>

                    <a href="#gallery" className="leading-normal no-underline text-white text-lg hover:text-primary flex items-center">Gallery</a>

                </ul>

                <div className="flex max-lg:hidden">
                    <button className="rounded-full border border-solid border-primary bg-transparent texlg text-white px-8 py-3 hoverBtn">Contact Us</button>
                </div>

                {dropdown ? (
                    <div onClick={showDropdown} className="lg:hidden text-[27px] cursor-pointer text-white">
                        <IoMdCloseCircleOutline/>
                    </div>
                ) : (
                    <div onClick={showDropdown} className="lg:hidden text-[27px] cursor-pointer text-white">
                        <IoMenu/>
                    </div>
                )}

            </div>

            {dropdown ? (
                <div onClick={showDropdown} className="lg:hidden w-full h-[100vh] fixed top-24 bg-black ease-in-out duration-100">
                    <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4">
                        <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
                            <a href="#home" className="leading-normal no-underline text-white text-lg hover:text-primary">Home</a>
                            <a href="#france" className="leading-normal no-underline text-white text-lg hover:text-primary">France</a>
                            <a href="#travel" className="leading-normal no-underline text-white text-lg hover:text-primary">Travel</a>
                            <a href="#facilities" className="leading-normal no-underline text-white text-lg hover:text-primary">Facilities</a>
                            <a href="#tour" className="leading-normal no-underline text-white text-lg hover:text-primary">Tour</a>
                            <a href="#blog" className="leading-normal no-underline text-white text-lg hover:text-primary">Blog</a>
                            <a href="#gallery" className="leading-normal no-underline text-white text-lg hover:text-primary">Gallery</a>
                        </ul>
                        <div>
                            <button>
                                Contact Us
                            </button>
                        </div>

                    </div>
                </div>
            ) : null}
        </div>
       
    </nav>
  )
}

export default Navbar
