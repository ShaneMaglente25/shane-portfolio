
function Contact() {
  // Add your actual LinkedIn profile URL when available.
  const linkedInUrl = ''

  return (
    <section
      id="contact"
      className="border-t border-neutral-200 px-6 py-24 dark:border-neutral-800 md:px-10 md:py-32"
    >
      <div className="mx-auto w-full max-w-[760px] text-center">

        {/* Section label */}
        <p className="mb-6 text-xs font-medium tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
          WHAT'S NEXT?
        </p>

        {/* Main heading */}
        <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.055em] text-neutral-900 dark:text-neutral-100 sm:text-5xl md:text-6xl">
          Let's build something{' '}
          <span className="text-indigo-600 dark:text-indigo-400">
            together.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-[560px] text-base leading-8 text-neutral-600 dark:text-neutral-400 md:text-lg">
          I'm open to opportunities where I can continue learning,
          contribute to meaningful projects, and grow as a software
          developer. Have something in mind? I'd love to hear from you.
        </p>

        {/* Action buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

          {/* Email button */}
          <a
            href="mailto:shanemaglente3@gmail.com"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300 sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect
                width="20"
                height="16"
                x="2"
                y="4"
                rx="2"
              />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>

            Get in touch

            <span aria-hidden="true">↗</span>
          </a>

          {/* LinkedIn or fallback project link */}
          {linkedInUrl ? (
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 px-6 py-3.5 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900 sm:w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>

              Connect on LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 px-6 py-3.5 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900 sm:w-auto"
            >
              Explore my work
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>

        {/* Direct email information */}
        <div className="mt-14 border-t border-neutral-200 pt-7 dark:border-neutral-800">
          <p className="mb-2 text-xs font-medium tracking-[0.12em] text-neutral-500 dark:text-neutral-400">
            OR REACH ME DIRECTLY AT
          </p>

          <a
            href="mailto:shanemaglente3@gmail.com"
            className="inline-block text-sm text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:text-neutral-300 dark:decoration-neutral-700 dark:hover:text-indigo-400"
          >
            shanemaglente3@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
