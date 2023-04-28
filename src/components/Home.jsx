import NavBar from "./ReUsable/NavBar";
import volIcon1 from "../assets/vol-medicon1.png"
import volIcon2 from "../assets/vol-medicon2.png"
import service1 from "../assets/service1.png"
import service2 from "../assets/service2.png"
import service3 from "../assets/service3.png"

import dokta from "../assets/dokter.png"
import donate from "../assets/donate.png"
import Footer from "./ReUsable/Footer";
import Volunteer from "./ReUsable/VolunteerCard";


const Home = () => {
    return ( 
        <div>
            <NavBar />
            <div className="p-10 md:p-20 mt-12 md:grid md:grid-cols-2 h-fit">
                <div><h1 className=" font-bold text-3xl  w-80">
                The world is a <br /> Better Place When We All Give Together
                </h1>
                <p className="relative top-6">Donate for the significant of improving the quality of 
                    healthcare services  for rural residents With your support, 
                    we can break down the barriers that stand in the way of better 
                    health outcomes and quality of life</p>
                    </div>
                

                    <div className="hidden md:flex">
                        <img src={donate} alt="" />
                    </div>
            </div>
            {/* small screen */}
            <div className="relative top-11 md:top h-90 w-full text-white text-right justify-end bg-sky-600 p-10 md:hidden">
            <h1 className=" font-bold text-3xl w-80">
            Join Our Mission To Improve Access To Affordable Healthcare For All
                </h1>
                <p className="relative top-6">Donate for the significant of improving the quality of 
                    healthcare services  for rural residents With your support, 
                    we can break down the barriers that stand in the way of better 
                    health outcomes and quality of life</p>
            </div>
            {/* medium and large screen */}
            <div className="hidden md:flex h-fit w-full justify-end">
                <img src={dokta} alt="" className=" lg:w-3/5 md:w-2/4 " />
            <div className="relative right-36 top-36 h-fit">
                <div>  <h1 className=" font-bold text-3xl w-fit">
            Join Our Mission To Improve Access To Affordable Healthcare For All
                </h1></div>
               <div className="flex flex-col relative">
                <p className="relative top-6">Donate for the significant of improving the quality of 
                    healthcare services  for rural residents With your support, 
                    we can break down the barriers that stand in the way of better 
                    health outcomes and quality of life</p>
                    <div className="w-36 h-10 rounded-full flex items-center justify-center text-white bg-sky-500 mt-10 ml-96 hover:shadow-lg cursor-pointer">
                        Learn More
                    </div>
                    </div>
           
                
            </div>
            </div>
{/* Volunteers Journey */}
            <div className="p-10 md:p-20 mt-24 md:mt-0">
            <h1 className=" font-bold text-3xl  w-80">
            Volunteer's journey
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="w-72 h-full mb-3 shadow-lg text-white p-6 top-8 bg-sky-600 relative rounded-lg">
                    <div className="text-right">
                    <h1 className=" font-semibold text-lg">
                    Let's increase community engagement
                </h1>
                    </div>
                    <div className="flex text-right">
                        <div>
                            <img src={volIcon1} className=" relative top-10 w-96 h-24" alt="" />
                        </div>
                        <div className="relative top-5 font-extralight">
                            <p>Help increase community engagement with the 
                                healthcare sector by building 
                                relationships and trust between patients, families, 
                                and healthcare providers</p>
                        </div>
                    </div>
                </div>

                <div className="w-72 h-full  mb-3 shadow-lg text-white p-6 top-8 bg-sky-600 relative rounded-lg">
                    <div className="text-right">
                    <h1 className=" font-semibold text-lg">
                    Let's promote wellness to rural areas  
                </h1>
                    </div>
                    <div className="flex text-right">
                    <div>
                            <img src={volIcon2} className=" relative top-10 w-96 h-24" alt="" />
                        </div>
                        <div className="relative top-5 font-extralight">
                            <p> Promote wellness and healthy habits by organizing 
                                community events, educational programs, 
                                and other activities that support healthy living.</p>
                        </div>
                    </div>
                </div>

                <div className="w-72 h-full shadow-lg text-sky-800 p-6 mt-12 bg-sky-200 relative rounded-lg flex flex-col justify-center items-center">
                    <div className="text-center">
                    <h1 className="mb-5">
                    From Giving to Gaining
                </h1>
                    </div>
                    <div className="flex text-center">
                       
                        <div className="font-semibold text-lg">
                            <p>“ The Transformative Journey of a Healthcare 
                                Volunteer ”</p>
                        </div>
                    </div>
                </div>

                
            </div>
            </div>

{/* Services */}
<div className="p-10 md:p-20 mt-10 md:mt-0">
            <h1 className=" font-bold text-3xl  w-80">
            Healthcare Services for Rural Areas
                </h1>
                <div className="mt-8 grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3">
                <div className="w-72 h-fit overflow-hidden mb-3 shadow-lg relative rounded-lg">
                    <img src={service1} alt="" className="" />
                </div>

                <div className="w-72 h-fit overflow-hidden mb-3 shadow-lg relative rounded-lg">
                    <img src={service2} alt="" className="" />
                </div>

                <div className="w-72 h-fit overflow-hidden mb-3 shadow-lg relative rounded-lg">
                    <img src={service3} alt="" className="" />
                </div>
            </div>
            </div>

{/* Volunteered Doctors */}

<div className="mt-8 p-10 md:p-20 md:mt-0">
        <h1 className=" font-bold text-3xl w-80">
        Healthcare Services for Rural Areas
        </h1>
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3"> 
        <Volunteer docName="Dr. David Nguyen" />
       <Volunteer docName="Dr. David Nguyen" />
       <Volunteer docName="Dr. David Nguyen" />
       <Volunteer docName="Dr. David Nguyen" />
       <Volunteer docName="Dr. David Nguyen" />
       <Volunteer docName="Dr. David Nguyen" />
       <Volunteer docName="Dr. David Nguyen" />
       <Volunteer docName="Dr. David Nguyen" />
       </div>
      
       </div>
{/* Footer */}
     <Footer />
{/* copyright */}
<div className=" bg-slate-500 h-16 w-full">
    <p className="text-center text-slate-50">Copyright: aid4ruralhealth 2023</p>
</div>

       
        </div>
     );
}
 
export default Home;