// ANGULAR-> LIFE CYCLE HOOK

import { useEffect, useState } from "react";

import chickenimg from "./src../";

function SimpleEffect() {
  // useEffect(function,[dependency])
  // useEffect(function)-> without dependency
  // useEffect(function,[])-> it will run only once
  // useEffect(function,[radius])-> initially when component is mounte and when radius

  const [n, setN] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const [chickens, setChickens] = useState([]);

  const [d, setD] = useState("");

  useEffect(() => {
    let date = new Date();
    // bug memmory leak
    //
    setTimeout(() => {
      setD(date.toISOString());
    }, 100);
  }, []);

  // OK
  useEffect(() => {
    console.log("Useffec has run");
    // setN(somehting)
    // 1 chicken is equal to 5
    let k = n / 5; // n10/5 > 2
    k = Math.floor(k); // 2,4

    let chickenArr = [];
    for (let i = 0; i < k; i++) {
      chickenArr.push(i + 1);
    }
    console.log(chickenArr);
    setChickens(chickenArr);
  }, [n]);

  const getStatus = () => {
    if (showForm === true) {
      return "Hide Form";
    }
    return "Show Form";
  };

  // Whenever state change occurs
  // It triggures a rerender of the component
  // if the useEffect does not have dependency it will rerender

  //   useEffect(() => {
  //     console.log("useEffect has run");
  //   });

  // Using use Effect with empty dependency
  // Empty dependcy useEffect only once Intital render Only

  useEffect(() => {
    console.log("useEffect has run");
  }, []);

  return (
    <div>
      <h1>Simple Effect</h1>
      <div>TS:{d}</div>
      <div>
        <button
          onClick={() => {
            setN(n - 1);
          }}
        >
          -
        </button>
        <span>{n}</span>
        <button
          onClick={() => {
            setN(n + 1);
          }}
        >
          +
        </button>
      </div>

      <div>
        {chickens.map((chicken, index) => {
          return (
            <img
              src={chickenimg}
              key={index}
              style={{
                width: "50px",
                margin: "10px",
              }}
            />
          );
        })}
      </div>

      <button onClick={() => setShowForm(!showForm)}>{getStatus()}</button>
      <MyForm showForm={showForm} />
    </div>
  );
}

function MyForm(props) {
  const { showForm } = props;

  if (showForm === false) {
    return null;
  }

  return (
    <div>
      <UnMountComponent />
    </div>
  );
}

function UnMountComponent() {
  let k = 1;

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log("Mouse position");
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    console.log("Show Form has been Mounted");

    //kill intrval ->
    let inteval = setInterval(() => {
      console.log("K is", k);
      k = k + 1;
    }, 1000);

    //Clean UP Function<Clean up any memory main thread>
    return () => {
      console.log("Component Unmounted");
      clearInterval(inteval);
    };
  }, []);

  return (
    <div>
      <h1>Unmount Component</h1>
      <div>
        <p>X Axios {position.x}</p>
        <p>Y Axios {position.y}</p>
      </div>
    </div>
  );
}

export default SimpleEffect;