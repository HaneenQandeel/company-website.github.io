import Typed from 'react-typed';
const Hero = () => {
    return ( 
        <div className="text-white">
            <div className="mx-auto text-center w-full h-screen mt-[100px]">
                <p className="font-bold p-2 text-[#00df9a] sm:text-sm ">GROWING WITH DATA ANALTICS</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-5">Grow with data</h1>
                <div className='flex justify-center items-center'>
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Fast ,flexiable financing for 
                    <Typed className="pl-4" strings={['BTB','BTC','SASS']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop >
                    </Typed>
                    </p>
                </div>
                <p className='font-bold text-gray-500 text-xl md:2xl'>Monitor your data analytics to increase revenue for BTB, BTC & SASS Platforms.</p>
                <button className='bg-[#00df9a] text-[#000] rounded-[4px] mx-auto py-3 px-10 font-medium mt-5'>Get Started</button>
            </div>
        </div>
     );
}
 
export default Hero;