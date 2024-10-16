function Expertice() {
  return (
    <div className="flex  bg-gray-100 p-24">
      <div className=" w-1/2">
        <h1 className="text-6xl font-bold text-black mb-6">Our Expertise</h1>
        <p className="text-gray-500 mb-6">
        At NAS software, we harness a diverse array of <br />
        cutting-edge technologies to turn your visionary <br />
        ideas into reality.Discover how we leverage our tech stacks<br />
         to build your dream product:
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-lg mb-6 flex items-center space-x-2">
  <span>Explore More</span>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</button>

        </div>
       
        <div className="w-1/2 font-semibold text-lg">
  <div className="flex gap-2 mb-4">
    <div className="border border-gray-200 py-6 px-16 rounded-lg hover:bg-white hover:text-yellow-500 whitespace-nowrap">
      Website
    </div>
    <div className="border border-gray-200 py-6 px-16 rounded-lg hover:bg-white hover:text-yellow-500 whitespace-nowrap">
      UI/UX Design
    </div>
    <div className="border border-gray-200 py-6 px-16 rounded-lg hover:bg-white hover:text-yellow-500 whitespace-nowrap">
      Web Apps
    </div>
  </div>
  <div className="flex gap-2">
    <div className="border border-gray-200 py-6 px-11 rounded-lg hover:bg-white hover:text-yellow-500 whitespace-nowrap">
      Mobile Apps
    </div>
    <div className="border border-gray-200 py-6 px-11 rounded-lg hover:bg-white hover:text-yellow-500 whitespace-nowrap">
      DevOps & Cloud
    </div>
    <div className="border border-gray-200 py-6 px-11 rounded-lg hover:bg-white hover:text-yellow-500 whitespace-nowrap">
      Quality Assurance
    </div>
  </div>
</div>

    </div>
  )
}

export default Expertice
