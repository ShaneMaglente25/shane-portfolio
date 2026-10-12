
import { projects } from '../data/projects'
import ProjectPreview from './ProjectPreview'

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-neutral-200 px-6 py-24 dark:border-neutral-800 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1100px]">

        {/* Section heading */}
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-medium tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
              SELECTED WORK
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.045em] text-neutral-900 dark:text-neutral-100 md:text-5xl">
              Projects I've built.
            </h2>
          </div>

          <p className="max-w-[360px] text-sm leading-7 text-neutral-600 dark:text-neutral-400">
            A selection of applications I've developed to explore
            software engineering and solve practical problems.
          </p>
        </div>

        {/* Project case studies */}
        <div className="space-y-12 md:space-y-20">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12"
            >
              {/* Visual preview */}
              <div
                className={`${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <ProjectPreview project={project} />
              </div>

              {/* Case-study information */}
              <div className="flex h-full flex-col justify-center">
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="h-px w-6 bg-neutral-300 dark:bg-neutral-700" />

                  <span className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>

                <div className="mt-7 space-y-5 border-t border-neutral-200 pt-6 dark:border-neutral-800">
                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-900 dark:text-neutral-200">
                      The challenge
                    </h4>

                    <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-900 dark:text-neutral-200">
                      What I built
                    </h4>

                    <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-neutral-200 px-3 py-1.5 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Role */}
                <p className="mt-6 text-xs text-neutral-500 dark:text-neutral-400">
                  Role:{' '}
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    {project.role}
                  </span>
                </p>

                {/* Only display links if they exist */}
                {(project.githubUrl || project.demoUrl) && (
                  <div className="mt-6 flex flex-wrap gap-5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-indigo-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:text-indigo-400"
                      >
                        View source code ↗
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-indigo-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:text-indigo-400"
                      >
                        View project ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
