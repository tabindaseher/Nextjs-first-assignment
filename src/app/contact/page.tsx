
export default function Contact (){
    return(
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4">Feel free to reach out for any inquiries!</p>
      <form className="mt-6">
        <input type="text" placeholder="Your Name" className="p-2  pl-1 ml-1 border border-gray-800 rounded " />
        <input type="email" placeholder="Your Email" className="mt-2 p-2 ml-1 border border-gray-800 rounded" />
        <input placeholder="Your Message" className="mt-2 p-2 pr-1 ml-1  border border-gray-800 rounded" ></input>
        <button className="mt-4 px-4 py-2 ml-64 text-black bg-blue-700 rounded hover:bg-blue-800">
          Send
        </button>
      </form>
    </div>
 ) }