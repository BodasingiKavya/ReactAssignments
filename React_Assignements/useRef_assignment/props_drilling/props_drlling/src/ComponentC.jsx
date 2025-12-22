import ComponentD from "./ComponentD";

function ComponentC({ a, b, c, d, e, f }) {
  return (
    <div>
      <h3>Component 3</h3>
      <h4>This is prop a: {a}</h4>
      <h4>This is prop b: {b}</h4>

      <ComponentD c={c} d={d} e={e} f={f} />
    </div>
  );
}

export default ComponentC;
