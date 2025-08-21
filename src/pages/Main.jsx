
const Main = ({heading,pera,image,background}) => {
    
    return (
        <div className="">
            {/* Scrollable container */}
            <div className="flex items-center justify-center gap-5 duration-300 h-full w-full  ">

                {/* !st fact */}
                <div className=" w-[80%] md:w-[80%] h-30 md:h-60 rounded-xl duration-200 flex flex-row bg-center bg-cover" style={{backgroundImage:`url(${background})`}}>
                    {/* Left Section */}
                    <div className='overflow-hidden rounded-xl w-[25%] md:w-[25%] h-full duration-100 flex flex-row items-center'>
                        <img className=' rounded-r-full object-cover h-full w-full md:object-cover ' src={image} alt='imgage'></img>
                    </div>
                    {/* Right Section */}
                    <div className="p-1 w-full text-gray-700 ">
                        <label className=' font-semibold text-2xl'>{heading}</label>
                        <div className='text-neutral-800 h-[69%] md:h-[86%] sm:h-[70%] overflow-y-auto '>   
                            <p>
                               {pera} 
                            </p>
                            {/* <span>this is from span tag</span> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main
