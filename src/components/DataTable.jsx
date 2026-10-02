import { Inbox } from 'lucide-react'

export default function DataTable({
  columns,
  rows,
  emptyText = 'Belum ada data',
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-slate-200 bg-slate-50 text-slate-600">
          <tr>
            {columns.map((c) => (
              <th
                key={c.key}
                className="whitespace-nowrap px-4 py-3 font-semibold"
              >
                {c.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((r) => (
            <tr
              key={r.id}
              className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
            >
              {columns.map((c) => (
                <td
                  key={c.key}
                  className="whitespace-nowrap px-4 py-3"
                >
                  {c.render ? c.render(r) : r[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {rows.length === 0 && (
        <div className="flex flex-col items-center gap-2 py-12 text-slate-500">
          <Inbox className="h-8 w-8" />
          <p className="text-sm">{emptyText}</p>
        </div>
      )}
    </div>
  )
}