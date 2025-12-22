import ComponentB from "./ComponentB";


function ComponentA() {
  const a = "Apple";
  const b = "Ball";
  const c = "Cat";
  const d = "Dog";
  const e = "Elephant";
  const f = "Fish";

  return (
    <div>
      <h3>Component 1</h3>
      <ComponentB a={a} b={b} c={c} d={d} e={e} f={f} />
      
    </div>
  );
}

export default ComponentA;
