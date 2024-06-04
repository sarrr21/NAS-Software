function Expertice() {
  return (
    <div className="flex  bg-gray-100 p-24">
      <div className="w-1/2 pr-8">
        <h1 className="text-6xl font-bold text-black mb-6">Our Expertise</h1>
        <p className="text-gray-500 mb-6">
        At NAS software, we harness a diverse array of <br />
        cutting-edge technologies to turn your visionary <br />
        ideas into reality.Discover how we leverage our tech stacks<br />
         to build your dream product:
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-lg mb-6">Explore More</button>
        </div>
        <div className=" w-1/2 grid grid-cols-3 gap-4 p-8  ">
          <div className="border border-gray-200 text-center p-4 rounded-lg  ">
            Website
          </div>
          <div className="border border-gray-200 text-center  p-4  rounded-lg    ">
            UI/UX Design
          </div>
          <div className="border border-gray-200  text-center  p-4  rounded-lg   ">
            Web Apps
          </div>
          <div className="border border-gray-200  text-center  p-4  rounded-lg   ">
            Mobile Apps
          </div>
          <div className="border border-gray-200  text-center  p-4  rounded-lg   ">
            DevOps & Cloud 
          </div>
          <div className="border border-gray-200  text-center  p-4 rounded-lg   ">
          Quality Assurance
          </div>

        </div>
    </div>
  )
}

export default Expertice
