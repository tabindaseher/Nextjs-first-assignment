import Navbar from "../components/navbar";
export default  async function Offer (){
  await new Promise((resolve) => {
    setTimeout(resolve, 3000)
    
  })
       return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 p-6">
      <h1 className="text-4xl font-bold mb-6">What We Offer</h1>
      <p className="mb-4 text-lg text-center max-w-2xl">
        At TS SCHOOL we provide a diverse range of programs and opportunities to ensure every student can reach their fullest potential. Explore our offerings below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        <div className="p-4 bg-white rounded shadow ">
          <h2 className="text-2xl font-semibold">Academic Programs</h2>
          <p className="mt-2 ">
            Our curriculum is designed to challenge and engage students at all levels, from early childhood through high school. We offer a variety of subjects, including STEM, arts, and humanities.
          </p>
        </div>
        
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold">Extracurricular Activities</h2>
          <p className="mt-2">
            We believe in a holistic approach to education. Our school offers a wide range of clubs, sports, and arts programs that encourage teamwork, creativity, and personal growth.
          </p>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold">Community Engagement</h2>
          <p className="mt-2">
            We actively involve students in community service and outreach programs, fostering a sense of responsibility and connection to the world around them.
          </p>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold">Support Services</h2>
          <p className="mt-2">
            Our dedicated staff provides academic support, counseling, and resources to ensure that every student has the tools they need to succeed.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <a href="/contact" className="px-4 py-2 text-black bg-blue-700 rounded hover:bg-blue-800">
          Contact Us for More Information
        </a>
      </div>
    </div>
       ) 
}



