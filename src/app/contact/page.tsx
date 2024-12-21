
export default function Contact (){
    return(
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <p className="mt-4 text-center">Feel free to reach out for any inquiries!</p>
      <form className="mt-6 w-full max-w-md">
        <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-800 rounded mt-2 " />
        <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-800 rounded mt-2" />
        <textarea
      placeholder="Your Message"
      className="w-full p-2 border border-gray-800 rounded mt-4 resize-none"
      rows={5}
    ></textarea>
        <button className="w-full mt-4 px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-800 transition-colors duration-200">
          Send
        </button>
      </form>
    </div>
 ) }