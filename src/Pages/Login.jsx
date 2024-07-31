import NavBar from "./headings/NavBar"

export default function LoginPage() {
    return (
        <>
            <NavBar />
            <body class="bg-customBlue font-poppins text-black">
                <div class="m-auto mt-20 w-fit">
                    <div class="border border-black rounded-2xl p-10">
                        <div class="mb-10">
                            <h1 class="text-3xl flex justify-center font-semibold">
                                LOGIN
                            </h1>
                            <p class="flex justify-center">Welcome Back!!!</p>
                        </div>
                        <form action="">
                            <div class="space-y-7">
                                <div class="flex justify-start">
                                    <label for="stdname">
                                        Enter Email
                                    </label>
                                    <input name="stdname" type="email" required placeholder="Enter Email Address"
                                        class="ms-14 px-3 py-0.5 rounded-xl border border-slate-300" />
                                </div>
                                <div>
                                    <label for="pass">
                                        Password
                                    </label>
                                    <input name="pass" type="password" required placeholder="Enter Password"
                                        class="ms-16 px-3 py-0.5 rounded-xl border border-slate-300" />
                                </div>

                                <div class=" flex justify-center">
                                    <button
                                        class="hover:text-white hover:bg-black py-1 px-24 border border-black text-xl rounded-full">
                                        Log In
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div class="flex justify-center">
                            Don't Have Account?
                            <a href="registerPage.html" class="mx-2 hover:underline text-blue-400">
                                Signup
                            </a>
                        </div>
                    </div>
                </div>
            </body>

        </>
    )
}