
import type { IconType } from 'react-icons'

import {
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiGit,
  SiReact,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si'

import { FaJava, FaCss3Alt } from 'react-icons/fa'

import {
  FiCode,
  FiDatabase,
  FiMonitor,
  FiLayout,
  FiRadio,
  FiFileText,
  FiArrowUpRight,
} from 'react-icons/fi'

import { skillCategories } from '../data/skills'

// Each skill is assigned an icon and an accent color.
type SkillVisual = {
  Icon: IconType
  color: string
}

const skillVisuals: Record<string, SkillVisual> = {
  Python: {
    Icon: SiPython,
    color: 'text-[#3776AB] dark:text-[#75B7E8]',
  },
  Java: {
    Icon: FaJava,
    color: 'text-[#E76F00] dark:text-[#FF9B54]',
  },
  'C++': {
    Icon: SiCplusplus,
    color: 'text-[#00599C] dark:text-[#60A5FA]',
  },
  SQL: {
    Icon: FiDatabase,
    color: 'text-violet-600 dark:text-violet-400',
  },
  HTML: {
    Icon: SiHtml5,
    color: 'text-[#E34F26] dark:text-[#FF8A65]',
  },
  CSS: {
    Icon: FaCss3Alt,
    color: 'text-[#1572B6] dark:text-[#60A5FA]',
  },
  Tkinter: {
    Icon: FiMonitor,
    color: 'text-indigo-600 dark:text-indigo-400',
  },
  CustomTkinter: {
    Icon: FiLayout,
    color: 'text-indigo-600 dark:text-indigo-400',
  },
  Git: {
    Icon: SiGit,
    color: 'text-[#F05032] dark:text-[#FF8068]',
  },
  RFID: {
    Icon: FiRadio,
    color: 'text-cyan-600 dark:text-cyan-400',
  },
  'Excel Reporting': {
    Icon: FiFileText,
    color: 'text-emerald-600 dark:text-emerald-400',
  },
}

// Technologies currently being explored.
const exploring = [
  {
    name: 'React',
    Icon: SiReact,
    color: 'text-[#149ECA] dark:text-[#61DAFB]',
  },
  {
    name: 'TypeScript',
    Icon: SiTypescript,
    color: 'text-[#3178C6] dark:text-[#60A5FA]',
  },
  {
    name: 'Tailwind CSS',
    Icon: SiTailwindcss,
    color: 'text-[#06B6D4] dark:text-[#67E8F9]',
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden border-t border-neutral-200/60 px-6 py-24 dark:border-indigo-300/10 md:px-10 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-[1100px]">

        {/* Section heading */}
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-medium tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
              MY TECH STACK
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.045em] text-neutral-900 dark:text-neutral-100 md:text-5xl">
              Tools I work with<span className="text-indigo-600 dark:text-indigo-400">.</span>
            </h2>
          </div>

          <p className="max-w-[330px] text-sm leading-7 text-neutral-600 dark:text-slate-400">
            Languages, technologies, and tools I've used to turn
            ideas into working applications.
          </p>
        </div>

        {/* Category panels */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="
                group/category relative overflow-hidden
                rounded-2xl border border-white/70
                bg-white/55 p-6 backdrop-blur-lg

                transition-all duration-300
                hover:-translate-y-1
                hover:border-indigo-300/70
                hover:shadow-xl
                hover:shadow-indigo-500/5

                dark:border-white/10
                dark:bg-[#111a30]/55
                dark:hover:border-indigo-400/30
                dark:hover:shadow-indigo-950/20

                motion-reduce:transform-none
                sm:p-7
              "
            >
              {/* Subtle background glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  -right-16 -top-16
                  h-44 w-44 rounded-full
                  bg-indigo-300/0 blur-3xl
                  transition-colors duration-500

                  group-hover/category:bg-indigo-300/15

                  dark:group-hover/category:bg-indigo-500/10
                "
              />

              {/* Category heading */}
              <div className="relative mb-7 flex items-center justify-between">
                <div>
                  <p className="mb-2 font-mono text-xs text-indigo-600 dark:text-indigo-400">
                    0{index + 1} / CATEGORY
                  </p>

                  <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                    {category.title}
                  </h3>
                </div>

                <FiArrowUpRight
                  aria-hidden="true"
                  className="
                    text-xl text-neutral-400
                    transition-transform duration-300
                    group-hover/category:-translate-y-1
                    group-hover/category:translate-x-1
                    group-hover/category:text-indigo-500

                    dark:text-slate-500
                    dark:group-hover/category:text-indigo-400

                    motion-reduce:transform-none
                  "
                />
              </div>

              {/* Individual skill tiles */}
              <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.skills.map((skill) => {
                  const visual = skillVisuals[skill]
                  const Icon = visual?.Icon ?? FiCode

                  return (
                    <div
                      key={skill}
                      className="
                        group/skill flex min-h-[116px]
                        flex-col items-center justify-center
                        gap-3 rounded-xl

                        border border-neutral-200/70
                        bg-white/60 px-2 py-4

                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-indigo-300
                        hover:bg-indigo-50/80
                        hover:shadow-lg
                        hover:shadow-indigo-500/5

                        dark:border-white/10
                        dark:bg-white/[0.04]
                        dark:hover:border-indigo-400/30
                        dark:hover:bg-indigo-400/[0.08]

                        motion-reduce:transform-none
                      "
                    >
                      {/* Technology icon */}
                      <div
                        className="
                          flex h-11 w-11 items-center
                          justify-center rounded-xl
                          bg-neutral-100/80

                          transition-transform duration-300
                          group-hover/skill:-translate-y-1
                          group-hover/skill:scale-110
                          group-hover/skill:-rotate-6

                          dark:bg-white/[0.06]

                          motion-reduce:transform-none
                        "
                      >
                        <Icon
                          aria-hidden="true"
                          size={27}
                          className={
                            visual?.color ??
                            'text-indigo-600 dark:text-indigo-400'
                          }
                        />
                      </div>

                      {/* Skill name */}
                      <span className="text-center text-xs font-medium text-neutral-700 dark:text-slate-300 sm:text-sm">
                        {skill}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Currently exploring */}
        <div
          className="
            relative mt-6 overflow-hidden
            rounded-2xl border border-indigo-200/60
            bg-indigo-50/50 p-6

            backdrop-blur-lg

            dark:border-indigo-400/15
            dark:bg-indigo-400/[0.06]

            sm:p-8
          "
        >
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-[420px]">
              <div className="mb-3 flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-emerald-500 motion-safe:animate-pulse"
                />

                <p className="text-xs font-medium tracking-[0.12em] text-indigo-600 dark:text-indigo-400">
                  CURRENTLY EXPLORING
                </p>
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Always learning. Always building.
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-slate-400">
                Expanding my skills in modern frontend
                development through hands-on projects,
                including this portfolio.
              </p>
            </div>

            {/* Learning stack */}
            <div className="flex flex-wrap gap-3">
              {exploring.map(({ name, Icon, color }) => (
                <div
                  key={name}
                  className="
                    group flex items-center gap-3
                    rounded-xl border border-white/80
                    bg-white/70 px-4 py-3

                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-md

                    dark:border-white/10
                    dark:bg-white/[0.05]

                    motion-reduce:transform-none
                  "
                >
                  <Icon
                    aria-hidden="true"
                    size={22}
                    className={`
                      ${color}
                      transition-transform duration-300
                      group-hover:rotate-12
                      group-hover:scale-110
                      motion-reduce:transform-none
                    `}
                  />

                  <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
