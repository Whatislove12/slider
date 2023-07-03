import { useEffect, useState } from "react";
import styles from "./Minesweeper.module.scss";


export const Minesweeper = () => {

    const [check, setCheck] = useState(true);
    const [color, setColor] = useState([]);
    const [bomb, setBomb] = useState([]);
    const [score, setScore] = useState(0);


    let array = [];
    function getNumbers() {
        for(let i =1; i<=81; i++) array.push(i);
    }
    getNumbers();


    useEffect(()=> {
        getRandom();
    }, []);


    const changeColor = (index) => {
        if(!bomb.includes(index)) {
            setColor([...color, index])
            if(!color.includes(index)){
                setScore(score+1);
            }
        }
        else {
            setCheck(!check)
        }
    }


    const getRandom = () => {
        const min=1;
        const max=81;
        const generateBomb = [];

        do {
            let NumRandom=Math.floor(Math.random()*(max-min)+min);
            if(!generateBomb.includes(NumRandom)) {
                generateBomb.push(NumRandom);
            }
        }
        while(generateBomb.length<9);
        setBomb(generateBomb);
    }


    const reset = () => {
        getRandom();
        setColor([]);
        setScore(0);
    };
    const playAgain = () => {
        getRandom();
        setColor([]);
        setScore(0);
        setCheck(!check);
    };



  return (
    <div className={styles.contenedorGeneral}>
      <div className={styles.header}> 
        <h1 className={styles.tituloGeneral}>MineSweeper 2</h1>
        <div className={styles.headerRightPart}>
            <h2>Score: {score}</h2>
            <button onClick={() => {reset()}}>Reset</button>
        </div>
      </div>
        {
            !check ?
            <div className={styles.overlay}>
                <h1>Game over</h1>
                <h2>Score: {score}</h2>
                <button onClick={() => {playAgain()}}>Play again</button>
            </div>
            : ""
        }
      <div className={styles.main}>
      {
        array.map((box, index) => {       
            let boxStyle = check ? 
                {backgroundColor: color.includes(index) && !bomb.includes(index) ? 'blue' : 'white',}
                :
                {backgroundColor: bomb.includes(index) ? 'red' : 'blue'}; 


            return (
                <div className={styles.box} key={index}
                    style={boxStyle}
                    onClick={() => {changeColor(index)}}
                ></div> 
            )
        })
      }
      </div>
    </div>
  );
};
