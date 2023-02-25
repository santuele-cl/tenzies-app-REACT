import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import Die from './Die.jsx'

const Dice = () => {
    const [diceArray, setDiceArray] = useState(allNewDice());
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        const isAllHeld = diceArray.every(die => die.isHeld)
        const isAllTheSameValue = diceArray.every(die => die.num === diceArray[0].num)

        if( isAllHeld ) {
            if(isAllTheSameValue) {
                setIsGameOver(true)
            } 
        } 
    }, [diceArray])

    // Custom func to generate single random die
    function generateRandNum() {
      return Math.floor(Math.random() * 6 ) + 1
    }

    function generateNewDie() {
        return { 
            id: nanoid(),
            num: generateRandNum(),
            isHeld: false
        }
    }
  
    // Generate array with 10 containing 10 random dice
    function allNewDice() {
      const diceArray = []
      for( let i = 0; i < 10; i++) {
        diceArray.push(generateNewDie())
      }
      return diceArray
    }

    function rerollDice() {
        if(!isGameOver) {
            setDiceArray( prevDiceArray => {
                return prevDiceArray.map( (die) => {
                    return die.isHeld ? die : generateNewDie()
                })
            })
        } else {
            setIsGameOver(false)
            setDiceArray(allNewDice())
        }
        
    }

    function toggleIsHeld(id) {
        if(!isGameOver) {
            setDiceArray(prevDiceArray => {
                const newDiceArray = prevDiceArray.map(die => {
                    return die.id === id ? {...die, isHeld: !die.isHeld} : die
                })
                return newDiceArray
            })
        }
    }

    const diceElements = diceArray.map( die => {
        return (
            <Die key={die.id} die={die} toggleIsHeld={() => toggleIsHeld(die.id)}/>
        )
    })

    return ( 
        <div>
            {isGameOver && 
                <div>
                    <Confetti />

                    <div className="absolute top-8 mx-auto max-w-lg w-11/12 py-4 px-8 bg-gray-500 text-green-200 text-2xl rounded-lg">
                        <div className="flex justify-center">
                            <p>Congratulations! You won the game!</p>
                        </div>
                    </div>
                </div>
            }
            
            <div className="grid grid-cols-5 gap-8 my-8">
                {diceElements}
            </div>
            <button 
                className="text-lg bg-blue-500 text-gray-50 py-2 px-6 font-bold tracking-wide rounded-md" 
                onClick={rerollDice}>
                    { isGameOver ? "New game" : "Roll dice"}
            </button>
        </div>

    );
}
    
export default Dice;
