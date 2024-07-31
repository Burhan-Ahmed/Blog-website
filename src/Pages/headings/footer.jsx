
export default function Footer() {

    return (
        <>
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
        </>
    )
}