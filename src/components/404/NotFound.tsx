import { useEffect, useState } from "react";

export default function NotFound() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % 3);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-12 p-4 bg-white">
      <div className="w-full max-w-[1200px] aspect-[3/1] px-4 md:px-8 lg:px-12">
        <div className="relative w-full h-full">
          {/* Pixel Art 404 Container */}
          <div className="absolute inset-0 grid grid-cols-[1fr_1fr_1fr] gap-x-[10%]">
            {/* First 4 */}
            <div className="relative w-full h-full">
              <div className="absolute right-[0%] top-[0%] w-[12%] h-[12%] bg-black" />
              <div className="absolute right-[12%] top-[12%] w-[12%] h-[12%] bg-black" />
              <div className="absolute right-[24%] top-[24%] w-[12%] h-[12%] bg-black" />
              <div className="absolute right-[36%] top-[36%] w-[12%] h-[12%] bg-black" />
              <div className="absolute right-[0%] top-[48%] w-[48%] h-[12%] bg-black" />
              <div className="absolute right-[0%] top-[60%] w-[12%] h-[40%] bg-black" />
            </div>

            {/* 0 */}
            <div className="relative w-full h-full">
              <div className="absolute left-[0%] top-[0%] w-[100%] h-[12%] bg-black" />
              <div className="absolute left-[0%] top-[12%] w-[12%] h-[76%] bg-black" />
              <div className="absolute right-[0%] top-[12%] w-[12%] h-[76%] bg-black" />
              <div className="absolute left-[0%] bottom-[0%] w-[100%] h-[12%] bg-black" />

              {/* Animated Character with Bouncing Motion */}
              <div
                className="absolute w-[8%] h-[8%] bg-black transition-all duration-500 ease-in-out"
                style={{
                  left: "50%", // Center horizontally in the '0'
                  transform: "translateX(-50%)", // Ensure perfect centering
                  top:
                    position === 0
                      ? "12%"
                      : position === 1
                      ? "50%"
                      : position === 2
                      ? "88%"
                      : "12%",
                }}
              />
            </div>

            {/* Second 4 */}
            <div className="relative w-full h-full">
              <div className="absolute left-[36%] top-[0%] w-[12%] h-[12%] bg-black" />
              <div className="absolute left-[24%] top-[12%] w-[12%] h-[12%] bg-black" />
              <div className="absolute left-[12%] top-[24%] w-[12%] h-[12%] bg-black" />
              <div className="absolute left-[0%] top-[36%] w-[12%] h-[12%] bg-black" />
              <div className="absolute left-[0%] top-[48%] w-[48%] h-[12%] bg-black" />
              <div className="absolute left-[36%] top-[60%] w-[12%] h-[40%] bg-black" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8 text-center max-w-3xl px-4">
        <div className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-md">
          Page Not Found
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-display tracking-tight">
          This is not the page you are looking for
        </h1>

        <a
          href="/"
          className="inline-block relative px-8 py-3 text-sm font-medium uppercase tracking-wider transition-colors hover:text-gray-600"
        >
          <span className="relative z-10">Return Home</span>
          <div className="absolute inset-0 border border-dashed border-black hover:border-gray-600 transition-colors" />
        </a>
      </div>
    </div>
  );
}
