/*eslint-disable @typescript-eslint/no-unused-vars*/
import Link from "next/link"


export default function Navbar (){
    return(
    
      <div className="flex flex-wrap items-center bg-blue-700 rounded list-none justify-between p-3 text-white">
    
        <h2 className="font-bold font-serif text-lg sm:text-xl lg:text-2xl"> TS School</h2>
        <nav className="flex flex-wrap gap-4">
        <Link className="mx-2 hover:text-gray-400" href="/">Home</Link>
       
        <Link className="mx-2 hover:text-gray-400" href="/contact">Contact</Link>
    
        <Link className="mx-2 hover:text-gray-400" href="/about">About</Link>
  
        <Link className="mx-2 hover:text-gray-400" href="/service">Service</Link>
 
        <Link className="mx-2 hover:text-gray-400" href="/program">program</Link>

        <Link className="mx-2 hover:text-gray-400" href="/offer">Offer</Link>
        </nav>
      </div>
    )
  }