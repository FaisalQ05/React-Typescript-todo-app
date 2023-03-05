import React, { createContext, useContext, useState } from 'react'

type TodoContextPropsType = {
    children: React.ReactNode
}

type list = string[]

interface todoContextType {
    item: list,
    setitem: React.Dispatch<React.SetStateAction<list>>
}

const defaultState = {
    item: [],
    setitem: (v: list) => { }
} as todoContextType

const ToDoContext = createContext(defaultState)

export const useTodoContext = () => useContext(ToDoContext)

const TodoContext = ({ children }: TodoContextPropsType) => {
    const [item, setitem] = useState<list>([])
    const value = {
        item, setitem
    }
    return (
        <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>
    )
}

export default TodoContext