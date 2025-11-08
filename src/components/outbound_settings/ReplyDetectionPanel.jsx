"use client";
export default function ReplyDetectionPanel({ state, setState }) {
  const s = state.reply;
  const update = (k, v) => setState((prev) => ({ ...prev, reply: { ...prev.reply, [k]: v } }));
  return (
    <div className="space-y-4">
      <Toggle title="Enable Smart Reply Detection" checked={s.enabled} onChange={(v)=>update("enabled", v)} />
      <Toggle title="Exclude Auto-Replies" checked={s.excludeAuto} onChange={(v)=>update("excludeAuto", v)} />

      <Card>
        <Select label="Positive Reply Action" value={s.positive} onChange={(v)=>update("positive", v)} options={["Pause Campaign / Mark as Interested","Move to CRM","No Action"]} />
      </Card>

      <Card>
        <Select label="Negative Reply Action" value={s.negative} onChange={(v)=>update("negative", v)} options={["Stop Campaign / Mark as not Interested","No Action"]} />
      </Card>

      <Card>
        <Select label="Uncertain Reply Handling" value={s.uncertain} onChange={(v)=>update("uncertain", v)} options={["Flag for Manual Review","Continue Sequence","Auto Pause"]} />
      </Card>

      <Card>
        <Select label="Detection Accuracy Mode" value={s.mode} onChange={(v)=>update("mode", v)} options={["Standard","Strict","Relaxed"]} />
      </Card>

      <Card>
        <div className="text-gray-600 text-sm">Timezone Notice</div>
        <div className="text-gray-500 text-sm">All detection checks follow your system-wide timezone.</div>
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


