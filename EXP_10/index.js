const mongoose = require('mongoose');

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test"); 
}
main()
.then((res)=>{
    console.log(`Success ${res}`);
})
.catch(err=>{
    console.log(err);
});

//creating Schema
const studentSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
});

//creating a model
const Student = mongoose.model("Student",studentSchema);

//adding a single documnet
// const st1 = new Student({
//     name:"Harry",
//     age:14,
//     email:"Potter@gmail.com"
// });

Student.insertMany([
    {
        name:"Hermione",
        age:14,
        email:"Granger@yahoo.in"
    },
    {
        name:"Ronald",
        age:14,
        email:"Weasley@hotmail.com"
    },
    {
        name:"Draco",
        age:14,
        email:"Malfoy@gmail.com"
    },
    {
        name:"Ginny",
        age:13,
        email:"gWeasley@gmail.com"
    }
]).then(res=>{
    console.log(`Saved successfully !`);
}).catch(err=>{
    console.log(`something went wrong ! ${err}`)
});

// st1.save();
