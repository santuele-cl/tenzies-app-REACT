const Die = (props) => {
    const {num, isHeld} = props.die
    return ( 
        <div 
            className={`p-4 rounded shadow-md font-bold text-2xl ${isHeld ? 'bg-green-300' : 'bg-white'}`} 
            onClick={props.toggleIsHeld}>
            {num}
        </div>
    );
}
 
export default Die;