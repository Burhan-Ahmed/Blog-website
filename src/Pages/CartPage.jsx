import React from "react";
import NavBar from "./NavBar"

export default function CartPage() {

    return (
        <>
            <NavBar />
            <body class="font-poppins">
                <div class="flex justify-center text-2xl mt-10 font-semibold">
                    <h1>Your Add to Cart</h1>
                </div>
                <div class="my-28 mx-72">
                    <div class="flex border justify-between border-black rounded-xl space-x-5 p-7">
                        <img src="./images/phone.png" alt="Product Picture" width="90" />
                        <div>
                            <h1>Name</h1>
                            <p class="pt-5 text-xl">Samsung S21 Ultra</p>
                        </div>
                        <div>
                            <h1>Color</h1>
                            <p class="pt-5 text-xl">Black</p>
                        </div>
                        <div>
                            <h1>Quantity</h1>
                            <p class="pt-5 text-xl">1</p>
                        </div>

                        <div>
                            <h1>Price</h1>
                            <p class="pt-5 text-xl">350,999 Rs</p>
                        </div>
                        <div>
                            <h1>Total</h1>
                            <p class="pt-5 text-xl">350,999 Rs</p>
                        </div>
                    </div>
                    <div class="bg-green-100 flex justify-end border p-7 mt-5 rounded-xl border-black">
                        <h1 class="me-2 mt-0.5">Order total : </h1>
                        <p class="text-xl">350,999</p>
                    </div>
                    <div class="flex justify-end mt-5">
                        <p class="me-4 pt-2">Continue Shopping</p>
                        <button
                            class="border text-white bg-black border-black px-4 py-2 rounded-xl hover:text-black hover:bg-white">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </body>

            <footer class="bg-cyan-600">
                <div class="flex justify-around py-7">
                    <div>
                        <h1 class="flex justify-center text-xl font-semibold">
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
                        <h1 class="font-semibold">
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
                        <h1 class="font-semibold">
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
                <div>
                    <h5 class="flex justify-center">
                        © 2020 Copyright: ecommerce-store.com
                    </h5>
                </div>
            </footer>
        </>
    )
}