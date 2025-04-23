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
const st1 = new Student({
    name:"Harry",
    age:14,
    email:"Potter@gmail.com"
});

st1.save();
