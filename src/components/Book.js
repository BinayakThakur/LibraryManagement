import {  Card, Typography,Button,Grid} from "@mui/material";
import { useSnackbar } from "notistack";
import { useContext ,useState} from "react";
import { DataContext } from "../Datacontext";
import axios from "axios";
import { ConstructionOutlined } from "@mui/icons-material";

const Book = (props) => {
    const{enqueueSnackbar} = useSnackbar();
    const{member}=useContext(DataContext);
    const{stock}=useContext(DataContext);
    var current_stock=0;
   
    if(stock!=undefined){
            stock.forEach(book=>{
                if(book.bookID===props.bookID){
                    current_stock=book.stock;
                }
            }
            );
        }
    const[stocks,setStocks]=useState(current_stock);
    const book={
        id: props.bookID,
        title: props.title,
        authors: props.authors,
        averageRating: props.average_rating,
        isbn: props.isbn,
        isbn13: props.isbn13,
        language_code: props.language_code,
        publication_date: props.publication_date,
        publisher: props.publisher,
        ratings_count: props.ratings_count,
        text_reviews_count: props.text_reviews_count,
        num_pages: props.num_pages,   
         

    }
    function returnBook(){
        const returnData={
            "memberID":member,
            "bookID":book.id,
            "price":100
        }
        axios.post("https://cors-layer-library.herokuapp.com/lib-back-management.herokuapp.com/returnFromMember",returnData)
        .then(res=>{
            console.log(res);
            if(res.data==="success"){
            enqueueSnackbar("Got the book!! 🦌",{variant:"success"});}
            else{
                enqueueSnackbar("Seems like he/she does'nt have the book 🙂",{variant:"error"});
            }
        }
        )
        .catch(err=>{
            enqueueSnackbar("Ouch!! an error occured 🙊",{variant:"error"});
        }
        );
        setStocks(current_stock);

    }
    function rent(){
        const rentData={
            "memberID": member,
            "bookID":book.id,
            "price":100
        }
        if(member==undefined){
        enqueueSnackbar("Enter member name to rent",{variant:"error"});
        }
        else if(member.length==0){
            enqueueSnackbar("Enter member name to rent",{variant:"error"});
        }
        else{
            axios.post("https://cors-layer-library.herokuapp.com/lib-back-management.herokuapp.com/rentToMember",rentData).then(res=>{
                if(res.data==="success"){
                enqueueSnackbar("Book rented successfully 🐎 ",{variant:"success"});}
                else{
                    enqueueSnackbar("Seems like he/she already has this book 🤔",{variant:"error"});
                }
               
            }).catch(err=>{
                enqueueSnackbar("Error in renting book 🐸 ",{variant:"error"});
            })
            
            setStocks(current_stock);
        }
    }
    return (
        <>
        <br/>
        <div className="book-card">
            <Card>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5">
                            {book.title}
                        </Typography>
                        <Typography variant="body1">
                           The book was wrtten by {book.authors}
                        </Typography>
                        <Typography variant="body1">
                           and published by {book.publisher}
                        </Typography>
                        <Typography variant="body1">
                           on  {book.publication_date}
                        </Typography>
                        <Typography variant="body1">
                          in  {book.language_code}
                        </Typography>
                        <Typography variant="body1">
                          and have   {book.num_pages} pages
                        </Typography>
                        <Typography variant="body1">
                          it was given {book.ratings_count} ratings
                        </Typography>
                        <Typography variant="body1">
                         and {book.text_reviews_count} reviews
                        </Typography>
                        <Typography variant="body1">
                           with  {book.averageRating} average rating
                        </Typography>
                        <Typography variant="body1">
                           ID of this book is {book.id}
                        </Typography>
                    </Grid>
                  <Grid item xs={12} sm={6}>
                      <Button variant="contained" color="primary" onClick={rent}>
                            Rent This Book 😍 
                       </Button>
                       <br/>
                        <br/>
                       <Button variant="contained" color="secondary" onClick={returnBook}>
                           Return Book 🐕
                        </Button>
                        <br/>
                        <br/>
                        <Button variant="text" color="success">
                              {stocks} books in stock ,refresh the page to see latest stock
                        </Button>
                   </Grid>
                </Grid>
            </Card>
        </div>
        

        
    
        <br/>
        </>
    )
}
export default Book;