

import Head from "next/head";
export default function Home (){
  return(
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-300 px-4 sm:px-6 lg:px-8">
      <Head>
        <title> Sir Syed School</title>
      </Head>
      <h1 className="text-3xl  lg:text-5xl font-bold text-center">Welcome To Our School</h1>
      <br/>
      <p className="mt-4 text-base sm:text-lg lg:text-lg">Providing Quality Education for All</p>
      <div className="mt-6">
        <a href="/about" className="px-4 py-2 text-black bg-blue-700 rounded hover:bg-blue-800  text-sm sm:text-base lg:text-lg">
          Learn More
        </a>
      </div>
  
</div>
  )}



