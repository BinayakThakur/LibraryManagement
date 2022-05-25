import React, { useContext, useEffect, useState } from "react";
import { Button, Input } from "@mui/material";
import Book from "./Book";
import { DataContext } from "../Datacontext";

const Books = () =>{
   
    var booklist=[]
    const{books}=useContext(DataContext);
    const[library,setLibrary]=useState([]);
    //Axios Post Request
    const{setMember}=useContext(DataContext);
 

    function onChange(e){
        setMember(e.target.value);
    }

    useEffect(()=>{
        if(books!=undefined){
            books.message.forEach(book => {
               booklist.push
                (
                    <Book
                    bookID={book.bookID}
                    title={book.title}
                    authors={book.authors}
                    average_rating={book.average_rating}
                    isbn={book.isbn}
                    isbn13={book.isbn13}
                    language_code={book.language_code}
                    publication_date={book.publication_date}
                    publisher={book.publisher}
                    ratings_count={book.ratings_count}
                    text_reviews_count={book.text_reviews_count}
                    num_pages={book[Object.keys(book)[7]]}
                    />
                );
            });
           
        }
        setLibrary(booklist);
    },[books]);
  

    return(
        <>
        <div className="MemeberName">
        <Input placeholder="Enter member name " onChange={onChange}></Input>
        </div>
        <div className="book-list">

        {library}
        </div> 
        </>
    )


}
export default Books;