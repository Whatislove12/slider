import React, { useEffect, useReducer } from "react";
import styles from "./Minesweeper.module.scss";
import { mineSweeperReducer } from "../../reducer/mine-sweeper";


export const Minesweeper = () => {

    const [state, dispatch] = useReducer(mineSweeperReducer, {
        check:true,
        color:[],
        bomb:[],
        score:0
    })

    let array = [];
    function getNumbers() {
        for(let i =1; i<=81; i++) array.push(i);
    }
    getNumbers();


    useEffect(()=> {
        dispatch({type:'PLAY-AGAIN'})
    }, []);


     const changeColor = (index) => {
        dispatch({type:'CHANGE-COLOR', payload:index})
    } 


    const reset = () => {
        dispatch({type:'RESET'})
    };
    const playAgain = () => {
        dispatch({type:'PLAY-AGAIN'})
    };



  return (
    <div className={styles.contenedorGeneral}>
      <div className={styles.header}> 
        <h1 className={styles.tituloGeneral}>MineSweeper</h1>
        <div className={styles.headerRightPart}>
            <h2>Score: {state.score}</h2>
            <button onClick={reset}>Reset</button>
        </div>
      </div>
        {
            !state.check ?
            <div className={styles.overlay}>
                <h3>Game over</h3>
                <h4>Score: {state.score}</h4>
                <button onClick={playAgain}>Play again</button>
            </div>
            : ""
        }
      <div className={styles.main}>
      {
        array.map((box, index) => {       
            let boxStyle = state.check ? 
                {backgroundColor: state.color.includes(index) && !state.bomb.includes(index) ? 'blue' : 'white',}
                :
                {backgroundColor: state.bomb.includes(index) ? 'red' : 'blue'}; 


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
