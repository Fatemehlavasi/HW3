const person1 = {
    name: "ali",
    age: 23,
    father: {
        age:15,
        abj3: {
            name:"hasan"
        }
    }
}

function person (obj , copy= {}){
    for (let key in obj){
        if (typeof obj[key] ==="object"){
            copy[key] ={}
            person(obj[key] , copy[key])
        }else{
            copy[key] = abj [key]
        }
    }
    return copy;
}
let copy = person(person1)

console.log(copy);
