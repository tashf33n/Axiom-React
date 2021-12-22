
import { useState } from 'react'

const Count = () => {
    const [name, setName] = useState('')
    const [wordsCount, setWordsCount] = useState(0)
    const [obj, setObj] = useState({})
    

    const updateName = (e) => {
        let value = e?.target?.value
        setName(value)

        let inputName = value
        let isSpace = 0
        for(var i = 0; i < inputName?.length; i++) {
            if (inputName[i] === ' '){
                isSpace++
            }
        }
        
        

        
        
        

        
    }
    return(
        <div>
            <h1>{name}</h1>
            <input placeholder='Enter your Name Here!' onChange={updateName}/>
            <p>Character Count: {name?.length}</p>
            <p>Words Count: {wordsCount}</p>
        
        </div>
    )
}

export default Count;