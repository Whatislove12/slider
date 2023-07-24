export const Button = ({ icon, className, isActive, onClick }) => {
  
    let classes = 'text-4xl w-10 h-10 cursor-pointer opacity-80 hover:opacity-100 ' + className;
    return (
    <button onClick={onClick} className={classes}>{icon}</button>
  );
};
