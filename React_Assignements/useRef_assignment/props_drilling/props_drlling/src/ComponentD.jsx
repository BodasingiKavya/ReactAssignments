import ComponentE from "./ComponentE";

function ComponentD({ c, d, e, f }) {
  return (
    <div>
      <h3>Component 4</h3>
      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>

      <ComponentE e={e} f={f} />
    </div>
  );
}

export default ComponentD;
