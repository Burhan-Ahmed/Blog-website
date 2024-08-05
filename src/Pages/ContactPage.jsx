import NavBar from "./headings/NavBar"
import Footer from "./headings/footer";

export default function ContactPage() {
    return (
        <>
            <NavBar />
            <body class="font-poppins">
                <div class="space-y-2 border border-black mx-44 my-32 rounded-lg ">
                    <div class="bg-slate-300 border-b font-semibold border-black text-2xl ps-14 py-2">
                        <h1>
                            Contact Us
                        </h1>
                    </div>
                    <form action="" class="space-y-5 py-6 ps-14">
                        <div class="flex justify-start">
                            <label for="name" class="w-24">
                                Your Name
                            </label>
                            <input name="name" type="text" required placeholder="Enter Your Name"
                                class="mx-9 w-full px-3 py-0.5 border border-slate-300 rounded-lg" />
                        </div>
                        <div class="flex justify-start">
                            <label for="Email" class="w-24">
                                Your Email
                            </label>
                            <input name="Email" type="email" required placeholder="Enter Email Address"
                                class="mx-9 w-full px-3 py-0.5 border border-slate-300 rounded-lg" />
                        </div>
                        <div class="flex justify-start">
                            <label for="Remarks" class="w-24">
                                Message
                            </label>
                            <textarea name="Remarks" rows="3" spellcheck="false" placeholder="Enter"
                                class="mx-9 w-full px-3 py-0.5 border border-slate-300 rounded-lg"
                                required>                        </textarea>
                        </div>
                        <div class=" flex justify-center">
                            <button
                                class="hover:text-white border-black hover:bg-black py-1 px-24 border text-xl text-black rounded-full">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </body>
            <Footer />
        </>
    )
}