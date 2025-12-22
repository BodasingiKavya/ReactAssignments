import ComponentF from "./ComponentF";

function ComponentE({ e, f }) {
  return (
    <div>
      <h3>Component 5</h3>
      <h4>This is prop f: {f}</h4>

      <ComponentF e={e} />
    </div>
  );
}

export default ComponentE;
