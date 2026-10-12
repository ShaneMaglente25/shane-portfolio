function Hero() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />

          <p className="text-xs font-medium tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
            COMPUTER SCIENCE STUDENT & DEVELOPER
          </p>
        </div>

        <h1 className="max-w-[950px] text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-neutral-900 dark:text-neutral-100 sm:text-6xl md:text-7xl lg:text-8xl">
          Building useful things with{' '}
          <span className="text-indigo-600 dark:text-indigo-400">
            code & curiosity.
          </span>
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-[590px] text-base leading-8 text-neutral-600 dark:text-neutral-400 md:text-lg">
            I'm Shane Danrell Maglente — a developer exploring software
            engineering, full-stack development, and AI/ML through practical
            projects.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
            >
              Explore my work
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-200 px-5 py-3 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900"
            >
              More about me
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-neutral-200 pt-5 dark:border-neutral-800 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium tracking-[0.12em] text-neutral-500 dark:text-neutral-400">
            CURRENTLY EXPLORING
          </p>

          <p className="text-sm text-neutral-700 dark:text-neutral-300">
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