/*eslint-disable @typescript-eslint/no-unused-vars*/
import Link from "next/link"


export default function Navbar (){
    return(
    
      <div className="flex bg-blue-700 rounded list-none justify-between p-3 text-black">
    
        <h2 className="font-bold font-serif"> TS School</h2>
        <br/>
        <Link className="mx-2 hover:text-gray-400" href="/">Home</Link>
        <br/>
        <Link className="mx-2 hover:text-gray-400" href="/contact">Contact</Link>
        <br/>
        <Link className="mx-2 hover:text-gray-400" href="/about">About</Link>
        <br/>
        <Link className="mx-2 hover:text-gray-400" href="/service">Service</Link>
        <br/>
        <Link className="mx-2 hover:text-gray-400" href="/program">program</Link>
        <br/>
        <Link className="mx-2 hover:text-gray-400" href="/offer">Offer</Link>
      </div>
    )
  }