import { FaCircle } from "react-icons/fa";

export const ButtonDot = ({ isActive, onClick }) => {
  

    
    let classes = 'cursor-pointer hover:opacity-100';
    if(isActive) 
        classes += ' opacity-100' 
        else classes += ' opacity-30'
    return (
    <button onClick={onClick} className={classes}><FaCircle /></button>
  );
};
