"use client";

export default function GeneralRulesPanel({ state, setState }) {
  const s = state.general;
  const update = (k, v) => setState((prev) => ({ ...prev, general: { ...prev.general, [k]: v } }));
  return (
    <div className="space-y-4">
      <ToggleRow
        title="Stop Campaign When Lead Replies"
        subtitle="Auto-pauses any sequence once a reply is detected"
        checked={s.stopOnReply}
        onChange={(v) => update("stopOnReply", v)}
      />
      <ToggleRow
        title="Avoid Duplicate Outreach"
        subtitle="Prevents sending messages to the same lead in multiple campaigns"
        checked={s.avoidDuplicates}
        onChange={(v) => update("avoidDuplicates", v)}
      />
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-gray-900 font-semibold">Auto-archive Old Leads</h4>
            <p className="text-gray-500 text-sm">Archive leads inactive for X days</p>
          </div>
          <input type="checkbox" className="w-5 h-5 text-purple-600" checked={s.autoArchive} onChange={(e)=>update("autoArchive", e.target.checked)} />
        </div>
        <div className="mt-3">
          <label className="text-gray-600 text-sm mr-2">Archive after</label>
          <select value={s.archiveAfter} onChange={(e)=>update("archiveAfter", e.target.value)} className="bg-white text-gray-800 border border-gray-300 rounded-md px-3 py-1.5">
            {["7 days","14 days","30 days","60 days"].map(d=> <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
        <h4 className="text-gray-900 font-semibold">Default Timezone for Scheduling</h4>
        <p className="text-gray-500 text-sm">Set system-wide timezone</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-gray-600 text-sm">Timezones</span>
          <select value={s.timezone} onChange={(e)=>update("timezone", e.target.value)} className="bg-white text-gray-800 border border-gray-300 rounded-md px-3 py-1.5">
            {["GMT +5:30 (India Standard Time)","GMT +0 (UTC)","GMT -5 (EST)","GMT +1 (CET)"].map(t=> <option key={t}>{t}</option>)}
          </select>
        </div>
        <p className="text-gray-500 text-sm mt-2">All campaigns will be scheduled according to: {s.timezone}</p>
      </div>
    </div>
  );
}

function ToggleRow({ title, subtitle, checked, onChange }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex items-center justify-between">
      <div>
        <h4 className="text-gray-900 font-semibold">{title}</h4>
        {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
      </div>
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only" checked={checked} onChange={(e)=>onChange(e.target.checked)} />
        <span className={`w-12 h-6 rounded-full inline-block relative ${checked ? 'bg-purple-600' : 'bg-gray-300'}`}>
          <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : ''}`}></span>
        </span>
      </label>
    </div>
  );
}


