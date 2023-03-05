import { List, Typography, ListItem, IconButton } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import { useTodoContext } from '../context/TodoContext'
import { InputField, TodoAppBox, TodoAppContainer, TodoAppHeading, TodoList, TodoListItemContainer, TodoListItem, TodoListItemText, DeleteIconButton } from '../styles/Todo'
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = () => {

    const value = useTodoContext()
    console.log(value.item)

    const [item, setItem] = useState<string>('')

    const InputEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem(e.target.value)
    }

    const handleClick = () => {
        value.setitem(s => {
            if (item) return [...s, item]
            else return [...s]
        })
        setItem('')
    }

    const handleDelete = (v: number) => {
        value.setitem((o) => {
            return [...o].filter((item, index) => {
                return index !== v
            })
        })
    }

    return (
        <TodoAppContainer>
            <TodoAppHeading>Todo App</TodoAppHeading>
            <TodoAppBox>
                <InputField size='small' onChange={InputEvent} value={item} variant='outlined' label='Add item'>f</InputField>
                <Button onClick={handleClick} variant='contained'>Add</Button>
            </TodoAppBox>
            <TodoList>
                {value.item.length > 0 ? (value.item?.map((item, index) => {
                    return <TodoListItemContainer key={index}>
                        <TodoListItem>
                            <TodoListItemText>{index + 1} - {item.toString()}</TodoListItemText>
                            <DeleteIconButton onClick={() => handleDelete(index)}><DeleteIcon /></DeleteIconButton>
                        </TodoListItem>
                    </TodoListItemContainer>
                })) : <Typography textAlign='center'>List is empty</Typography>}
            </TodoList>
        </TodoAppContainer>
    )
}

export default Todo