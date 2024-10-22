import Navbar from "../components/navbar";
export default function Service (){
    return(
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <h1 className="text-4xl font-bold">Our Services</h1>
      <ul className="mt-4 list-disc list-inside ">
        <li><u>Early Childhood Education</u></li>
        <li><u>Elementary School</u></li>
        <li><u>Middle School</u></li>
        <li><u>High School</u></li>
      </ul>
    </div>
  );
}
  