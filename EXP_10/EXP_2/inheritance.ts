//Base class
class Character{
    charName:string;
    charAge:number;

    greetFromChar():void{
        console.log(`Hello! I am ${this.charName}`);
    }
}

//Single Inheritance
class Vamps extends Character{
    species:string;

    greetFromVamps():void{
        console.log(`Vamps function call !`);
    }
}

//Multilevel Inheritance
class Stefan extends Vamps{
    name:string;

    greetFromStefan():void{
        console.log(`Hello ! I am stefan`);
    }
}

let c1 = new Character();
c1.charName="Katherina Petrova";
c1.charAge=500;
console.log(`Base class values: ${c1.charName}\t ${c1.charAge}`);

let v1 = new Vamps();
v1.charName="Caroline Forbes";
v1.charAge=18;
v1.species="vampire";
console.log(`Single Inheritance- extended Characters: ${v1.charName}\t ${v1.charAge}\t ${v1.species}`);

let st= new Stefan();
st.name="Stefan Salvatore";
st.species="vampire";
st.charName="Stefan";
st.charAge=162;
console.log(`Multilevel inheritance- extends vamps and Character:${st.charName}\t ${st.charAge}\t ${st.species}\t ${st.name} `);
