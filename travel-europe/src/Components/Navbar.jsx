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
                    <a href="#home" className="leading-normal no-underline text-white text-lg hover:text-primary">Home</a>
                    <a href="#france" className="leading-normal no-underline text-white text-lg hover:text-primary">France</a>
                    <a href="#travel" className="leading-normal no-underline text-white text-lg hover:text-primary">Travel</a>
                    <a href="#facilities" className="leading-normal no-underline text-white text-lg hover:text-primary">Facilities</a>
                    <a href="#tour" className="leading-normal no-underline text-white text-lg hover:text-primary">Tour</a>
                    <a href="#blog" className="leading-normal no-underline text-white text-lg hover:text-primary">Blog</a>
                    <a href="#gallery" className="leading-normal no-underline text-white text-lg hover:text-primary">Gallery</a>
                </ul>

                <div>
                    <button>Contact Us</button>
                </div>

                {dropdown ? (
                    <div onClick={showDropdown}>
                        <IoMdCloseCircleOutline/>
                    </div>
                ) : (
                    <div onClick={showDropdown}>
                        <IoMenu/>
                    </div>
                )}

            </div>

            {dropdown ? (
                <div>
                    <div>
                        <ul>
                            <a href="#home">Home</a>
                            <a href="#france">France</a>
                            <a href="#travel">Travel</a>
                            <a href="#facilities">Facilities</a>
                            <a href="#tour">Tour</a>
                            <a href="#blog">Blog</a>
                            <a href="#gallery">Gallery</a>
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
