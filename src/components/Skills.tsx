
import { skillCategories } from '../data/skills'

const categoryIcons: Record<string, string> = {
  Languages: '</>',
  Web: '↗',
  'Libraries & Frameworks': '▧',
  'Tools & Other': '⌘',
}

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-neutral-200 px-6 py-24 dark:border-neutral-800 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-3 text-xs font-medium tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
            CAPABILITIES
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.045em] text-neutral-900 dark:text-neutral-100 md:text-5xl">
            Tools I work with.
          </h2>

          <p className="mt-5 max-w-[540px] text-sm leading-7 text-neutral-600 dark:text-neutral-400 md:text-base">
            Technologies I've used while building projects and developing my
            software engineering skills.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <article
              key={category.title}
              className="group rounded-2xl border border-neutral-200 p-6 transition-colors hover:border-indigo-300 dark:border-neutral-800 dark:hover:border-indigo-800 md:p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-sm text-neutral-400 dark:text-neutral-500">
                  0{index + 1}
                </span>

                <span className="text-xl text-indigo-600 dark:text-indigo-400">
                  {categoryIcons[category.title] ?? '•'}
                </span>
              </div>

              <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-neutral-100 px-3 py-2 text-sm text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Learning note */}
        <div className="mt-8 flex items-start gap-3 rounded-xl bg-neutral-100/70 p-5 dark:bg-neutral-900/60">
          <span className="mt-0.5 text-indigo-600 dark:text-indigo-400">
            ↗
          </span>

          <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
            I'm continuously expanding my toolkit through hands-on projects,
            including modern frontend development with React, TypeScript, and
            Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
