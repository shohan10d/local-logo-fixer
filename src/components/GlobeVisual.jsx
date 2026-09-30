const markers = [
  { cx: 168, cy: 116 },
  { cx: 238, cy: 154 },
  { cx: 301, cy: 111 },
  { cx: 347, cy: 192 },
  { cx: 210, cy: 236 },
];

function GlobeVisual() {
  return (
    <div className="globe-visual relative mx-auto aspect-square w-full max-w-[34rem]" aria-hidden="true">
      <div className="absolute inset-[7%] rounded-full border border-brand-cyan-light/20" />
      <svg viewBox="0 0 480 480" className="relative h-full w-full" fill="none">
        <defs>
          <clipPath id="globe-clip">
            <circle cx="240" cy="240" r="190" />
          </clipPath>
        </defs>

        <circle cx="240" cy="240" r="190" className="fill-brand-blue-light/15 stroke-brand-cyan-light/50" strokeWidth="2" />
        <g className="globe-grid stroke-brand-cyan-light/25" strokeWidth="1.4">
          <ellipse cx="240" cy="240" rx="190" ry="72" />
          <ellipse cx="240" cy="240" rx="190" ry="132" />
          <ellipse cx="240" cy="240" rx="78" ry="190" />
          <ellipse cx="240" cy="240" rx="142" ry="190" />
          <path d="M50 240h380" />
          <path d="M240 50v380" />
        </g>

        <g clipPath="url(#globe-clip)" className="globe-land fill-brand-green-light/75">
          <path d="M106 141l25-32 49-18 31 9 7 24-20 10-8 28-25 18-4 39-23 8-20-34-29-12-8-25 25-15Z" />
          <path d="M187 235l27 11 17 30-7 42-19 49-17-14-4-43-20-36 8-31 15-8Z" />
          <path d="M252 116l36-22 56 10 14 25 37 14 20 28-13 23-38-5-20 17-31-9-19-33-31-10-20-23 9-15Z" />
          <path d="M281 209l38-5 32 25-3 48-21 53-30 22-18-38-23-26 6-55 19-24Z" />
          <path d="M365 321l30 3 20 23-14 22-34-8-14-23 12-17Z" />
        </g>

        <g>
          {markers.map((marker, index) => (
            <g key={`${marker.cx}-${marker.cy}`}>
              <circle cx={marker.cx} cy={marker.cy} r="8" className="globe-pulse fill-brand-green-light/20" style={{ animationDelay: `${index * 240}ms` }} />
              <circle cx={marker.cx} cy={marker.cy} r="3.5" className="fill-brand-green-light" />
            </g>
          ))}
        </g>

        <path d="M72 325C144 414 337 445 422 309" className="stroke-brand-green-light/60" strokeWidth="2" strokeDasharray="4 10" />
      </svg>
    </div>
  );
}

export default GlobeVisual;