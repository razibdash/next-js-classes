import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
      <h1 className="text-9xl font-extrabold drop-shadow-lg">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mt-4">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-lg text-white/90 text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>
       <Link
        href="/"
        className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-2xl shadow-md hover:bg-gray-100 transition duration-300"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}
