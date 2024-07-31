import NavBar from "./NavBar"

export default function RegisterPage() {
    return (
        <>
            <NavBar />
            <body class="bg-customBlue font-poppins text-black">
                <div class="m-auto mt-20 w-fit">
                    <div class="border border-black rounded-2xl p-10">
                        <div class="mb-10">
                            <h1 class="text-3xl flex justify-center font-semibold">
                                Registration
                            </h1>
                            <p class="flex justify-center">Get yourself Register</p>
                        </div>
                        <form action="">
                            <div class="space-y-7">
                                <div class="flex justify-start">
                                    <label for="stdname">
                                        Your Name
                                    </label>
                                    <input name="stdname" type="text" required placeholder="Enter Your Name"
                                        class="ms-14 px-3 py-0.5 rounded-xl border border-slate-300" />
                                </div>
                                <div class="flex justify-start">
                                    <label for="Contact">
                                        Contact Number
                                    </label>
                                    <input name="Contact" type="tel" required placeholder="Enter Number"
                                        class="ms-5 px-3 py-0.5 rounded-xl border border-slate-300" />
                                </div>
                                <div class="flex justify-start">
                                    <label for="Gender">
                                        Gender
                                    </label>
                                    <input name="Gender" type="radio" required placeholder="Enter Email"
                                        class="ms-24 px-3 py-0.5 border rounded-xl border-slate-300" />
                                    Male
                                    <input name="Gender" type="radio" required placeholder="Enter Email"
                                        class="ms-24 px-3 py-0.5 border rounded-xl border-slate-300" />
                                    Female
                                </div>
                                <div>
                                    <label for="pass">
                                        Password
                                    </label>
                                    <input name="pass" type="password" required placeholder="Enter Password"
                                        class="ms-16 px-3 py-0.5 rounded-xl border border-slate-300" />
                                </div>
                                <div>
                                    <label for="repass">
                                        Confirm Password
                                    </label>
                                    <input name="repass" type="password" required placeholder="Again Enter Password"
                                        class="ms-2 px-3 py-0.5 rounded-xl border border-slate-300" />
                                </div>
                                <div class=" flex justify-center">
                                    <button
                                        class="hover:text-white hover:bg-black py-1 px-24 border border-black text-xl rounded-full">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div class="flex justify-center">
                            Already have Account?
                            <a href="loginPage.html" class="mx-2 hover:underline text-blue-400">
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}