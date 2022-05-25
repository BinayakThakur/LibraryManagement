import { createContext,    useEffect,    useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = props =>{

    const[books,setBooks]=useState();
    const[member,setMember]=useState();
    const[stock,setStock]=useState();
    const[memberBooks,setMemberBooks]=useState();
    useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'https://cors-layer-library.herokuapp.com/frappe.io/api/method/frappe-library',
            headers: {
                'Content-Type': 'application/json',
            }
        };
        axios(options)
        .then(function (response) {
        
            setBooks(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

        if(books!==undefined && books.length!=0){
            books.message.forEach(book => {
                console.log(book.title);
            });
        }
        const options1 = {
            method: 'GET',
            url: 'https://cors-layer-library.herokuapp.com/lib-back-management.herokuapp.com/getStocks'
        };
        axios(options1)
        .then(function (response) {setStock(response.data);})
        .catch(function (error) {
            console.log(error);
        }
        );
       
        const options2 = {
            method: 'GET',
            url: 'https://cors-layer-library.herokuapp.com/lib-back-management.herokuapp.com/getBooks'
        };
        axios(options2)
        .then(function (response) {setMemberBooks(response.data);})
        .catch(function (error) {
            console.log(error);
        }
        );


    },[]);
    
    
    return (
        <DataContext.Provider value={{
            books,setBooks,member,setMember,stock,memberBooks}}>
            {props.children}
        </DataContext.Provider>
    )
}