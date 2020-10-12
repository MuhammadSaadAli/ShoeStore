import React,{createContext, useState} from 'react';


export const shoeContext = createContext()

export function ShoesCartList (props){

    const [allShoesList , setAllShoes] = useState([ ])

    return(
        <shoeContext.Provider value={[allShoesList,setAllShoes]}>
                {props.children}
        </shoeContext.Provider>
    )
}