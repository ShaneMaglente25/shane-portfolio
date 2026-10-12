
const stars = Array.from({ length: 65 }, (_, index) => ({
  x: (index * 137 + (index % 7) * 29) % 1000,
  y: (index * 233 + (index % 11) * 37) % 700,
  radius: index % 9 === 0 ? 1.8 : 0.9,
  delay: -(index % 8) * 0.7,
  duration: 3 + (index % 5),
}))

const waves = Array.from({ length: 24 }, (_, index) => index)

function Atmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#080d1c]" />

      {/* LIGHT MODE: Soft wave pattern */}
      <svg
        className="wave-drift absolute inset-0 h-full w-full text-slate-400/25 dark:hidden"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {waves.map((index) => {
          const y = 90 + index * 45

          return (
            <path
              key={index}
              d={`
                M -150 ${y}
                C 160 ${y - 120},
                  390 ${y + 120},
                  700 ${y}
                S 1170 ${y - 120},
                  1590 ${y}
              `}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          )
        })}
      </svg>

      {/* LIGHT MODE: Gentle accent glow */}
      <div className="absolute -right-48 top-0 h-[650px] w-[650px] rounded-full bg-indigo-300/10 blur-[100px] dark:hidden" />

      {/* DARK MODE: Nebula-inspired ambient light */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background: `
            radial-gradient(
              ellipse at 75% 20%,
              rgba(99, 102, 241, 0.17),
              transparent 42%
            ),
            radial-gradient(
              ellipse at 15% 80%,
              rgba(56, 189, 248, 0.07),
              transparent 40%
            )
          `,
        }}
      />

      {/* DARK MODE: Animated star field */}
      <svg
        className="absolute inset-0 hidden h-full w-full dark:block"
        viewBox="0 0 1000 700"
        preserveAspectRatio="xMidYMid slice"
      >
        {stars.map((star, index) => (
          <circle
            key={index}
            cx={star.x}
            cy={star.y}
            r={star.radius}
            fill="#e0e7ff"
            className="star-twinkle"
            style={{
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </svg>

      {/* DARK MODE: Subtle atmospheric glow */}
      <div className="absolute -right-48 top-10 hidden h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px] dark:block" />
    </div>
  )
}

export default Atmosphere
