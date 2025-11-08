"use client";
export default function FollowUpsPanel({ state, setState }) {
  const s = state.followups;
  const update = (k, v) => setState((prev) => ({ ...prev, followups: { ...prev.followups, [k]: v } }));
  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  const toggleDay = (d)=> update("days", { ...s.days, [d]: !s.days[d] });

  return (
    <div className="space-y-4">
      <Toggle title="Enable Global Follow-ups" checked={s.enabled} onChange={(v)=>update("enabled", v)} />
      <Toggle title="Stop Follow-ups on Reply" checked={s.stopOnReply} onChange={(v)=>update("stopOnReply", v)} />

      <Card>
        <Select label="Follow-up Timing (after no reply)" value={s.after} onChange={(v)=>update("after", v)} options={["1 day","2 days","3 days","1 week"]} />
      </Card>

      <Card>
        <Select label="Maximum Follow-ups per Lead" value={s.max} onChange={(v)=>update("max", v)} options={["1","2","3","unlimited"]} />
      </Card>

      <Card>
        <div className="text-gray-900 font-semibold">Follow-up Delay (after no reply)</div>
        <div className="text-gray-500 text-sm mb-2">Ensures follow-ups are sent only during working hours</div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {days.map((d)=> (
            <label key={d} className="flex items-center gap-2 text-gray-600 text-sm">
              <input type="checkbox" checked={!!s.days[d]} onChange={()=>toggleDay(d)} /> {d}
            </label>
          ))}
        </div>
      </Card>

      <Card>
        <div className="text-gray-600 text-sm">Timezone Notice</div>
        <div className="text-gray-500 text-sm">All follow-up schedules follow your system-wide timezone.</div>
      </Card>
    </div>
  );
}

function Toggle({ title, checked, onChange }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex items-center justify-between">
      <div className="text-gray-900 font-semibold">{title}</div>
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only" checked={checked} onChange={(e)=>onChange(e.target.checked)} />
        <span className={`w-12 h-6 rounded-full inline-block relative ${checked ? 'bg-purple-600' : 'bg-gray-300'}`}>
          <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : ''}`}></span>
        </span>
      </label>
    </div>
  );
}
function Card({ children }) {
  return <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">{children}</div>;
}
function Select({ label, value, onChange, options }) {
  return (
    <div>
      <div className="text-gray-900 font-semibold mb-1">{label}</div>
      <select value={value} onChange={(e)=>onChange(e.target.value)} className="bg-white text-gray-800 border border-gray-300 rounded-md px-3 py-1.5">
        {options.map((o)=> <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}


