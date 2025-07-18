function C1() {
  return <h1>Combinded Export C1</h1>;
}

function C2() {
  return <h1>Combinded Export C2</h1>;
}

function MainComponent() {
  return <h1>This is the main component</h1>;
}

// combined default and Named
//NAMED
export { C1, C2 };
export default MainComponent;