import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
    return ( 
        <div className="w-full bg-white py-[4rem] px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full bg-white flex flex-col shadow-xl p-4 my-4 rounded-md text-center hover:scale-105 duration-300">
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                    <h1 className="font-bold text-2xl text-center py-8">Single User</h1>
                    <p className="font-bold text-4xl">149$</p>
                    <div className="text-center font-medium">
                        <p className="border-b mt-8 py-2 mx-8">1 TB Storage</p>
                        <p className="border-b py-2 mx-8">3 User Allowed</p>
                        <p className="border-b py-2 mx-8">Send Up to 10GB</p>
                    </div>
                    <button className='bg-[#00df9a] text-[#000] rounded-[4px] mx-auto py-3 px-10 font-medium mt-5'>Start Trial</button>
                </div>
                <div className="w-full bg-gray-100 flex flex-col shadow-xl p-4 my-4 rounded-md text-center hover:scale-105 duration-300">
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                    <h1 className="font-bold text-2xl py-8">Partnership</h1>
                    <p className="font-bold text-4xl">199$</p>
                    <div className="text-center font-medium">
                        <p className="border-b mt-8 py-2 mx-8">1 TB Storage</p>
                        <p className="border-b py-2 mx-8">3 User Allowed</p>
                        <p className="border-b py-2 mx-8">Send Up to 10GB</p>
                    </div>
                    <button className='text-[#00df9a] bg-[#000] rounded-[4px] mx-auto py-3 px-10 font-medium mt-5'>Start Trial</button>
                </div>
                <div className="w-full bg-white flex flex-col shadow-xl p-4 my-4 rounded-md text-center hover:scale-105 duration-300">
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                    <h1 className="font-bold text-2xl py-8">Group Account</h1>
                    <p className="font-bold text-4xl">299$</p>
                    <div className="text-center font-medium">
                        <p className="border-b mt-8 py-2 mx-8">1 TB Storage</p>
                        <p className="border-b py-2 mx-8">3 User Allowed</p>
                        <p className="border-b py-2 mx-8">Send Up to 10GB</p>
                    </div>
                    <button className='bg-[#00df9a] text-[#000] rounded-[4px] mx-auto py-3 px-10 font-medium mt-5'>Start Trial</button>
                </div>
            </div>
        </div>
     );
}
 
export default Cards;