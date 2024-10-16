import ClientsCarousel from "./Clientslide"



function About() {
  return (
    <div>
    <div className="p-24">
    <h1 className="text-yellow-500  text-sm font-semibold">ABOUT US</h1>
    <div className=" flex justify-between">
      <div className="text-5xl font-bold mt-4 ">
        <p className="mb-3">Empowering Your Vision with</p>
        <p className="mb-3">Exceptional Technology </p>
       <p className="mb-3">Solutions.</p> 
      </div>
      <p  className="text-gray-500 ">
      At NAS Software , we don`t just build software; we engineer <br />
       pathways for businesses to realize their full potential. Born <br />
        from a passion for innovation and a commitment to excellence, <br />
        our journey began over a decade ago.
      </p>
    </div>
    <div className=" p-8 mt-6 flex justify-end rounded-2xl mx-auto  bg-cover bg-center m-0 " style={{ backgroundImage:'url(/team-img-2.webp)'  }}>
      <div className= " bg-gradient-to-t   from-gray-900  w-1/2 p-12 border rounded-lg">
        <p className="text-5xl font-bold mt-4 text-white ">A Legacy of <br />
         Success
         </p>
        <p className="text-white mt-6 font-semibold">With years of steadfast presence in the technology <br />
           domain, NileSync has been a beacon of innovation and <br />
           reliability. Here`s a snapshot of our journey so far:
           </p>
           <div className="  flex text-white gap-6  mt-6 rounded-lg ">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-500">13+</div>
            <div className="text-md font-semibold">Jobs Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-500">8</div>
            <div className="text-md font-semibold">Partners Worldwide</div>
          </div>
          </div>
          <div className=" flex text-white gap-6 mt-6  rounded-lg ">
          <div className="text-center ">
            <div className="text-2xl font-bold text-yellow-500">7</div>
            <div className="text-md font-semibold">Dedicated Employees</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-500">7</div>
            <div className="text-md font-semibold">Dedicated Employees</div>
          </div>
        </div>
        </div>
      
      </div>
      <div className=" p-8 mt-6 flex justify-between">
      <div>
        <h1 className="font-bold text-4xl mb-6">Our Philosophy</h1>
        <p className=" text-gray-500 ">Innovation, Integrity and Impact At the core of NileSync lies  <br />
          our unwavering commitment to innovation. We believe in the <br />
          power of technology to transform lives and industries.
          </p>
      </div>
      <div>
        <h1 className="font-bold text-4xl mb-6">
        Why NAS Software?
        </h1>
      <p className="text-gray-500">
      Choosing NileSync means partnering with a team that stands <br />
       at the intersection of technology and innovation. Our <br />
        comprehensive services span from bespoke software <br />
         development to strategic IT consulting, ensuring every aspect <br />
         of your digital journey is covered.
      </p>
      </div>
    </div>
    
    <div className="mt-16">
    <ClientsCarousel />
    </div>
    </div>
    
      <div className="  text-center bg-gradient-to-r w-full from-blue-900 to-gray-900  p-32">
        <h1 className="text-white text-4xl font-bold ">Join Us on the Path to Innovation</h1>
        <p className="text-white mt-3">Ready to transform your vision into reality? With NileSync, you`re choosing a partner dedicated to excellence, innovation, and your success.</p>
        <input type="text"
        placeholder="Enter Your Email"
        className="py-2 pr-24 p-3 mt-3 " />
       <span><button className=" mt-3 bg-yellow-500 p-2 text-white font-bold ">Subscribe</button></span>
      </div>
    </div>

   
  )
}

export default About
