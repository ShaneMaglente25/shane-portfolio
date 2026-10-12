
function OrbitGraphic() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-[min(78vw,340px)] shrink-0 sm:w-[360px]"
    >
      {/* Soft glow behind the orbit */}
      <div className="absolute inset-[10%] rounded-full bg-indigo-300/20 blur-3xl dark:bg-indigo-500/15" />

      {/* Outer orbit line */}
      <div className="absolute inset-[6%] rounded-full border border-indigo-300/60 dark:border-indigo-400/25" />

      {/* Inner orbit line */}
      <div className="absolute inset-[20%] rounded-full border border-dashed border-slate-300/70 dark:border-indigo-300/25" />

      {/* Orbiting Python symbol */}
      <div className="orbit-spin absolute inset-[6%]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="orbit-counter flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-200 bg-white font-mono text-sm font-semibold text-indigo-600 shadow-lg shadow-indigo-500/10 dark:border-indigo-500/40 dark:bg-[#171d35] dark:text-indigo-300">
            PY
          </div>
        </div>
      </div>

      {/* Orbiting code symbol */}
      <div className="orbit-spin-slow absolute inset-[20%]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="orbit-counter-slow flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-200 bg-white font-mono text-sm font-semibold text-indigo-600 shadow-lg shadow-indigo-500/10 dark:border-indigo-500/40 dark:bg-[#171d35] dark:text-indigo-300">
            {'{}'}
          </div>
        </div>
      </div>

      {/* Orbiting database symbol */}
      <div className="orbit-spin-alt absolute inset-[6%]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="orbit-counter-alt flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-200 bg-white font-mono text-sm font-semibold text-indigo-600 shadow-lg shadow-indigo-500/10 dark:border-indigo-500/40 dark:bg-[#171d35] dark:text-indigo-300">
            DB
          </div>
        </div>
      </div>

      {/* Central developer terminal */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="float-slow w-[176px] rounded-2xl border border-indigo-200/80 bg-white/90 p-4 shadow-2xl shadow-indigo-500/10 backdrop-blur-md dark:border-indigo-400/25 dark:bg-[#11182b]/90 dark:shadow-indigo-950/40">

          {/* Terminal controls */}
          <div className="mb-4 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="ml-auto font-mono text-[9px] text-neutral-400 dark:text-slate-500">
              shane.ts
            </span>
          </div>

          {/* Terminal text */}
          <div className="space-y-1.5 font-mono text-[11px]">
            <p className="text-neutral-500 dark:text-slate-400">
              <span className="text-indigo-600 dark:text-indigo-400">
                const
              </span>{' '}
              curiosity =
            </p>

            <p className="pl-3 text-emerald-600 dark:text-emerald-400">
              true;
            </p>

            <p className="pt-2 text-neutral-500 dark:text-slate-400">
              build();
            </p>

            <p className="text-neutral-500 dark:text-slate-400">
              learn();
            </p>

            <p className="text-neutral-500 dark:text-slate-400">
              repeat();
              <span className="cursor-blink ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-indigo-500" />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrbitGraphic
