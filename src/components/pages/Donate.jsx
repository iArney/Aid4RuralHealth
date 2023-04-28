import Footer from "../ReUsable/Footer";
import NavBar from "../ReUsable/NavBar";

const Donate = () => {
    return ( 
        <div>
             <NavBar />
                <div className="w-full h-96 bg-donateBg object-cover">
                    <p className="relative top-32 text-right right-10 text-2xl font-semibold">
                    "The simplest acts of kindness are by far more <br /> powerful 
                    than a thousand heads bowing in prayer"
                    </p>
                </div>

                {/* Donation */}
                <div className="">
                    <div className="float-right w-96 h-fit flex flex-col shadow-md rounded-md relative -top-10 overflow-hidden">
                        <div className=" bg-sky-600 text-white w-full h-10 flex items-center justify-around">
                            <div>
                                Choose Amount
                            </div>
                            <div className=" flex">
                                <div className="w-4 h-4 rounded-full bg-black mx-1"></div>
                                <div className="w-4 h-4 rounded-full bg-white mx-1"></div>
                                <div className="w-4 h-4 rounded-full bg-white mx-1"></div>
                            </div>
                        </div>

                        <div className="p-2 flex items-center justify-center">
                        <div className=" flex justify-center border border-sky-600  w-fit">
                            <div className="p-2">
                                One Time
                            </div>
                            <div className=" bg-sky-600 p-2">
                                Monthly
                            </div>
                        </div>
                        </div>

                        <div className="p-7">
                            <form action="">
                            <div className="mb-4">
                                <input type="radio" id="donate" name="donate" className=" cursor-pointer" />
                                $100
                            </div>
                            <div  className="mb-4">
                                <input type="radio" id="donate" name="donate" className=" cursor-pointer" />
                                $100
                            </div>
                            <div  className="mb-4">
                                <input type="radio" id="donate" name="donate" className=" cursor-pointer" />
                                $100
                            </div>
                            <div  className="mb-4">
                                <input type="radio" id="donate" name="donate" className=" cursor-pointer" />
                                $100
                            </div>
                            <div  className="mb-4">
                            <p>Custome Price $:</p>
                                <input type="text" className="p-2 bg-slate-200 rounded-md" placeholder="$" />
                                
                            </div>

                            <input type="submit" className="p-2 bg-sky-600 rounded-full h-10 w-36 text-slate-200 hover:bg-sky-900 cursor-pointer hover:shadow-md" />
                            </form>
                        </div>
                    </div>
                    </div>
             
             <Footer />
        </div>
       
     );
}
 
export default Donate;