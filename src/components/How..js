import Typography from '@mui/material/Typography';
const How = () =>{
    return (
        <div>
            <Typography variant="h4">Basic</Typography>
            <Typography variant="body1">
                So to use this system, you need to first import books that you need in import tab, you won't be able to rent books until you have some books in stock, by default the inventory size is 30, you need have empty space smaller then 30 to import books, you can change the inventory size in the settings tab.
            </Typography>
            <Typography variant="h4">Rent</Typography>
            <Typography variant="body1">
                Choose the book from list that we got from the API, and just rent them to members , oh and be sure to write the member to who you rented , to each rent cost is 500 , you can not rent someone books after they crossed the limit
            </Typography>
            <Typography variant="h4">Return</Typography>
            <Typography variant="body1">
                Write the member and get the book,
                and you can return the book to the inventory,
            </Typography>

        </div>
    );
}
export default How;