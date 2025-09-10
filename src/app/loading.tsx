export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-white text-lg font-semibold animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
