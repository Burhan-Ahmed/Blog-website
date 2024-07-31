import NavBar from "./headings/NavBar"
import Footer from "./headings/footer";

import { useEffect, useState } from "react";

export default function Home() {
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

            <body className="font-poppins">
                <div className="flex relative ">
                    <button className="absolute right-0" onClick="scrollRight()">
                        <img className="mt-72 rotate-180" src="./images/arrow.png" alt="Left Arrow" width="150" />
                    </button>
                    <div className="overflow-x-scroll flex snap-mandatory snap-x w-full">
                        <img src="./img1.png" alt="Landing Picture1" />
                        <img src="./img2.png" alt="Landing Picture2" />
                        <img src="./img3.png" alt="Landing Picture3" />
                    </div>
                    <button className="absolute" onClick="scrollLeft()">
                        <img className=" mt-72" src="./images/arrow.png" alt="Right Arrow" width="150" />
                    </button>
                </div>

                <div className="flex justify-center text-3xl">
                    <h1>
                        All Products
                    </h1>
                </div>
                <div className="grid mx-28 grid-cols-4 w-fit p-10 gap-5">
                    {data.map((log, index) => (
                        <div className="grid place-items-center border border-black rounded-lg p-10">
                            <img className="m-auto" src={log.image} alt="HandFree Picture" width="150" />
                            <div className="text-center font-semibold">
                                <h1 className="text-xl">{log.title}</h1>
                                <h4 className="text-lg text-red-500">${log.price}</h4>
                            </div>
                            <p>
                                {log.description.substring(0, 100)}
                            </p>
                            <div className="flex justify-center">
                                <button
                                    className="border text-white bg-black px-4 py-1 m-auto border-black rounded-full mt-3 hover:text-black hover:bg-white">
                                    BUY NOW
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </body>
            <Footer />
        </>
    )
}