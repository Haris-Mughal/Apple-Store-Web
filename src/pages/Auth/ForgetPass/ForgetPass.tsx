import { Link } from "react-router";

  const ForgetPass = () => {

        const year = new Date().getFullYear();


    return (
        <div className="flex h-screen">
            <div className="hidden md:block w-1/2 h-full bg-center bg-no-repeat">
                <img
                    src="/laptop-login.svg"
                    alt="iphone-bg"
                    className="w-full h-full bg-cover"
                />
            </div>

            <div className="flex flex-col justify-center w-full md:w-1/2 px-8 md:px-16 lg:px-24">
                <div className="flex flex-col items-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                        Forget Password
                    </h1>
                </div>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="text"
                            placeholder="Enter email to get login code"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1c1c1c]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-[#1c1c1c] hover:bg-black rounded-md shadow-lg"
                    >
                        Forget Password
                    </button>
                </form>

                <p className="text-sm text-gray-600 mt-6 text-center">
                    Remember Password?{" "}
                    <Link
                        to={"/auth/login"}
                        className="text-[#1c1c1c] hover:text-black hover:underline"
                    >
                        Login now
                    </Link>
                </p>

                <div className="mt-6 text-center text-gray-600 text-xs">
                    &copy; Apple store {year}
                </div>
            </div>
        </div>
    );
};

export default ForgetPass;
