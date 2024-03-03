
import { FaStar } from "react-icons/fa";

const Home = () => {

  const Reviews = ({image, rating, review}) =>{
    return(
      <div className="flex flex-col items-center">
        <img src={image} alt="" className="w-40 h-20 object-contain"/>

        <span>
        <FaStar className="text-yellow-400 text-xl" />{rating}/5
        </span>

        <p className="pt-3 text-lg">
          {review} reviews

        </p>
      </div>
    );
  };

  const Card = ({image, packageType, duration, amount, type}) =>{
    return (
      <div>
        <img src={image} alt="" className="w-full rounded-[10px] object-cover bg-[#ececec] shadow-md"/>
        <p className="text-black text-base font-semibold pt-4 pb-2">{type}</p>
        <h6 className="tex2">{packageType}</h6>
        <span className="text-orange-300 text-2xl flex items-baseline font-semibold pt-2">LKR{amount}
        <p className="text-black text-sm font-medium">
          /Person
        </p>
        </span>
        <p className="pt-4 pb-6 font-medium">Package's Duration ({duration} Days)</p>
        <button className="rounded-full px-8 py-3 border-none outline-none font-medium text-base bg-lightBlue hover:bg-red-50 hover:text-white hoverBtn">Details</button>
      </div>
    )
  }



  return (
    <>
    <div className="bg-[url('/main.jpg')] bg-cover bg-center bg-no-repeat min-h-[50rem] h-screen pt-24">
      <h1 className="text-white font-bold text-center lg:text-5xl text-3xl pt-24 pb-8">
        Economy Travelling Package
      </h1>
      <p className="font-light text-xl text-white text-center lg:w-2/5 sm:w-1/2 mx-auto leading-10">
        Budget-friendly & luxury package for a Europe and France journey to the holy season with free time for all tourists as well...
      </p>
      <div className="flex justify-center py-8">
        <button className="rounded-full px-10 bg-orange-200 py-4 outline-none border-none font-semibold text-base hoverBtn">
            Get a Package Price
        </button>
      </div>
    </div>

    <section className="container mx-auto px-6 xl:pt-16 pb-24">
      <div className="flex flex-wrap items-center lg:justify-evenly justify-center py-16 gap-y-8 gap-12">
      
        <Reviews image="/" rating="4.3" review="1205"/>
        <Reviews image="/" rating="4.6" review="3286"/>
        <Reviews image="/" rating="5" review="1545"/>
        <Reviews image="/" rating="4.4" review="4501"/>
        <Reviews image="/" rating="4.9" review="1998"/>

      </div>
      <h2>
        Europe and France Travelling with Us..!
      </h2>
      <p>
        Don't miss out an these special offers from us!
      </p>
    </section>
  </>  
  )
}

export default Home
