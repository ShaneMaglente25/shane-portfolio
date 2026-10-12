
import { experiences } from '../data/experience'

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-neutral-200 px-6 py-24 dark:border-neutral-800 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-3 text-xs font-medium tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
            WHERE I'VE CONTRIBUTED
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.045em] text-neutral-900 dark:text-neutral-100 md:text-5xl">
            Experience.
          </h2>

          <p className="mt-5 max-w-[540px] text-sm leading-7 text-neutral-600 dark:text-neutral-400 md:text-base">
            Practical experience developing software, working with data, and
            building tools to solve everyday operational problems.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="relative">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-neutral-200 dark:bg-neutral-800" />

          <div className="space-y-12">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="relative pl-9 md:pl-12"
              >
                {/* Timeline marker */}
                <span className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-[3px] border-indigo-500 bg-neutral-50 dark:bg-neutral-950" />

                <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
                  {/* Role details */}
                  <div>
                    <p className="mb-3 text-xs font-medium tracking-wide text-neutral-500 dark:text-neutral-400">
                      {experience.period}
                    </p>

                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                      {experience.role}
                    </h3>

                    <p className="mt-2 text-sm text-indigo-600 dark:text-indigo-400">
                      {experience.company}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md bg-neutral-100 px-2.5 py-1.5 text-xs text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <p className="mb-4 text-xs font-medium tracking-[0.12em] text-neutral-500 dark:text-neutral-400">
                      CONTRIBUTIONS
                    </p>

                    <p className="mb-5 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                      {experience.description}
                    </p>

                    <ul className="space-y-3">
                      {experience.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex items-start gap-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300"
                        >
                          <span className="mt-0.5 text-indigo-500">↗</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
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
