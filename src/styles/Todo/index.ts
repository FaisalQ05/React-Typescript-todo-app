import { styled, Box, TextField, Typography, List, IconButton } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export const TodoAppContainer = styled(Box)(({ theme }) => ({
    // border: '2px solid red',
    width: 'clamp(200px,90%,1100px)',
    margin: '0 auto',
    minHeight: '100vh'
}))

export const InputField = styled(TextField)(({ theme }) => ({
    // border: '2px solid green'
}))

export const TodoAppHeading = styled(Typography)(({ theme }) => ({
    // border: '2px solid black',
    textAlign: 'center',
    fontSize: 'clamp(2rem,3vw + 0.4rem,4rem)'
}))

export const TodoAppBox = styled(Box)(({ theme }) => ({
    // border:'2px solid red',
    display: 'flex',
    alignItems: 'center',
    width: '50%',
    margin: '0 auto',
    justifyContent: 'center',
    marginTop: '2%',
    gap:10,
    [theme.breakpoints.down('lg')]:{
        width:'65%',
    },
    [theme.breakpoints.down('md')]:{
        width:'95%'
    },
}))

export const TodoListItemContainer = styled(Box)(({ theme }) => ({
}))

export const TodoList = styled(List)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginTop:'2%'
}))

export const TodoListItem = styled(Box)(({ theme }) => ({
    // border: '2px solid grey',
    display: 'flex',
    backgroundColor: blue[200],
    borderRadius: '2%',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
    margin: '0 auto',
    padding:'0 1em',
    [theme.breakpoints.down('lg')]:{
        width:'60%'
    },
    [theme.breakpoints.down('md')]:{
        width:'80%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'100%'
    },
}))

export const TodoListItemText = styled(Typography)(({ theme }) => ({
    // border: '2px solid grey',
}))

export const DeleteIconButton = styled(IconButton)(({ theme }) => ({
    color:red[400]
}))