
import OrbitGraphic from './OrbitGraphic'

function Hero() {
  return (
    <section className="relative px-6 pb-24 pt-36 md:px-10 md:pb-28 md:pt-40">
      <div className="mx-auto w-full max-w-[1150px]">

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.8fr)] lg:gap-8">

          {/* Left: Introduction */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400 motion-safe:animate-pulse" />

              <p className="text-xs font-medium tracking-[0.14em] text-neutral-500 dark:text-slate-400">
                COMPUTER SCIENCE STUDENT & DEVELOPER
              </p>
            </div>

            <h1 className="max-w-[760px] text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-neutral-900 dark:text-neutral-100 sm:text-6xl lg:text-[4.5rem]">
              Building useful things with{' '}
              <span className="text-indigo-600 dark:text-indigo-400">
                code & curiosity.
              </span>
            </h1>

            <p className="mt-8 max-w-[590px] text-base leading-8 text-neutral-600 dark:text-slate-400 md:text-lg">
              I'm Shane Danrell Maglente — a developer exploring software
              engineering, full-stack development, and AI/ML through
              practical projects.
            </p>

            {/* Call-to-action buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 motion-reduce:transform-none dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-400"
              >
                Explore my work
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white/50 px-5 py-3 text-sm font-medium text-neutral-800 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 motion-reduce:transform-none dark:border-indigo-400/20 dark:bg-white/5 dark:text-neutral-200 dark:hover:bg-white/10"
              >
                More about me
              </a>
            </div>
          </div>

          {/* Right: Animated developer orbit */}
          <OrbitGraphic />
        </div>

        {/* Currently exploring */}
        <div className="mt-16 flex flex-col gap-3 border-t border-neutral-200/80 pt-6 dark:border-indigo-300/15 sm:flex-row sm:items-center sm:justify-between lg:mt-24">
          <p className="text-xs font-medium tracking-[0.12em] text-neutral-500 dark:text-slate-400">
            CURRENTLY EXPLORING
          </p>

          <p className="text-sm text-neutral-700 dark:text-slate-300">
            Full-Stack Development
            <span className="mx-2 text-indigo-500">·</span>
            AI/ML
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
