import { motion } from "framer-motion";
import "../css/SquareGroup.css";
import {useState} from "react"

function Square({ text, y = 0 }) {

    const [move, setMove] = useState(false); 


  return (
    <motion.div
      className="square"
      initial={{ opacity: 0, scale: 0, y, x: move? 10:-10}}
      animate={{ opacity: 1, scale: 1, y, x: move? 10:-10}}
    //   animate={{ rotate: [0, 200, 200, 0], x: [0,200,200,0]}}
      
      transition={{ type: "tween", duration:5 }}
    //  transition={{ repeat:Infinity, duration:1 }}
      onClick = {() => {setMove(!move)}}

    >
      {text}
    </motion.div>
  );
}

function SquareRow() {
  const texts = ["Square 1", "Square 2", "Square 3", "Square 4", "Square 5", "Square 6"];

  return (
    <div className="square-row">
      <Square text={texts[0]} y={-25} />
      <Square text={texts[1]} y={-55} />
      <Square text={texts[2]} y={-25}/>
      <Square text={texts[3]} y={-55} />
      <Square text={texts[4]} y={-25} />
      <Square text={texts[5]} y={-55} />
    </div>
  );
}

function SquareGroup() {
  return <SquareRow />;
}

export default SquareGroup;
