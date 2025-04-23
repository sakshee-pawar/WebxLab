class Student{
   public name:string;
   public age:number;
   public city:string;

   private privKey:number;
   private bankAccNumber:string;

   protected marks:number;
   protected classRank:number;

   privFunction():void{
    this.privKey = 345677; //accessed within same class
    console.log(this.privKey);
   }
}

class Graduate extends Student{
    degree:string;

    protFunction():void{
        this.marks= 88;
        this.classRank=10;

        console.log(`Marks= ${this.marks}\t Rank= ${this.classRank}`);
    }
}

//public class accessibility outside the class
let s1 = new Student();
s1.name="Bonnie";
s1.age=18;
s1.city="Richmond";
s1.privFunction();
console.log(`Name: ${s1.name} \n Age: ${s1.age} \n City: ${s1.city}\n`);

let s = new Graduate();
s.degree= "Msc";
s.name = "Hayley";
s.age = 26;
s.city="New Orleans";
s.protFunction();
console.log(`Degree: ${s.degree}\n Name: ${s.name} \n Age: ${s.age} \n City: ${s.city}\n`);



// //NOTE !
// The private and protected type variables are visible because their respective functions 
// were of the type public and hence could be accessed
