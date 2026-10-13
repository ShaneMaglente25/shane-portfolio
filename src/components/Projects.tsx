
import { projects } from '../data/projects'
import ProjectPreview from './ProjectPreview'
import TiltCard from './TiltCard'

function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 border-t border-neutral-200/60 px-6 py-24 dark:border-indigo-300/10 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1100px]">

        {/* Section heading */}
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-medium tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
              SELECTED WORK
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.045em] text-neutral-900 dark:text-neutral-100 md:text-5xl">
              Projects I've built
              <span className="text-indigo-600 dark:text-indigo-400">
                .
              </span>
            </h2>
          </div>

          <p className="max-w-[360px] text-sm leading-7 text-neutral-600 dark:text-slate-400">
            A selection of applications I've developed to
            explore software engineering and solve practical
            problems.
          </p>
        </div>

        {/* Project case studies */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
            >
              {/* Interactive project visual */}
              <div
                className={
                  index % 2 === 1
                    ? 'lg:order-2'
                    : ''
                }
              >
                <TiltCard>
                  <ProjectPreview project={project} />
                </TiltCard>
              </div>

              {/* Project information */}
              <div className="flex flex-col justify-center">

                {/* Project number and type */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="h-px w-6 bg-neutral-300 dark:bg-neutral-700" />

                  <span className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-slate-400">
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-slate-400">
                  {project.description}
                </p>

                {/* Case study details */}
                <div className="mt-7 space-y-5 border-t border-neutral-200/70 pt-6 dark:border-white/10">
                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-900 dark:text-neutral-200">
                      The challenge
                    </h4>

                    <p className="text-sm leading-7 text-neutral-600 dark:text-slate-400">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-900 dark:text-neutral-200">
                      What I built
                    </h4>

                    <p className="text-sm leading-7 text-neutral-600 dark:text-slate-400">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-lg border border-neutral-200/70
                        bg-white/40 px-3 py-1.5 text-xs
                        text-neutral-600 backdrop-blur-sm

                        transition-colors duration-200
                        hover:border-indigo-300
                        hover:text-indigo-600

                        dark:border-white/10
                        dark:bg-white/[0.04]
                        dark:text-slate-300
                        dark:hover:border-indigo-400/40
                        dark:hover:text-indigo-300
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project role */}
                <p className="mt-6 text-xs text-neutral-500 dark:text-slate-400">
                  Role:{' '}
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    {project.role}
                  </span>
                </p>

                {/* Optional project links */}
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
