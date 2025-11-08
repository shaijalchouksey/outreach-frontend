"use client";
export default function SendSchedulePanel({ state, setState }) {
  const s = state.schedule;
  const update = (k, v) => setState((prev) => ({ ...prev, schedule: { ...prev.schedule, [k]: v } }));
  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  const toggleDay = (d)=> update("days", { ...s.days, [d]: !s.days[d] });
  return (
    <div className="space-y-4">
      <Card>
        <Row title="Sending Window (per day)" subtitle="Messages will only be sent during these time slots" checked={s.enabled} onToggle={(v)=>update("enabled",v)} />
        <div className="mt-3 grid grid-cols-2 gap-2">
          {days.map((d)=> (
            <label key={d} className="flex items-center gap-2 text-gray-600 text-sm">
              <input type="checkbox" checked={!!s.days[d]} onChange={()=>toggleDay(d)} /> {d}
            </label>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <Select label="Sending Time Range" value={s.from} onChange={(v)=>update("from", v)} options={times} />
          <Select value={s.to} onChange={(v)=>update("to", v)} options={times} />
        </div>
      </Card>

      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Select label="Daily Send Limit" helper="Max messages per day per campaign" value={s.dailyLimit} onChange={(v)=>update("dailyLimit", v)} options={["100","200","300","500"]} />
          <Select label="Pause Between Messages" helper="Delay between consecutive messages" value={s.delay} onChange={(v)=>update("delay", v)} options={["15–45 seconds","30–90 seconds","1–2 minutes"]} />
        </div>
      </Card>

      <Card>
        <div className="text-gray-600 text-sm">Timezone Notice</div>
        <div className="text-gray-500 text-sm">All schedules follow your system-wide timezone.</div>
      </Card>
    </div>
  );
}

function Card({ children }) {
  return <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">{children}</div>;
}
function Row({ title, subtitle, checked, onToggle }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-gray-900 font-semibold">{title}</h4>
        {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}
      </div>
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only" checked={checked} onChange={(e)=>onToggle(e.target.checked)} />
        <span className={`w-12 h-6 rounded-full inline-block relative ${checked ? 'bg-purple-600' : 'bg-gray-300'}`}>
          <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : ''}`}></span>
        </span>
      </label>
    </div>
  );
}
function Select({ label, helper, value, onChange, options }) {
  return (
    <div>
      {label && <div className="text-gray-900 font-semibold">{label}</div>}
      {helper && <div className="text-gray-500 text-sm mb-1">{helper}</div>}
      <select value={value} onChange={(e)=>onChange(e.target.value)} className="bg-white text-gray-800 border border-gray-300 rounded-md px-3 py-1.5">
        {options.map((o)=> <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

const times = ["09:00 AM","10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM","06:00 PM"];


