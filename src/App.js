import "./App.css";
import { useState } from "react";

const Calculator = () => {
  const [text, setText] = useState("");
  const [oprator, setOparator] = useState("");

  function Calculation() {
    // eslint-disable-next-line default-case
    switch (oprator) {
      case "+":
        sumHandler();
        break;
      case "-":
        Subtraction();
        break;

      case "*":
        Multiplication();
        break;

      case "/":
        Division();
        break;
      case "%":
        percent();
        break;

        case"Sin":
      sine()
      break;

    }
    
  }

  const sumHandler = () => {
    const first = text.split("+")[0];
    const second = text.split("+")[1];

    const sum = parseInt(first) + parseInt(second);
    setText(sum);
  };
  const Subtraction = () => {
    const first = text.split("-")[0];
    const second = text.split("-")[1];

    const sum = parseInt(first) - parseInt(second);
    setText(sum);
  };
  const Multiplication = () => {
    const first = text.split("*")[0];
    const second = text.split("*")[1];

    const sum = parseInt(first) * parseInt(second);
    setText(sum);
  };
  const Division = () => {
    const first = text.split("/")[0];
    const second = text.split("/")[1];

    const sum = parseInt(first) / parseInt(second);
    setText(sum);
  };
  const percent = () => {
    const first = text.split("%")[0];
    const second = text.split("%")[1];
    const sum = first >= 0 && second > 0;
    if (!sum) {
      return;
    }

    setText((parseFloat(first) * parseFloat(second)) / 100);
    return sum;
  };

  const sine=()=>{
    const first = text[0];
      

    const sum=((Math.sin(first)*text));
    setText(sum);

  }






  function Delete() {
    setText(text.slice(0, -1));
  }
  function clear() {
    setText("");
    setOparator("");
  }

  return (
    <div className="Container">
      <div className="Calculator">
        <div className="screen">{text} </div>
        <button className="code" value="AC" onClick={() => clear()}>
          AC
        </button>
        <button
          className="button"
          value="%"
          onClick={(e) => {
            setOparator("%");
            setText(text + e.target.value);
          }}
        >
          %
        </button>
        <button className="Del" value="DEL" onClick={() => Delete()}>
          DEL
        </button>
        <button
          className="button"
          value="/"
          onClick={(e) => {
            setOparator("/");
            setText(text + e.target.value);
          }}
        >
          /
        </button>
        <button
          className="button"
          value="7"
          onClick={(e) => setText(text + e.target.value)}
        >
          7
        </button>
        <button
          className="button"
          value="8"
          onClick={(e) => setText(text + e.target.value)}
        >
          8
        </button>
        <button
          className="button"
          value="9"
          onClick={(e) => setText(text + e.target.value)}
        >
          9
        </button>
        <button
          className="button"
          value="*"
          onClick={(e) => {
            setOparator("*");
            setText(text + e.target.value);
          }}
        >
          *
        </button>
        <button
          className="button"
          value="4"
          onClick={(e) => setText(text + e.target.value)}
        >
          4
        </button>
        <button
          className="button"
          value="5"
          onClick={(e) => setText(text + e.target.value)}
        >
          5
        </button>
        <button
          className="button"
          value="6"
          onClick={(e) => setText(text + e.target.value)}
        >
          6
        </button>
        <button
          className="button"
          value="+"
          onClick={(e) => {
            setOparator("+");
            setText(text + e.target.value);
          }}
        >
          +
        </button>
        <button
          className="button"
          value="1"
          onClick={(e) => setText(text + e.target.value)}
        >
          1
        </button>
        <button
          className="button"
          value="2"
          onClick={(e) => setText(text + e.target.value)}
        >
          2
        </button>
        <button
          className="button"
          value="3"
          onClick={(e) => setText(text + e.target.value)}
        >
          3
        </button>
        <button
          className="button"
          value="-"
          onClick={(e) => {
            setOparator("-");
            setText(text + e.target.value);
          }}
        >
          -
        </button>
        <button
          className="button"
          value="0"
          onClick={(e) => setText(text + e.target.value)}
        >
          0
        </button>
        <button
          className="button"
          value="."
          onClick={(e) => setText(text + e.target.value)}
        >
          .
        </button>
        <button className="equal" value="=" onClick={Calculation}>
          =
        </button>
        {/* <button
          className="button"
          value="sin( "
          onClick={(e) => {
            setOparator("sin");
            setText(text + e.target.value);
          }}
        >
          sin
        </button> */}
        
      </div>
    </div>
  );
};

export default Calculator;
