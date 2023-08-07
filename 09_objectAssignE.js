

console.log(`===================Assignment-2=====================`);

let sbiBank = {
    bankName : "SBI Bank",
    location  : "Vijaynagar Bengaluru",
    accountNo : "39449678902",
    ifsc : "SBIN0002035",
    interestRate : 5.6,

    showDetails :function() {
        console.log(`Bank Details : ${this.bankName}, A/c.No : ${this.accountNo}, Ifsc : ${this.ifsc}, Rate of Interest : ${this.interestRate}, Location : ${this.location}`);
        
    }
}
sbiBank.showDetails();

let axisBank = {
    bankName : "Axis Bank",
    location  : " Bidar",
    accountNo : "73827355282",
    ifsc : " UTIB0000484",
    interestRate :  4.9,
    showDetails :function() {
        console.log(`Bank Details : ${this.bankName}, A/c.No : ${this.accountNo}, Ifsc : ${this.ifsc}, Rate of Interest : ${this.interestRate}, Location : ${this.location}`);

    }
}
axisBank.showDetails();

let hdfcBank = {
    bankName : "HDFC Bank",
    location  : " Udgir road Bidar",
    accountNo : "62874663829",
    ifsc : "HDFC0000972",
    interestRate : 6.3,
    showDetails :function() {
        console.log(`Bank Details : ${this.bankName}, A/c.No : ${this.accountNo}, Ifsc : ${this.ifsc}, Rate of Interest : ${this.interestRate}, Location : ${this.location}`);

    }
}
hdfcBank.showDetails();

let yesBank = {
    bankName : "YES Bank",
    location  : "  Kasturba Road Bangalore ",
    accountNo : "30297264572",
    ifsc : "YESB0000615",
    interestRate : 6.6,
    showDetails :function() {
        console.log(`Bank Details : ${this.bankName}, A/c.No : ${this.accountNo}, Ifsc : ${this.ifsc}, Rate of Interest : ${this.interestRate}, Location : ${this.location}`);
        
    }
}
yesBank.showDetails();