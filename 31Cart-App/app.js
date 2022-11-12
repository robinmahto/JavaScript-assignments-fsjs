
function display() {

    return function sum(){
        return function (){
            return 2+7
        }
    }
}

const a = () => console.log("arrow function")

console.log(a instanceof Function)

console.log(display()()())
