import { useEffect, type ReactNode } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const containerElement = document.querySelector<HTMLElement>(
      "[data-scroll-container]"
    );

    if (!containerElement) return;

    const scroll = new LocomotiveScroll({
      el: containerElement,
      smooth: true,
      lerp: 0.05,
      smartphone: {
        smooth: true,
      },

      class: "is-revealed",
      reloadOnContextChange: true,
    });

    const handleResize = () => scroll.update();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      scroll.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main data-scroll-container className="relative">
      <div data-scroll-section>{children}</div>
    </main>
  );
}
