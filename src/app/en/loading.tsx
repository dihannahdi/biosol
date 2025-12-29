export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Animated DNA/Microbe loader */}
        <div className="relative w-16 h-16">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-forest-100 animate-pulse" />
          {/* Spinning ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-forest-500 animate-spin" />
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-forest-500 to-microbe-500 animate-pulse" />
          </div>
        </div>
        <p className="text-sm font-medium text-carbon-500 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
