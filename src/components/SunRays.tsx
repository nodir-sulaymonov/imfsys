const RAY_COUNT = 15;
const RAY_SPREAD = 38; // outward tilt of the edge rays
const RAYS = Array.from({ length: RAY_COUNT }, (_, i) => {
  const t = i / (RAY_COUNT - 1); // 0..1
  // tilt each ray OUTWARD toward its own side so they diverge without crossing.
  const rot = RAY_SPREAD - t * RAY_SPREAD * 2; // +spread (left) .. -spread (right)
  const center = 1 - Math.abs(t - 0.5) * 2; // 0 at edges, 1 in middle
  return {
    rot,
    ax: (t - 0.5) * 520, // origin points spread WIDE across the top
    o: 0.18 + center * 0.32, // brighter toward the center
    dur: 6 + ((i * 1.7) % 5), // varied fade/breathe length
    delay: -((i * 1.3) % 7), // staggered so rays appear/disappear out of sync
  };
});

export function SunRays() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[620px] overflow-hidden rounded-t-[20px] [mask-image:linear-gradient(to_bottom,#000_80%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,#000_80%,transparent)]">
      {RAYS.map((r, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-0 h-[960px] w-[34px]"
          style={{
            opacity: r.o,
            transform: `translate(calc(-50% + ${r.ax}px), 0) rotate(${r.rot}deg)`,
            transformOrigin: "top center",
          }}
        >
          <div
            className="beam-flicker h-full w-full blur-[10px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(160,125,255,0.7), rgba(99,52,224,0.28) 55%, transparent 92%)",
              animationDuration: `${r.dur}s`,
              animationDelay: `${r.delay}s`,
            }}
          />
        </div>
      ))}
      <div className="sun-glow absolute left-1/2 top-[-160px] h-[320px] w-[680px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(120,80,228,0.4),transparent_74%)] blur-2xl" />
    </div>
  );
}
