import Footer from "../ReUsable/Footer";
import NavBar from "../ReUsable/NavBar";

const About = () => {
    return ( 
        <div>
        <NavBar />
            <div className=" relative p-10 md:p-20 mt-24 flex justify-center">
                <div className=" w-36 h-36 rounded-full bg-sky-600 flex items-center justify-center font-bold text-lg">
                    About Us
                </div>
                <div className=" w-48 h-48 rounded-full bg-aboutBg object-cover relative right-72 top-10">

                </div>
            </div>

            <div className="p-10 md:p-16 md:w-3/6">
                <div className=" mb-24 ">
                    <p>
                        At Aid4RuralHealth, we are committed to ensuring that every 
                        rural resident has access to quality healthcare. 
                        Unfortunately, one of the biggest challenges facing these 
                        communities is the shortage of healthcare professionals. 
                        <br /><br />
                        To address this issue, we have launched a program to 
                        provide volunteer healthcare professionals, such as doctors 
                        and nurses, to rural areas in need.
                        <br /><br />
                        Your donation to Aid4RuralHealth will not only sponsor 
                        these healthcare professionals but also provide them with 
                        advanced tools and equipment to achieve accurate diagnosis 
                        and treatment. With your support, we can help hundreds and 
                        thousands of rural residents receive the care they need and 
                        deserve.
                        <br /><br />
                        Join us in our mission to transform rural healthcare by 
                        becoming a donor or volunteer today. Together, we can make 
                        a real difference in the lives of those who need it most.
                    </p>
                </div>

                <div className="mb-5">
                <h1 className=" font-semibold text-3xl  w-80 text-sky-600">
                        <i>Vision</i>
                </h1>
                <p>
                Our vision at Aid4RuralHealth is to build Tanzania where every 
                rural resident has equal access to quality healthcare, 
                regardless of their location or socioeconomic status.
                </p>
                </div>

                <div>
                <h1 className=" font-semibold text-3xl  w-80 text-sky-600">
                        <i>Mission</i>
                </h1>
                <p>
                Our mission at Aid4RuralHealth is to save lives in underserved 
                rural communities of Tanzania by providing volunteer healthcare 
                professionals, such as doctors and nurses. We aim to break down 
                the barriers to healthcare access in Tanzania's rural areas by 
                sending dedicated and skilled volunteers who can provide the care 
                that is often lacking in these areas. Through our work, we strive 
                to improve healthcare outcomes in Tanzania's rural areas and ensure 
                that all Tanzanians have access to the life-saving care they need.
                </p>
                </div>
            </div>
        <Footer />
        </div>
        
     );
}
 
export default About;