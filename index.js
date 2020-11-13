const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "black"
};

let f = () => {
    return 'yes';
}

document.getElementById("demo").innerHTML = Object.values(person) + f();