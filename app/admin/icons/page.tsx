import { ICON_MAP, ICON_LABELS } from "@/lib/icons";

export default function IconsPage() {
  const entries = Object.entries(ICON_MAP);

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-gray-900">Icon Library</h1>
        <p className="text-sm text-gray-500 mt-1">
          {entries.length} icons available. Use the icon name (shown below each icon) when editing Services or Industries.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-700 mb-6">
        <strong>How to use:</strong> Go to <strong>Services</strong> or <strong>Industries</strong> and select an icon by its name from the picker. The icon name is shown in the grey label below each icon.
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
        {entries.map(([key, icon]) => (
          <div key={key}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col items-center text-center hover:border-[#FFD700] hover:shadow-md transition-all group cursor-default">
            <div className="mb-2 text-[#0f3570] group-hover:text-[#B8960C] transition-colors w-10 h-10 flex items-center justify-center">
              {icon}
            </div>
            <div className="text-[10px] text-gray-500 font-mono bg-gray-100 px-1.5 py-0.5 rounded">
              {key}
            </div>
            <div className="text-[10px] text-gray-400 mt-1 leading-tight">
              {ICON_LABELS[key]}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gray-50 rounded-xl border border-gray-200 p-5">
        <h2 className="font-bold text-gray-700 text-sm mb-3">Usage by Section</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <div className="font-semibold text-gray-800 mb-1">Services (recommended icons)</div>
            <div className="font-mono text-xs bg-white border border-gray-200 rounded-lg p-3 space-y-1">
              <div>sales — forklift sales</div>
              <div>rental — time-based rental</div>
              <div>service — maintenance/repair</div>
              <div>parts — spare parts supply</div>
              <div>training — operator training</div>
              <div>fleet — fleet management</div>
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-800 mb-1">Industries (recommended icons)</div>
            <div className="font-mono text-xs bg-white border border-gray-200 rounded-lg p-3 space-y-1">
              <div>factory — manufacturing</div>
              <div>warehouse — logistics/3PL</div>
              <div>construction — construction</div>
              <div>snowflake — cold storage</div>
              <div>retail — retail/wholesale</div>
              <div>port — port/shipping</div>
              <div>food — food & beverage</div>
              <div>agriculture — plantation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
