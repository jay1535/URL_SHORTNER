import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
  <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[85vh]">
          <div className=" flex flex-col gap-4 items-center justify-center">
               <p className="text-3xl font-bold "> Best URL Shortner In the Market</p>
               <p className="px-30 text-center"> We Are the most Straightforward Url shortner in the world. Most of the url shortner apps will track tou or ask you to login. We understand your needs and hence created this URL shortner app</p>
               <div className='flex gap-3'>
        <Link href="/shorten"> <button className='bg-purple-700 rounded-lg shadow-lg py-1 px-2 text-white'>Try now</button></Link>
        <Link href="/github">   <button className='bg-purple-700 rounded-lg shadow-lg py-1 px-2 text-white'>Github</button></Link>
        </div>
          </div>
          <div className="flex justify-start relative">
               <Image  className="mix-blend-darken"alt="An Image of Vector " src={"/vector.png"} fill={true} />
          </div>
      </section>
  </main>  
  );
}
