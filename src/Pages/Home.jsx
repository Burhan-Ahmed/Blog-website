import NavBar from "./NavBar"

export default function Home() {
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
                        <img className=" mt-72" src="./arrow.png" alt="Right Arrow" width="150" />
                    </button>
                </div>

                <div className="flex justify-center text-3xl">
                    <h1>
                        All Products
                    </h1>
                </div>
                <div className=" grid mx-auto grid-cols-4 w-fit p-10 gap-20">
                    <div className="border border-black rounded-lg w-fit p-6">
                        <img className="m-auto" src="./images/handfree.png" alt="HandFree Picture" width="150" />
                        <div className="text-center font-semibold">
                            <h1 className="text-xl">Smart Watch</h1>
                            <h4 className="text-lg text-red-500">4,999</h4>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet,<br />
                            consectetur adipiscing elit.<br />
                            Sed imperdiet nulla non tortor,<br />
                            rhoncus porttitor nibh blandit.
                        </p>
                        <div className="flex justify-center">
                            <button
                                className="border text-white bg-black px-4 py-1 m-auto border-black rounded-full mt-3 hover:text-black hover:bg-white">
                                BUY NOW
                            </button>
                        </div>
                    </div>
                    <div className="border border-black rounded-lg w-fit p-6">
                        <img className="m-auto" src="./images/iphone.png" alt="HandFree Picture" width="150" />
                        <div className="text-center font-semibold">
                            <h1 className="text-xl">Iphone 15 Pro</h1>
                            <h4 className="text-lg text-red-500">11,199</h4>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, <br />
                            consectetur adipiscing elit. <br />
                            Sed imperdiet nulla non tortor, <br />
                            rhoncus porttitor nibh blandit.
                        </p>
                        <div className="flex justify-center">
                            <button
                                className="border text-white bg-black px-4 py-1 m-auto border-black rounded-full mt-3 hover:text-black hover:bg-white">

                                BUY NOW
                            </button>
                        </div>
                    </div>
                    <div className="border border-black rounded-lg w-fit p-6">
                        <img className="m-auto" src="./images/gloves.png" alt="HandFree Picture" width="150" />
                        <div className="text-center font-semibold">
                            <h1 className="text-xl">Gloves</h1>
                            <h4 className="text-lg text-red-500">899</h4>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, <br />
                            consectetur adipiscing elit. <br />
                            Sed imperdiet nulla non tortor, <br />
                            rhoncus porttitor nibh blandit.
                        </p>
                        <div className="flex justify-center">
                            <button
                                className="border text-white bg-black px-4 py-1 m-auto border-black rounded-full mt-3 hover:text-black hover:bg-white">
                                BUY NOW
                            </button>
                        </div>
                    </div>
                    <div className="border border-black rounded-lg w-fit p-6">
                        <img className="m-auto" src="./images/mic.png" alt="HandFree Picture" width="150" />
                        <div className="text-center font-semibold">
                            <h1 className="text-xl">Mic</h1>
                            <h4 className="text-lg text-red-500">2,999</h4>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, <br />
                            consectetur adipiscing elit. <br />
                            Sed imperdiet nulla non tortor, <br />
                            rhoncus porttitor nibh blandit.
                        </p>
                        <div className="flex justify-center">
                            <button
                                className="border text-white bg-black px-4 py-1 m-auto border-black rounded-full mt-3 hover:text-black hover:bg-white">
                                BUY NOW
                            </button>
                        </div>
                    </div>
                    <div className="border border-black rounded-lg w-fit p-6">
                        <img className="m-auto" src="./images/lcd.png" alt="HandFree Picture" width="150" />
                        <div className="text-center font-semibold">
                            <h1 className="text-xl">Samsung LED</h1>
                            <h4 className="text-lg text-red-500">31,999</h4>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, <br />
                            consectetur adipiscing elit. <br />
                            Sed imperdiet nulla non tortor, <br />
                            rhoncus porttitor nibh blandit.
                        </p>
                        <div className="flex justify-center">
                            <button
                                className="border text-white bg-black px-4 py-1 m-auto border-black rounded-full mt-3 hover:text-black hover:bg-white">

                                BUY NOW
                            </button>
                        </div>
                    </div>
                    <div className="border border-black rounded-lg w-fit p-6">
                        <img className="m-auto" src="./images/camera.png" alt="HandFree Picture" width="150" />
                        <div className="text-center font-semibold">
                            <h1 className="text-xl">Digital Camera</h1>
                            <h4 className="text-lg text-red-500">49,999</h4>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, <br />
                            consectetur adipiscing elit. <br />
                            Sed imperdiet nulla non tortor, <br />
                            rhoncus porttitor nibh blandit.
                        </p>
                        <div className="flex justify-center">
                            <button
                                className="border text-white bg-black px-4 py-1 m-auto border-black rounded-full mt-3 hover:text-black hover:bg-white">

                                BUY NOW
                            </button>
                        </div>
                    </div>
                    <div className="border border-black rounded-lg w-fit p-6">
                        <img className="m-auto" src="./images/phone.png" alt="HandFree Picture" width="150" />
                        <div className="text-center font-semibold">
                            <h1 className="text-xl">Samsung S21</h1>
                            <h4 className="text-lg text-red-500">43,999</h4>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, <br />
                            consectetur adipiscing elit. <br />
                            Sed imperdiet nulla non tortor, <br />
                            rhoncus porttitor nibh blandit.
                        </p>
                        <div className="flex justify-center">
                            <button
                                className="border text-white bg-black px-4 py-1 m-auto border-black rounded-full mt-3 hover:text-black hover:bg-white">

                                BUY NOW
                            </button>
                        </div>
                    </div>
                    <div className="border border-black rounded-lg w-fit p-6">
                        <img className="m-auto" src="./images/scraf.png" alt="HandFree Picture" width="150" />
                        <div className="text-center font-semibold">
                            <h1 className="text-xl">Ladies Scraf</h1>
                            <h4 className="text-lg text-red-500">1,199</h4>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, <br />
                            consectetur adipiscing elit. <br />
                            Sed imperdiet nulla non tortor, <br />
                            rhoncus porttitor nibh blandit.
                        </p>
                        <div className="flex justify-center">
                            <button
                                className="border text-white bg-black px-4 py-1 m-auto border-black rounded-full mt-3 hover:text-black hover:bg-white">

                                BUY NOW
                            </button>
                        </div>
                    </div>
                </div>
            </body>

            <footer className="bg-cyan-600">
                <div className="flex justify-around py-7">
                    <div>
                        <h1 className="flex justify-center text-xl font-semibold">
                            E-COMMERCE STORE
                        </h1>
                        <p>
                            At Our Ecommerce Store, we are passionate about providing exceptional products and an <br />
                            unparalleled
                            shopping experience. We strive to offer a curated selection of high-quality <br />
                            items that meet the
                            diverse
                            needs and tastes of our valued customers.
                        </p>
                    </div>
                    <div>
                        <h1 className="font-semibold">
                            LINKS
                        </h1>
                        <ul>
                            <li>Home</li>
                            <li> Products</li>
                            <li> Cart</li>
                            <li> Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-semibold">
                            LINKS
                        </h1>
                        <ul>
                            <li>Facebook</li>
                            <li> Instagram</li>
                            <li> Twitter</li>
                            <li> LinkedIn</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t">
                    <h5 className="flex justify-center">
                        © 2020 Copyright: ecommerce-store.com
                    </h5>
                </div>
            </footer>
            <script src="../BackEnd/server.js"></script>
        </>
    )
}