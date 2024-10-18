import Link from "next/link";

export default function Product() {
    return (
        <div className="items-center justify-center text-center">
                <h1 className="text-center text-3xl  text-pink-400"> Product Page </h1>
            <br />
          <h4 className="text-center text-3xl  text-pink-400">This is Product page</h4>
            <br />
            <button className=" text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg items-center justify-center text-center">
         <Link href="/product/product1">Nested Product</Link> 
        </button>
        </div>
    )
}