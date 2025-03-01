let UserIdAutoIncrement = 3000;
let BookAutoIncrement = 1000;
let BorrowAutoIncrement = 2000;

export class UserDetails
{
    UserId: string;
    UserName: string;
    Gender: string;
    Department:string;
    MobileNumber: string;
    Password: string;

    Email: string;
    WalletBalance: number = 0;

    constructor(name: string, email: string,password:string,department:string,gender:string,PhoneNumber: string) {

        this.UserId = "SF" + UserIdAutoIncrement++;
        this.UserName = name;
        this.Email = email;
        this.Password=password;
        this.Department=department;
        this.MobileNumber = PhoneNumber;
        this.Gender=gender;
    }
    WalletRecharge(amount:number){
        this.WalletBalance+=amount;
    }
    DeductBalance(amount:number){
        this.WalletBalance-=amount;
    }
} 
// enum Department {
//     eee = 'EEE',
//     cse = 'CSE',
//     ece='ECE',
// }
export class BookDetails{
    BookID:string;
    BookName:string;
    AuthorName:string;
    Availability:string;
    constructor (bookName:string,authorName:string,availability:string)
    {
        this.BookID="BID"+BookAutoIncrement++;
        this.BookName=bookName;
        this.AuthorName=authorName;
        this.Availability=availability;
    }
}
// enum Availability{
//     unknown="Unknown",
//     available="Available",
//     issued="Issued",
//     damaged="Damaged"
// }
export class BorrowDetails{
    BorrowID:string;
    BookID:string;
    UserID:string;
    BorrowDate:Date;
    BookingStatus:string;
    PaidFineAmount:number;
    constructor (bookID:string,userID:string,borrowdate:Date,bookingStatus:string,fine:number)
    {
        this.BorrowID="LB"+BookAutoIncrement++;

        this.BookID=bookID;
        this.UserID=userID;
        this.BorrowDate=borrowdate;
        this.BookingStatus=bookingStatus;
        this.PaidFineAmount=fine;

    }
}
// enum Status{
//     default="Default",
//     borrowed="Borrowed",
//     returned="Returned",
// }
export let UserArrayList: Array<UserDetails> = new Array<UserDetails>();
UserArrayList.push(new UserDetails("Ravichandran ","ravi@gmail.com","123","eee","Male","93838833"));
UserArrayList.push(new UserDetails("Priyadharshini ","riya@gmail.com","123","cse","Female","94444445"));
console.log(UserArrayList);

export let BookDetailsList:Array<BookDetails>=new Array<BookDetails>();
BookDetailsList.push(new BookDetails("c#","Author1","issued"));
BookDetailsList.push(new BookDetails("c#","Author1","issued"));
BookDetailsList.push(new BookDetails("c#","Author1","issued"));
BookDetailsList.push(new BookDetails("HTML","Author2","available"));
BookDetailsList.push(new BookDetails("Html","Author2","damaged"));
BookDetailsList.push(new BookDetails("CSS","Author1","available"));
BookDetailsList.push(new BookDetails("CSS","Author1","available"));
BookDetailsList.push(new BookDetails("JS","Author1","available"));
BookDetailsList.push(new BookDetails("JS","Author1","available"));
BookDetailsList.push(new BookDetails("TS","Author1","available"));
BookDetailsList.push(new BookDetails("TS","Author2","damaged"));
BookDetailsList.push(new BookDetails("TS","Author2","available"));


export let BorrowDetailsList:Array<BorrowDetails>=new Array<BorrowDetails>();
BorrowDetailsList.push(new BorrowDetails("BID1001","SF3001",new Date(2024, 9, 10),"borrowed",0))
BorrowDetailsList.push(new BorrowDetails("BID1003","SF3001",new Date(2024,9, 12),"borrowed",0))
BorrowDetailsList.push(new BorrowDetails("BID1001","SF3001",new Date(2024,9, 14),"returned",15))
BorrowDetailsList.push(new BorrowDetails("BID1001","SF3001",new Date(2024, 9, 11),"borrowed",0))
BorrowDetailsList.push(new BorrowDetails("BID1001","SF3001",new Date(2024, 7, 7),"borrowed",20))
