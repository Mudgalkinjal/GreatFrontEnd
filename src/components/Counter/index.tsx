import React, { useState, useEffect } from "react"
import Button from "../UI/Button"

const Counter:React.FC = () =>{

    const [count, setCount] = useState<number>(0);

    useEffect(()=>{
        const storedCount = localStorage.getItem('count');
        console.log('stored count', storedCount)
        if(storedCount){ 
            setCount(Number(storedCount))
        };

    },[]);

    useEffect(()=>{
        localStorage.setItem('count', count.toString());
        console.log('Updated count in local storage: ', count)
    },[count])

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        setCount(prevCount=> prevCount+1);
    }

    return(<Button onClick={handleClick}>Count up {count}</Button>)
}

export default Counter