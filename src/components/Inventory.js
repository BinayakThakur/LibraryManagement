import { Button, Input } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { DataContext } from "../Datacontext";
import { useSnackbar } from "notistack";

const Inventory = () => {
    const{enqueueSnackbar} = useSnackbar();

    const[order,setOrder]=useState(0);
    function onChange(event) {
        setOrder(event.target.value);
    }
    function onClick(event) {
        if(order==undefined){
            enqueueSnackbar("Enter order",{variant:"error"});
        }
        else if(order.length==0){
            enqueueSnackbar("Enter order",{variant:"error"});
        }
        else{
            const data={
                "bookID": event.target.name,
                "stock": order
            }
            axios.post("https://cors-layer-library.herokuapp.com/lib-back-management.herokuapp.com/importBooks",data)
            .then(res=>{
                console.log(res);
                if(res.data==="success"){
                enqueueSnackbar("Order placed successfully 👻",{variant:"success"});}
                else{
                    enqueueSnackbar("Maximum limit reached 💀 ",{variant:"error"});
                }
            }
            )
            .catch(err=>{
                enqueueSnackbar("Oops!! an error occured",{variant:"error"});
            }
            );
        }
    }
    const{books}=useContext(DataContext);
    var bookList = [];
    if (books !== undefined && books.length !== 0) {
        
        books.message.forEach(book => {
            bookList.push(
            <tr>
                <td>{book.title}</td>
                <td>{book.authors}</td>
                
                <td><Button variant="contained" onClick={onClick} name={book.bookID}>Get🚚</Button></td>
            </tr>
            );
        });}
                
    return (
        <>
        <Input placeholder="How many to import? 🤓" onChange={onChange}></Input>
        <table>
        {bookList}
        </table>
        </>
    );
}
export default Inventory;