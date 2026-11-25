import "./top-blur.css";

/** Progressive blur strip pinned behind the nav (Figma "Container" 1512×100, six masked backdrop blurs). */
const LAYERS = [
  { blur: 0.313, mask: "a3d85" },
  { blur: 0.625, mask: "010c0" },
  { blur: 1.25, mask: "a6eb8" },
  { blur: 2.5, mask: "cd9ce" },
  { blur: 5, mask: "99cf1" },
  { blur: 10, mask: "1856c" },
];

export default function TopBlur() {
  return (
    <div className="top-blur" aria-hidden="true">
      {LAYERS.map((l) => (
        <div
          key={l.mask}
          className="top-blur__layer"
          style={
            {
              "--blur": `${l.blur}px`,
              "--mask": `url(/assets/shared/blur-${l.mask}.svg)`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
