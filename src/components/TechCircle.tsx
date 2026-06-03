import Image from "next/image";
import { type ReactNode } from "react";

const TECH = [
  "typescript",
  "javascript",
  "python",
  "go",
  "java",
  "swift",
  "react",
  "vuejs",
  "nextjs",
  "nodejs",
  "html5",
  "css3",
  "tailwindcss",
  "redux",
  "graphql",
  "mongodb",
  "postgresql",
  "redis",
  "docker",
  "kubernetes",
  "git",
  "flutter",
  "figma",
];

const RADIUS = 47; // percent of the ring half-size

export function TechCircle({ children }: { children?: ReactNode }) {
  const n = TECH.length;
  return (
    <div className="relative mx-auto w-full max-w-[1280px]">
      <div
        className="relative aspect-[2/1] overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, #000 58%, transparent 90%)",
          WebkitMaskImage: "linear-gradient(to bottom, #000 58%, transparent 90%)",
        }}
      >
        <div className="tech-orbit absolute left-0 top-0 h-[200%] w-full mt-4">
          {TECH.map((name, i) => {
            const deg = i * (360 / n);
            const rad = (deg * Math.PI) / 180;
            const left = 50 + RADIUS * Math.sin(rad);
            const top = 50 - RADIUS * Math.cos(rad);
            const tilt = i % 2 === 0 ? 9 : -9;
            return (
              <div
                key={name}
                className="absolute"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                <div className="-translate-x-1/2 -translate-y-1/2">
                  <div className="tech-orbit-rev">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-b from-white to-[#dde0ea] p-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.6)] ring-1 ring-white/40 sm:h-[68px] sm:w-[68px] sm:p-3.5"
                      style={{ transform: `rotate(${tilt}deg)` }}
                    >
                      <Image
                        src={`/assets/tech/${name}.svg`}
                        alt={name}
                        width={44}
                        height={44}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[55%] w-1/2 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(110,86,207,0.22),transparent_70%)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-3 z-10 mx-auto w-[86%] max-w-[760px] text-center">
        {children}
      </div>
    </div>
  );
}
