const student={
    name:"mehul",
    age:20,
    eng:94,
    math:98,
    phy:96,
    getavg(){
        console.log(this);
        let avg=(this.eng+this.math+this.phy)/3;   // here this keyword is used to access the property of object student
        console.log(`${this.name}'s avg maks =${avg}`);
    }

};
student.getavg();