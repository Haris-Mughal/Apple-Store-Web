import { Link } from "react-router";

const ResetPass = () => {

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
                        Reset Password
                    </h1>
                </div>
                <form className="space-y-4">
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Current Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter current password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1c1c1c]"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                        >
                            👁️
                        </button>
                    </div>
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1c1c1c]"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                        >
                            👁️
                        </button>
                    </div>
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm new password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1c1c1c]"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                        >
                            👁️
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-[#1c1c1c] hover:bg-black rounded-md shadow-lg"
                    >
                        Reset Password
                    </button>
                </form>

                <p className="text-sm text-gray-600 mt-6 text-center">
                    No ned to reset?{" "}
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

export default ResetPass;
