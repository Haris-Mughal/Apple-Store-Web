import { Link } from "react-router";

const Login = () => {

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
                        Apple Store
                    </h1>
                </div>

                <h2 className="text-lg font-medium text-[#1c1c1c] mb-6">
                    Nice to see you again
                </h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Login
                        </label>
                        <input
                            type="text"
                            placeholder="Email or phone number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1c1c1c]"
                        />
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1c1c1c]"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                        >
                            👁️
                        </button>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-black focus:ring-[#1c1c1c] rounded"
                            />
                            <label className="ml-2 text-gray-600">
                                Remember me
                            </label>
                        </div>
                        <Link
                            to={"/auth/forget"}
                            className="text-[#1c1c1c] hover:text-black hover:underline"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-[#1c1c1c] hover:bg-black rounded-md shadow-lg"
                    >
                        Login
                    </button>
                </form>

                <Link
                    to={"/auth/reset"}
                    className="text-[#1c1c1c] hover:text-black hover:underline text-end py-2"
                >
                    Need to Reset password?
                </Link>

                <div className="mt-6 text-center text-gray-600 text-xs">
                    &copy; Apple store {year}
                </div>
            </div>
        </div>
    );
};

export default Login;
