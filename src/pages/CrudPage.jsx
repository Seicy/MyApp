import { useState } from 'react'
import { Plus, Pencil, Trash2, Search } from 'lucide-react'

import Button from '../components/Button.jsx'
import Modal from '../components/Modal.jsx'
import DataTable from '../components/DataTable.jsx'
import { useApp } from '../context/AppContext.jsx'

export default function CrudPage({
  title,
  singular,
  initial,
  fields,
  filter,
}) {
  const { toast } = useApp()

  const [rows, setRows] = useState(initial)
  const [q, setQ] = useState('')
  const [fv, setFv] = useState('')

  const [modal, setModal] = useState(null)
  const [form, setForm] = useState({})
  const [del, setDel] = useState(null)

  const shown = rows.filter(
    (r) =>
      r.name.toLowerCase().includes(q.toLowerCase()) &&
      (!filter || !fv || r[filter.key] === fv)
  )

  const openForm = (r) => {
    setForm(r || {})
    setModal(r ? 'edit' : 'add')
  }

  const save = (e) => {
    e.preventDefault()

    if (
      fields.some(
        (f) => !String(form[f.key] ?? '').trim()
      )
    ) {
      return toast('Semua kolom wajib diisi', 'error')
    }

    if (modal === 'edit') {
      setRows(
        rows.map((r) =>
          r.id === form.id ? form : r
        )
      )
    } else {
      setRows([
        ...rows,
        {
          ...form,
          id: Date.now(),
        },
      ])
    }

    toast(
      modal === 'edit'
        ? `${singular} diperbarui`
        : `${singular} ditambahkan`
    )

    setModal(null)
  }

  const cols = [
    ...fields.map((f) => ({
      key: f.key,
      label: f.label,
      render: f.render,
    })),
    {
      key: 'a',
      label: 'Actions',
      render: (r) => (
        <div className="flex gap-1">
          <button
            aria-label="Edit"
            onClick={() => openForm(r)}
            className="rounded p-1.5 transition hover:bg-slate-100"
          >
            <Pencil className="h-4 w-4" />
          </button>

          <button
            aria-label="Delete"
            onClick={() => setDel(r)}
            className="rounded p-1.5 text-red-600 transition hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-slate-900">
          {title}
        </h1>

        <Button onClick={() => openForm()}>
          <Plus className="h-4 w-4" />
          Add {singular}
        </Button>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="Cari nama..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>

        {filter && (
          <select
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            value={fv}
            onChange={(e) => setFv(e.target.value)}
          >
            <option value="">
              Semua {filter.label}
            </option>

            {[
              ...new Set(
                rows.map((r) => r[filter.key])
              ),
            ].map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        )}
      </div>

      <DataTable
        columns={cols}
        rows={shown}
        emptyText={`Belum ada ${singular.toLowerCase()}. Klik Add ${singular} untuk menambah.`}
      />

      <Modal
        open={!!modal}
        title={`${modal === 'edit' ? 'Edit' : 'Add'} ${singular}`}
        onClose={() => setModal(null)}
      >
        <form onSubmit={save} className="space-y-3">
{fields.map((f) => (
  <div key={f.key}>
    <label className="mb-1 block text-sm font-medium text-slate-700">
      {f.label}
    </label>

    {f.type === 'select' ? (
      <select
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        value={form[f.key] ?? ''}
        onChange={(e) =>
          setForm({
            ...form,
            [f.key]: e.target.value,
          })
        }
      >
        <option value="">Pilih {f.label}</option>

        {f.options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : (
      <input
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        type={f.type || 'text'}
        value={form[f.key] ?? ''}
        onChange={(e) =>
          setForm({
            ...form,
            [f.key]:
              f.type === 'number'
                ? Number(e.target.value)
                : e.target.value,
          })
        }
      />
    )}
  </div>
))}

          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setModal(null)}
            >
              Cancel
            </Button>

            <Button>
              Save
            </Button>
          </div>
        </form>
      </Modal>

      <Modal
        open={!!del}
        title={`Delete ${singular}`}
        onClose={() => setDel(null)}
      >
        <p className="text-sm text-slate-600">
          Yakin ingin menghapus{' '}
          <b>{del?.name || del?.no}</b>?
          Tindakan ini tidak bisa dibatalkan.
        </p>

        <div className="mt-5 flex justify-end gap-2">
          <Button
            variant="secondary"
            onClick={() => setDel(null)}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={() => {
              setRows(
                rows.filter((r) => r.id !== del.id)
              )
              toast(`${singular} dihapus`)
              setDel(null)
            }}
          >
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  )
}