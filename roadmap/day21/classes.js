// class : a keyword to define a class
// class -> its a blueprint or a template
// or collection of objects
// it is used to create a custom data type
// Date of Birth : 31 January 2021
class DOB {
    // this -> points to the current instance
    constructor(day, month, year){
        this.day = day;
        this.month = month; 
        this.year = year;
    }
}

// let dob1 = new DOB(31, 'January', 2021);

// console.log(`${dob1.day}st, ${dob1.month} ${dob1.year}`);

module.exports = DOB;