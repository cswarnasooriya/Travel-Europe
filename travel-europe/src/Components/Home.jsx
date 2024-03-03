

const Home = () => {
  return (
    <div className="bg-[url('/main.png')] bg-cover bg-center bg-no-repeat min-h-[50rem] h-screen pt-24">
      <h1 className="text-white text-center lg:text-5xl text-3xl pt-24 pb-8">
        Economy Travelling Package
      </h1>
      <p className="font-light text-blue text-center lg:w-2/5 sm:w-1/2 mx-auto leading-10">
        Budget-friendly & luxury package for a Europe and France journey to the holy season with free time for all tourists as well...
      </p>
      <div>
        <button className="rounded-full px-10 bg-orange-300 py-4 outline-none border-none font-semibold text-base hoverBtn">
            Get a Package Price
        </button>
      </div>
    </div>
  )
}

export default Home
