
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 px-6 py-8 dark:border-neutral-800 md:px-10">
      <div className="mx-auto max-w-[1100px]">

        {/* Top row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
          >
            Shane.
          </a>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#about"
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col gap-3 border-t border-neutral-200 pt-6 dark:border-neutral-800 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            © {currentYear} Shane Danrell Maglente.
            All rights reserved.
          </p>

          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
