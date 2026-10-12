
import type { Project } from '../data/projects'

type ProjectPreviewProps = {
  project: Project
}

function ProjectPreview({ project }: ProjectPreviewProps) {
  // Prefer a real screenshot whenever one is provided.
  if (project.image) {
    return (
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
        <img
          src={project.image}
          alt={`${project.title} application screenshot`}
          loading="lazy"
          className="aspect-[16/10] w-full object-contain"
        />
      </div>
    )
  }

  const isAttendance = project.preview === 'attendance'

  return (
    <div className="overflow-hidden rounded-xl bg-[#15151d] p-4 text-white sm:p-6">
      {/* Window controls */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>

        <span className="text-[10px] font-medium tracking-widest text-neutral-500">
          {isAttendance ? 'ATTENDANCE' : 'APPOINTMENTS'}
        </span>
      </div>

      {/* Application preview */}
      <div className="rounded-lg border border-white/10 bg-[#1c1c28] p-4 sm:p-5">
        <div className="mb-5 flex items-center justify-between gap-2">
          <div>
            <p className="text-[10px] text-neutral-400">
              {isAttendance ? 'Employee management' : 'Booking management'}
            </p>

            <h4 className="mt-1 text-sm font-semibold sm:text-base">
              {isAttendance
                ? 'Attendance Dashboard'
                : 'Appointment Dashboard'}
            </h4>
          </div>

          <div className="rounded-md bg-indigo-500/15 px-2 py-1 text-[10px] text-indigo-300">
            {isAttendance ? 'RFID Enabled' : 'Scheduling'}
          </div>
        </div>

        {isAttendance ? (
          <div className="space-y-3">
            {/* Attendance summary */}
            <div className="grid grid-cols-3 gap-2">
              {[
                ['Time In', '08:00'],
                ['Lunch Out', '12:00'],
                ['Time Out', '17:00'],
              ].map(([label, time]) => (
                <div
                  key={label}
                  className="rounded-lg bg-white/5 p-3"
                >
                  <p className="text-[9px] text-neutral-400">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-semibold">
                    {time}
                  </p>
                </div>
              ))}
            </div>

            {/* Attendance workflow */}
            <div className="rounded-lg bg-white/5 p-4">
              <p className="mb-3 text-[10px] text-neutral-400">
                RFID Attendance Process
              </p>

              <div className="flex items-center justify-between gap-1 text-center">
                <div className="text-[10px] text-neutral-300">
                  RFID Scan
                </div>

                <span className="text-indigo-400">→</span>

                <div className="text-[10px] text-neutral-300">
                  Classification
                </div>

                <span className="text-indigo-400">→</span>

                <div className="text-[10px] text-neutral-300">
                  Attendance Log
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {/* Appointment summary */}
            <div className="grid grid-cols-3 gap-2">
              {[
                ['Request', '01'],
                ['Review', '02'],
                ['Approval', '03'],
              ].map(([label, number]) => (
                <div
                  key={label}
                  className="rounded-lg bg-white/5 p-3"
                >
                  <p className="text-[9px] text-neutral-400">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-semibold">
                    {number}
                  </p>
                </div>
              ))}
            </div>

            {/* Appointment workflow */}
            <div className="rounded-lg bg-white/5 p-4">
              <p className="mb-3 text-[10px] text-neutral-400">
                Appointment Workflow
              </p>

              <div className="flex items-center justify-between gap-1 text-center">
                <div className="text-[10px] text-neutral-300">
                  Request
                </div>

                <span className="text-indigo-400">→</span>

                <div className="text-[10px] text-neutral-300">
                  Conflict Check
                </div>

                <span className="text-indigo-400">→</span>

                <div className="text-[10px] text-neutral-300">
                  Admin Review
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 text-center text-[10px] tracking-wide text-neutral-500">
        ILLUSTRATIVE PROJECT PREVIEW
      </p>
    </div>
  )
}

export default ProjectPreview
