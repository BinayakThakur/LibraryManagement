import { Typography } from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../Datacontext";
const History = ()=> {
    const{memberBooks}=useContext(DataContext);
    var history=[];
    if(memberBooks!=undefined){
        memberBooks.forEach(book => {
            var books=book.bookID.split("%")
            var all=books.reduce((acc,curr)=>{
                acc.push(curr+" ");
                return acc;
            },[]);
            history.push(
                <Typography variant="body1">
                <tr>
                    <td>{book.memberID} have the following books with ID </td>
                    <td>{all}</td>
                </tr>
                </Typography>
            );
        });
    }
    return(

        <table>
            <Typography variant="h6">
            <tr>
                <td>Member ID</td>
                <td>Book ID</td>
            </tr>
            </Typography>
            {history}
        </table>
    );
}
export default History;