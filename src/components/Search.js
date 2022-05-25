import { Input } from "@mui/material";
import { useContext,useState } from "react";
import { DataContext } from "../Datacontext";


const Search =() =>{
    const{books}=useContext(DataContext);
    var searchResult = [];
    const[search,setSearch]=useState("");
    function searchItem(e){
        console.log(e.target.value);
        if(e.target.value==undefined){
            searchResult=[];
        }   
        else if(e.target.value.length==0){
            searchResult=[];
        }
        else{
            searchResult=[];
            books.message.forEach(book => {
                if(book.title.toLowerCase().includes(e.target.value.toLowerCase()) || book.authors.toLowerCase().includes(e.target.value.toLowerCase())){
                    searchResult.push(
                        <tr>
                            <td>{book.title}</td>
                            <td>{book.authors}</td>
                            <td>{book.bookID}</td>
                        </tr>
                    );
                }
            });
        }
        setSearch(searchResult);
    }
    return(<>
        <Input placeholder="Search for a book" onChange={searchItem}></Input>
        {search}
    </>)
}
export default Search;