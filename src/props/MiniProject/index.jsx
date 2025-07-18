import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
function ComponentA (){
  return(
    <div className="border-container">
        <h1>Mini project</h1>
        <ComponentB/>
        <ComponentC/>
    </div>
  )
}

export default ComponentA;