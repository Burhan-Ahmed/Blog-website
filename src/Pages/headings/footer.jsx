
export default function Footer() {

    return (
        <>
            <footer style={{ background: '#343A40' }}>
                <div className="font-poppins flex justify-around py-7 text-white">
                    <div>
                        <h1 className="flex justify-center text-xl font-medium">
                            E-COMMERCE STORE
                        </h1>
                        <p className="text-sm">
                            At Our Ecommerce Store, we are passionate about providing exceptional products and an <br />
                            unparalleled
                            shopping experience. We strive to offer a curated selection of high-quality <br />
                            items that meet the
                            diverse
                            needs and tastes of our valued customers.
                        </p>
                    </div>
                    <div>
                        <h1 className="font-medium text-xl">
                            LINKS
                        </h1>
                        <ul className="text-sm">
                            <li>Home</li>
                            <li> Products</li>
                            <li> Cart</li>
                            <li> Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-medium text-xl">
                            LINKS
                        </h1>
                        <ul className="text-sm">
                            <li>Facebook</li>
                            <li> Instagram</li>
                            <li> Twitter</li>
                            <li> LinkedIn</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t text-white text-sm">
                    <h5 className="flex justify-center">
                        © 2020 Copyright: ecommerce-store.com
                    </h5>
                </div>
            </footer>
        </>
    )
}