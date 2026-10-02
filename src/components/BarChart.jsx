export default function BarChart({ data, labels, height = 140 }) {
  const max = Math.max(...data)

  return (
    <div
      className="flex items-end gap-2"
      style={{ height }}
    >
      {data.map((v, i) => {
        const barHeight = Math.max(
          (v / max) * (height - 25),
          8
        )

        return (
          <div
            key={i}
            className="flex flex-1 flex-col items-center gap-1"
          >
            <div className="flex w-full flex-1 items-end">
              <div
                className="w-full rounded-t-md bg-blue-500 transition-all duration-300 hover:bg-blue-700"
                style={{ height: `${barHeight}px` }}
                title={String(v)}
              />
            </div>

            {labels && (
              <span className="text-[10px] font-medium text-slate-400">
                {labels[i]}
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}