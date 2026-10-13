
import { useEffect, useRef, useState } from 'react'
import { experiences } from '../data/experience'

function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Detect when the experience section enters the viewport.
  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
      }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="
        relative scroll-mt-24
        border-t border-neutral-200/60
        px-6 py-24
        dark:border-indigo-300/10
        md:px-10 md:py-32
      "
    >
      <div className="relative mx-auto max-w-[1100px]">

        {/* Section heading */}
        <div className="mb-16">
          <p className="mb-3 text-xs font-medium tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
            WHERE I'VE CONTRIBUTED
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.045em] text-neutral-900 dark:text-neutral-100 md:text-5xl">
            Experience
            <span className="text-indigo-600 dark:text-indigo-400">
              .
            </span>
          </h2>

          <p className="mt-5 max-w-[550px] text-sm leading-7 text-neutral-600 dark:text-slate-400 md:text-base">
            Practical experience working on real software
            projects, solving operational problems, and
            developing my skills as a software developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline track */}
          <div
            aria-hidden="true"
            className="
              absolute bottom-0 left-[9px] top-2
              w-px bg-neutral-200
              dark:bg-indigo-300/15
            "
          />

          {/* Animated glowing progress line */}
          <div
            aria-hidden="true"
            className={`
              absolute bottom-0 left-[8px] top-2
              w-[3px] origin-top rounded-full

              bg-gradient-to-b
              from-indigo-500
              via-indigo-400/70
              to-transparent

              shadow-[0_0_12px_rgba(99,102,241,0.35)]

              motion-safe:transition-transform
              motion-safe:duration-1000
              motion-safe:ease-out

              ${
                isVisible
                  ? 'scale-y-100'
                  : 'motion-safe:scale-y-0'
              }
            `}
          />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="group relative pl-10 md:pl-14"
              >
                {/* Timeline milestone */}
                <div
                  aria-hidden="true"
                  className="
                    absolute left-0 top-8
                    flex h-[19px] w-[19px]
                    items-center justify-center
                    rounded-full

                    border border-indigo-400/70
                    bg-indigo-100

                    shadow-[0_0_16px_rgba(99,102,241,0.25)]

                    dark:bg-[#151d39]
                    dark:shadow-[0_0_18px_rgba(129,140,248,0.25)]
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-indigo-500 dark:bg-indigo-400 motion-safe:animate-pulse" />
                </div>

                {/* Glass experience card */}
                <div
                  className={`
                    relative overflow-hidden
                    rounded-2xl

                    border border-white/70
                    bg-white/60
                    p-6 backdrop-blur-lg

                    dark:border-white/10
                    dark:bg-[#111a30]/55

                    motion-safe:transition-[opacity,transform,border-color,box-shadow]
                    motion-safe:duration-700
                    motion-safe:ease-out

                    hover:border-indigo-300/70
                    hover:shadow-xl
                    hover:shadow-indigo-500/5

                    dark:hover:border-indigo-400/30
                    dark:hover:shadow-indigo-950/20

                    md:p-9

                    ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'motion-safe:opacity-0 motion-safe:translate-y-6'
                    }
                  `}
                  style={{
                    transitionDelay: `${index * 120}ms`,
                  }}
                >
                  {/* Decorative ambient glow */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute
                      -right-24 -top-24
                      h-64 w-64 rounded-full

                      bg-indigo-300/10 blur-3xl

                      dark:bg-indigo-500/10
                    "
                  />

                  <div className="relative">

                    {/* Top information */}
                    <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="mb-3 font-mono text-xs text-indigo-600 dark:text-indigo-400">
                          EXPERIENCE / {String(index + 1).padStart(2, '0')}
                        </p>

                        <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                          {experience.role}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-indigo-600 dark:text-indigo-300">
                          {experience.company}
                        </p>
                      </div>

                      {/* Date badge */}
                      <div
                        className="
                          w-fit rounded-full
                          border border-neutral-200/80
                          bg-white/60 px-4 py-2

                          dark:border-white/10
                          dark:bg-white/[0.05]
                        "
                      >
                        <span className="text-xs font-medium text-neutral-600 dark:text-slate-300">
                          {experience.period}
                        </span>
                      </div>
                    </div>

                    {/* Experience description */}
                    <p className="max-w-[850px] text-sm leading-7 text-neutral-600 dark:text-slate-400">
                      {experience.description}
                    </p>

                    <div className="my-8 h-px bg-neutral-200/70 dark:bg-white/10" />

                    {/* Contributions heading */}
                    <p className="mb-6 text-xs font-semibold tracking-[0.12em] text-neutral-500 dark:text-slate-400">
                      KEY CONTRIBUTIONS
                    </p>

                    {/* Contributions grid */}
                    <div className="grid gap-4 md:grid-cols-2">
                      {experience.responsibilities.map(
                        (responsibility, responsibilityIndex) => (
                          <div
                            key={responsibility}
                            className="
                              group/item flex items-start gap-3
                              rounded-xl

                              border border-neutral-200/60
                              bg-white/40 p-4

                              transition-colors duration-300
                              hover:border-indigo-300/60
                              hover:bg-indigo-50/60

                              dark:border-white/[0.07]
                              dark:bg-white/[0.03]
                              dark:hover:border-indigo-400/25
                              dark:hover:bg-indigo-400/[0.06]
                            "
                          >
                            <span
                              className="
                                mt-0.5 font-mono text-xs
                                text-indigo-500
                                transition-transform duration-300

                                group-hover/item:translate-x-0.5

                                motion-reduce:transform-none
                              "
                            >
                              {String(responsibilityIndex + 1).padStart(2, '0')}
                            </span>

                            <p className="text-sm leading-6 text-neutral-700 dark:text-slate-300">
                              {responsibility}
                            </p>
                          </div>
                        )
                      )}
                    </div>

                    {/* Technologies */}
                    <div className="mt-8 flex flex-wrap gap-2 border-t border-neutral-200/70 pt-6 dark:border-white/10">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-lg border border-neutral-200/70
                            bg-white/50 px-3 py-1.5

                            text-xs text-neutral-600

                            dark:border-white/10
                            dark:bg-white/[0.04]
                            dark:text-slate-300
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
