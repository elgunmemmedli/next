import LoginForm from "@/app/components/Auth/LoginForm";

export default function page() {
  return (
    <div className="font-sans h-screen ">
      <div className="transition-all dark:bg-gray-900 relative min-h-screen flex flex-col sm:justify-center items-center  ">
        <div className="relative sm:max-w-sm w-full">
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label
              htmlFor=""
              className="block mt-3 text-sm text-gray-700 text-center font-semibold"
            >
              Login
            </label>
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  );
}
