import ClientsCarousel from "./Clientslide";

function About() {
  return (
    <div>
      <div className="p-6 md:p-24">
        <h1 className="text-yellow-500 text-xs md:text-sm font-semibold">ABOUT US</h1>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-3xl md:text-5xl font-bold mt-4">
            <p className="mb-2 md:mb-3">Empowering Your Vision with</p>
            <p className="mb-2 md:mb-3">Exceptional Technology</p>
            <p className="mb-2 md:mb-3">Solutions.</p>
          </div>
          <p className="text-gray-500 text-sm md:text-base mt-4 md:mt-0 md:w-1/2">
            At NAS Software, we don’t just build software; we engineer pathways for businesses to realize their full potential. Born from a passion for innovation and a commitment to excellence, our journey began over a decade ago.
          </p>
        </div>

        <div className="p-6 md:p-8 mt-6 flex justify-center md:justify-end rounded-2xl mx-auto bg-cover bg-center" style={{ backgroundImage: 'url(/team-img-2.webp)' }}>
          <div className="bg-gradient-to-t from-gray-900 w-full md:w-1/2 p-8 md:p-12 border rounded-lg">
            <p className="text-3xl md:text-5xl font-bold mt-4 text-white">A Legacy of <br />Success</p>
            <p className="text-white mt-6 font-semibold text-sm md:text-base">With years of steadfast presence in the technology domain, NAS Software has been a beacon of innovation and reliability. Here's a snapshot of our journey so far:</p>

            <div className="flex text-white gap-6 mt-6 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">13+</div>
                <div className="text-md font-semibold">Jobs Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">8</div>
                <div className="text-md font-semibold">Partners Worldwide</div>
              </div>
            </div>

            <div className="flex text-white gap-6 mt-6 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">7</div>
                <div className="text-md font-semibold">Dedicated Employees</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 mt-6 flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="font-bold text-2xl md:text-4xl mb-4">Our Philosophy</h1>
            <p className="text-gray-500 text-sm md:text-base">Innovation, Integrity, and Impact: At the core of NAS Software lies our unwavering commitment to innovation. We believe in the power of technology to transform lives and industries.</p>
          </div>
          <div>
            <h1 className="font-bold text-2xl md:text-4xl mb-4">Why NAS Software?</h1>
            <p className="text-gray-500 text-sm md:text-base">Choosing NAS Software means partnering with a team that stands at the intersection of technology and innovation. Our comprehensive services span from bespoke software development to strategic IT consulting, ensuring every aspect of your digital journey is covered.</p>
          </div>
        </div>

        <div className="mt-16">
          <ClientsCarousel />
        </div>
      </div>

      <div className="text-center bg-gradient-to-r w-full from-blue-900 to-gray-900 p-12 md:p-32">
        <h1 className="text-white text-2xl md:text-4xl font-bold">Join Us on the Path to Innovation</h1>
        <p className="text-white mt-3 text-sm md:text-base">Ready to transform your vision into reality? With NAS Software, you're choosing a partner dedicated to excellence, innovation, and your success.</p>

        <div className="mt-6">
          <input type="text" placeholder="Enter Your Email" className="py-2 px-3 md:pr-24 rounded-md" />
          <button className="mt-3 md:mt-0 md:ml-2 bg-yellow-500 py-2 px-6 text-white font-bold rounded-md">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default About;
