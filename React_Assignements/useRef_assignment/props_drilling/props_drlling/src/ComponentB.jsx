import ComponentC from "./ComponentC";

function ComponentB(props) {
  return (
    <div>
      <h3>Component 2</h3>
      <ComponentC a={props.a} b={props.b} c={props.c} d={props.d} e={props.e} f={props.f} />
    </div>
  );
}

export default ComponentB;
