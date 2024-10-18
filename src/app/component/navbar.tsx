import Link from "next/link"

export default function Navbar(){
   return ( 
         <div className="my-2">
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center bg-yellow-400">
                        <Link href="/" className="text-violet-900 mr-5 text-2xl">Home</Link>
                        <Link href="/about" className=" text-violet-900 mr-5 text-2xl">About</Link>
                        <Link href="/product" className="text-violet-900 text-2xl">Product</Link>
                    </nav>
        </div>
        )
}