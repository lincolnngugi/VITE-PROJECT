function Buttons() {
  const printDate = () => {
    let date = new Date();
    console.log(date);
  };
  const clicked = (e) => {
    console.log(e);
    console.log("Button Clicked");
  };
  const alertDate = () => {
    let date = new Date();
    console.log(date);
    alert(date);
  };

  return (
    <div>
      <p>
        <button onClick={clicked}>Click Me</button>
      </p>
      <p>
        <button
          onClick={() => {
            printDate();
          }}
        >
          Print Date
        </button>
      </p>
      <p>
        <button onClick={alertDate}>Alert Date</button>
      </p>
    </div>
  );
}

export default Buttons;