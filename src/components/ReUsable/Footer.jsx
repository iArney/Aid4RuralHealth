const Footer = () => {
    return ( 
        <div className=" bg-footerBg object-cover h-fit w-full md:flex">
        <div className="p-6 mt-5 md:flex">
            <div className="mt-8">
                <div>
                    <h2 className="font-bold text-lg">Our Address</h2>
                </div>
                <div className=" font-light">
                    <p>Phone Number:</p>
                    <p>Email: aid4ruralhealth@gmail.com</p>
                </div>
            </div>
            <div className="md:ml-32">
                <div className="mt-8">
                <h2 className="font-bold text-lg">Leave Us A Message</h2>
                </div>
                <div className="mt-2">
                    <form action="" className="flex flex-col">
                        <input type="text" placeholder="eg. Tumaini Shija" className="mb-2 h-8 w-64 p-2 rounded-md bg-slate-200" />
                        <input type="email" placeholder="example@mail.com" className="mb-2 h-8 w-64 p-2 rounded-md bg-slate-200" />
                        <textarea rows="4" cols="32" placeholder="Message..." className=" bg-sky-100 rounded-md"></textarea>
                        <input type="submit" className="mt-2 bg-slate-500 rounded-full text-white h-10 w-36" />
                    </form>
                </div>
            </div>
            <div></div>
        </div>
    </div>
     );
}
 
export default Footer;