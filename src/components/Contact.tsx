
import type { PointerEvent } from 'react'

import {
  FiArrowUpRight,
  FiMail,
  FiSend,
  FiLinkedin,
} from 'react-icons/fi'

function Contact() {
  const email = 'shanemaglente3@gmail.com'

  // Replace with your real profile URL when available.
  const linkedInUrl = ''

  // Move the decorative glow with the mouse.
  function handlePointerMove(
    event: PointerEvent<HTMLDivElement>
  ) {
    if (event.pointerType !== 'mouse') return

    if (
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
    ) {
      return
    }

    const card = event.currentTarget
    const rect = card.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    card.style.setProperty('--contact-x', `${x}px`)
    card.style.setProperty('--contact-y', `${y}px`)
  }

  return (
    <section
      id="contact"
      className="
        relative scroll-mt-24
        border-t border-neutral-200/60
        px-6 py-24
        dark:border-indigo-300/10
        md:px-10 md:py-32
      "
    >
      <div className="mx-auto max-w-[1100px]">

        {/* Section label */}
        <p className="mb-8 text-center text-xs font-medium tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
          WHAT'S NEXT?
        </p>

        {/* Main glass contact panel */}
        <div
          onPointerMove={handlePointerMove}
          className="
            group relative isolate overflow-hidden
            rounded-[28px]

            border border-white/70
            bg-white/55
            px-6 py-16

            backdrop-blur-lg

            shadow-xl shadow-slate-900/[0.03]

            dark:border-white/10
            dark:bg-[#111a30]/60
            dark:shadow-indigo-950/20

            sm:px-12 sm:py-20
            md:px-16 md:py-24
          "
        >
          {/* Decorative glow - light mode */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0 z-0
              opacity-0

              motion-safe:transition-opacity
              motion-safe:duration-500
              motion-safe:group-hover:opacity-100

              dark:hidden
            "
            style={{
              background: `
                radial-gradient(
                  440px circle at
                  var(--contact-x, 50%)
                  var(--contact-y, 50%),
                  rgba(99, 102, 241, 0.12),
                  transparent 70%
                )
              `,
            }}
          />

          {/* Decorative glow - dark mode */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0 z-0
              hidden opacity-0

              motion-safe:transition-opacity
              motion-safe:duration-500
              motion-safe:group-hover:opacity-100

              dark:block
            "
            style={{
              background: `
                radial-gradient(
                  440px circle at
                  var(--contact-x, 50%)
                  var(--contact-y, 50%),
                  rgba(129, 140, 248, 0.20),
                  transparent 70%
                )
              `,
            }}
          />

          {/* Soft ambient background */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              left-1/2 top-0 z-0
              h-72 w-72 -translate-x-1/2
              rounded-full

              bg-indigo-300/10 blur-[90px]

              dark:bg-indigo-500/10
            "
          />

          {/* Decorative stars */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none absolute
              left-[12%] top-[20%]
              text-xl text-indigo-300/60

              motion-safe:animate-pulse
              dark:text-indigo-300/35
            "
          >
            ✧
          </span>

          <span
            aria-hidden="true"
            className="
              pointer-events-none absolute
              bottom-[18%] right-[12%]
              text-2xl text-indigo-300/60

              motion-safe:animate-pulse
              dark:text-indigo-300/35
            "
          >
            ✦
          </span>

          {/* Main content */}
          <div className="relative z-10 mx-auto max-w-[680px] text-center">

            {/* Availability indicator */}
            <div
              className="
                mb-9 inline-flex items-center
                gap-2 rounded-full

                border border-emerald-200/70
                bg-emerald-50/70 px-4 py-2

                dark:border-emerald-400/20
                dark:bg-emerald-400/[0.06]
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute inline-flex h-full w-full
                    rounded-full bg-emerald-400/50

                    motion-safe:animate-ping
                  "
                />

                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <span className="text-[11px] font-medium tracking-[0.1em] text-emerald-700 dark:text-emerald-300">
                OPEN TO OPPORTUNITIES
              </span>
            </div>

            {/* Animated contact symbol */}
            <div className="relative mx-auto mb-10 flex h-24 w-24 items-center justify-center">

              {/* Slowly rotating orbit */}
              <div
                aria-hidden="true"
                className="
                  absolute inset-0 rounded-full
                  border border-dashed
                  border-indigo-300/70

                  motion-safe:animate-[spin_24s_linear_infinite]

                  dark:border-indigo-400/30
                "
              />

              {/* Inner icon container */}
              <div
                className="
                  relative flex h-16 w-16
                  items-center justify-center
                  rounded-2xl

                  border border-indigo-200/80
                  bg-indigo-50/80
                  text-indigo-600

                  shadow-lg shadow-indigo-500/10

                  dark:border-indigo-400/30
                  dark:bg-indigo-400/10
                  dark:text-indigo-300
                "
              >
                <FiSend aria-hidden="true" size={27} />
              </div>
            </div>

            {/* Main headline */}
            <h2
              className="
                text-4xl font-semibold
                leading-[1.08]
                tracking-[-0.055em]

                text-neutral-900
                dark:text-neutral-100

                sm:text-5xl
                md:text-6xl
              "
            >
              Let's build something{' '}
              <span className="text-indigo-600 dark:text-indigo-400">
                together.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mx-auto mt-8 max-w-[560px]
                text-base leading-8

                text-neutral-600
                dark:text-slate-400

                md:text-lg
              "
            >
              I'm open to opportunities where I can learn,
              contribute to meaningful projects, and grow
              as a software developer. Have something in
              mind? I'd love to hear from you.
            </p>

            {/* Contact actions */}
            <div
              className="
                mt-10 flex flex-col
                items-center justify-center
                gap-3 sm:flex-row
              "
            >
              {/* Primary action */}
              <a
                href={`mailto:${email}`}
                className="
                  group/button inline-flex
                  w-full items-center justify-center
                  gap-3 rounded-xl

                  bg-indigo-600 px-7 py-4
                  text-sm font-medium text-white

                  shadow-lg shadow-indigo-500/20

                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-indigo-500
                  hover:shadow-xl
                  hover:shadow-indigo-500/25

                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-indigo-500

                  motion-reduce:transform-none

                  sm:w-auto
                "
              >
                <FiMail aria-hidden="true" size={17} />

                Get in touch

                <FiArrowUpRight
                  aria-hidden="true"
                  size={17}
                  className="
                    transition-transform duration-300
                    group-hover/button:translate-x-0.5
                    group-hover/button:-translate-y-0.5
                    motion-reduce:transform-none
                  "
                />
              </a>

              {/* Secondary action */}
              {linkedInUrl ? (
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex w-full items-center
                    justify-center gap-3 rounded-xl

                    border border-neutral-200/80
                    bg-white/50 px-7 py-4
                    text-sm font-medium
                    text-neutral-800

                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-white/80

                    dark:border-white/15
                    dark:bg-white/[0.05]
                    dark:text-neutral-200
                    dark:hover:bg-white/10

                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-indigo-500

                    motion-reduce:transform-none

                    sm:w-auto
                  "
                >
                  <FiLinkedin aria-hidden="true" size={17} />
                  Connect on LinkedIn
                  <FiArrowUpRight aria-hidden="true" size={16} />
                </a>
              ) : (
                <a
                  href="#projects"
                  className="
                    inline-flex w-full items-center
                    justify-center gap-3 rounded-xl

                    border border-neutral-200/80
                    bg-white/50 px-7 py-4
                    text-sm font-medium
                    text-neutral-800

                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-white/80

                    dark:border-white/15
                    dark:bg-white/[0.05]
                    dark:text-neutral-200
                    dark:hover:bg-white/10

                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-indigo-500

                    motion-reduce:transform-none

                    sm:w-auto
                  "
                >
                  Explore my work
                  <FiArrowUpRight aria-hidden="true" size={16} />
                </a>
              )}
            </div>

            {/* Direct email */}
            <div
              className="
                mt-14 border-t
                border-neutral-200/70 pt-7

                dark:border-white/10
              "
            >
              <p className="mb-3 text-xs font-medium tracking-[0.12em] text-neutral-500 dark:text-slate-400">
                OR REACH ME DIRECTLY AT
              </p>

              <a
                href={`mailto:${email}`}
                className="
                  inline-block break-all
                  text-sm font-medium

                  text-neutral-700
                  dark:text-slate-300

                  underline decoration-neutral-300
                  underline-offset-4

                  transition-colors duration-200
                  hover:text-indigo-600

                  dark:decoration-slate-600
                  dark:hover:text-indigo-400

                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-indigo-500
                "
              >
                {email}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
