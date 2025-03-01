"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowDetailsList = exports.BookDetailsList = exports.UserArrayList = exports.BorrowDetails = exports.BookDetails = exports.UserDetails = void 0;
var UserIdAutoIncrement = 3000;
var BookAutoIncrement = 1000;
var BorrowAutoIncrement = 2000;
var UserDetails = /** @class */ (function () {
    function UserDetails(name, email, password, department, gender, PhoneNumber) {
        this.WalletBalance = 0;
        this.UserId = "SF" + UserIdAutoIncrement++;
        this.UserName = name;
        this.Email = email;
        this.Password = password;
        this.Department = department;
        this.MobileNumber = PhoneNumber;
        this.Gender = gender;
    }
    UserDetails.prototype.WalletRecharge = function (amount) {
        this.WalletBalance += amount;
    };
    UserDetails.prototype.DeductBalance = function (amount) {
        this.WalletBalance -= amount;
    };
    return UserDetails;
}());
exports.UserDetails = UserDetails;
// enum Department {
//     eee = 'EEE',
//     cse = 'CSE',
//     ece='ECE',
// }
var BookDetails = /** @class */ (function () {
    function BookDetails(bookName, authorName, availability) {
        this.BookID = "BID" + BookAutoIncrement++;
        this.BookName = bookName;
        this.AuthorName = authorName;
        this.Availability = availability;
    }
    return BookDetails;
}());
exports.BookDetails = BookDetails;
// enum Availability{
//     unknown="Unknown",
//     available="Available",
//     issued="Issued",
//     damaged="Damaged"
// }
var BorrowDetails = /** @class */ (function () {
    function BorrowDetails(bookID, userID, borrowdate, bookingStatus, fine) {
        this.BorrowID = "LB" + BookAutoIncrement++;
        this.BookID = bookID;
        this.UserID = userID;
        this.BorrowDate = borrowdate;
        this.BookingStatus = bookingStatus;
        this.PaidFineAmount = fine;
    }
    return BorrowDetails;
}());
exports.BorrowDetails = BorrowDetails;
// enum Status{
//     default="Default",
//     borrowed="Borrowed",
//     returned="Returned",
// }
exports.UserArrayList = new Array();
exports.UserArrayList.push(new UserDetails("Ravichandran ", "ravi@gmail.com", "123", "eee", "Male", "93838833"));
exports.UserArrayList.push(new UserDetails("Priyadharshini ", "riya@gmail.com", "123", "cse", "Female", "94444445"));
console.log(exports.UserArrayList);
exports.BookDetailsList = new Array();
exports.BookDetailsList.push(new BookDetails("c#", "Author1", "issued"));
exports.BookDetailsList.push(new BookDetails("c#", "Author1", "issued"));
exports.BookDetailsList.push(new BookDetails("c#", "Author1", "issued"));
exports.BookDetailsList.push(new BookDetails("HTML", "Author2", "available"));
exports.BookDetailsList.push(new BookDetails("Html", "Author2", "damaged"));
exports.BookDetailsList.push(new BookDetails("CSS", "Author1", "available"));
exports.BookDetailsList.push(new BookDetails("CSS", "Author1", "available"));
exports.BookDetailsList.push(new BookDetails("JS", "Author1", "available"));
exports.BookDetailsList.push(new BookDetails("JS", "Author1", "available"));
exports.BookDetailsList.push(new BookDetails("TS", "Author1", "available"));
exports.BookDetailsList.push(new BookDetails("TS", "Author2", "damaged"));
exports.BookDetailsList.push(new BookDetails("TS", "Author2", "available"));
exports.BorrowDetailsList = new Array();
exports.BorrowDetailsList.push(new BorrowDetails("BID1001", "SF3001", new Date(2024, 9, 10), "borrowed", 0));
exports.BorrowDetailsList.push(new BorrowDetails("BID1003", "SF3001", new Date(2024, 9, 12), "borrowed", 0));
exports.BorrowDetailsList.push(new BorrowDetails("BID1001", "SF3001", new Date(2024, 9, 14), "returned", 15));
exports.BorrowDetailsList.push(new BorrowDetails("BID1001", "SF3001", new Date(2024, 9, 11), "borrowed", 0));
exports.BorrowDetailsList.push(new BorrowDetails("BID1001", "SF3001", new Date(2024, 7, 7), "borrowed", 20));
