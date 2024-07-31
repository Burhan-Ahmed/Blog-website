import React from "react";
import NavBar from "./headings/NavBar"
import Footer from "./headings/footer";
import { useEffect, useState } from "react";

export default function CartPage() {
    const [data, setdata] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const site = 'https://fakestoreapi.com/products'
            const response = await fetch(site);
            const info = await response.json();
            setdata(info);
        };

        fetchData();
    }, []);

    return (
        <>
            <NavBar />
            <body class="font-poppins">
                <div class="flex justify-center text-2xl mt-10 font-semibold">
                    <h1>Your Add to Cart</h1>
                </div>
                <div class="my-28 mx-72">
                    <div class="border border-black rounded-xl  p-10">
                        <div className="grid grid-cols-5 gap-4 text-center">
                            <h1>Product</h1>
                            <h1>Name</h1>
                            <h1>Category</h1>
                            <h1 >Quantity</h1>
                            <h1>Price</h1>
                        </div>
                        <hr />
                        {data.slice(1, 4).map((log, index) => (
                            <div className="grid grid-cols-5 mt-5 text-center">
                                <img className="mx-auto" src={log.image} alt="Product Picture" width="90" />
                                <p className=" mt-10">{log.title}</p>
                                <p className=" mt-10">{log.category}</p>
                                <p className=" mt-10">1</p>
                                <p className=" mt-10">${log.price}</p>
                            </div>
                        ))}
                    </div>
                    <div class=" flex justify-end border pe-24 p-7 mt-5 rounded-xl border-black">
                        <h1 class="me-2 mt-0.5">Order total : </h1>
                        <p class="text-green-400 font-semibold text-xl">$94.39</p>
                    </div>
                    <div class="flex justify-end mt-5 pe-5">
                        <p class="me-4 pt-2">Continue Shopping</p>
                        <button
                            class="border text-white bg-black border-black px-4 py-2 rounded-xl hover:text-black hover:bg-white">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </body>

            <Footer />
        </>
    )
}