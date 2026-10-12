
function About() {
  return (
    <section
      id="about"
      className="border-t border-neutral-200 px-6 py-24 dark:border-neutral-800 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          {/* Left column */}
          <div>
            <p className="mb-3 text-xs font-medium tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
              A LITTLE ABOUT ME
            </p>

            <h2 className="max-w-[400px] text-4xl font-semibold leading-tight tracking-[-0.045em] text-neutral-900 dark:text-neutral-100 md:text-5xl">
              Curious by nature.
              <span className="text-neutral-400 dark:text-neutral-600">
                {' '}Building through practice.
              </span>
            </h2>
          </div>

          {/* Right column */}
          <div>
            <p className="text-lg leading-8 text-neutral-700 dark:text-neutral-300">
              I'm a Computer Science student who enjoys exploring technology
              and turning ideas into practical software. I learn best by
              building things, experimenting with different approaches, and
              solving problems along the way.
            </p>

            <p className="mt-5 text-base leading-8 text-neutral-600 dark:text-neutral-400">
              Through my academic and internship projects, I've gained
              hands-on experience developing desktop applications, working
              with databases, and automating everyday processes. I'm now
              expanding my skills in modern web development while exploring
              the possibilities of AI and machine learning.
            </p>

            <p className="mt-5 text-base leading-8 text-neutral-600 dark:text-neutral-400">
              My goal is to become a software engineer who builds useful,
              reliable, and thoughtfully designed applications. I'm always
              looking for opportunities to learn, improve, and take on new
              challenges.
            </p>

            {/* Background details */}
            <div className="mt-10 grid gap-4 border-t border-neutral-200 pt-6 dark:border-neutral-800 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-xs tracking-wide text-neutral-500 dark:text-neutral-400">
                  EDUCATION
                </p>

                <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  BS Computer Science
                </p>

                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  CVSU – CCAT · Expected 2027
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs tracking-wide text-neutral-500 dark:text-neutral-400">
                  ACADEMIC ACHIEVEMENT
                </p>

                <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  Consistent President's Lister
                </p>

                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  Committed to continuous learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
