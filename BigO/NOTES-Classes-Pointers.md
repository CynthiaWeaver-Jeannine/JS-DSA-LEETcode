##Classes
`class Cookie {
    constructor(color) {
        this.color = color
    }
    getColor() {
        return this.color
    }
    setColor(color) {
        this.color = color
    }
}
 
let cookieOne = new Cookie('green')
let cookieTwo = new Cookie('blue')`

##Pointers  
Without using pointers: `let a = 5; let b = a`, if you change `a = 10`, still `b=5`   

Example of using pointers, with objects:  
`obj1 = 11;
obj2 = obj1` You are saying make obj 2 point to the same obj as 1  
If you change the value of `obj1=22;`, then ``obj2=22` because of pointers. If you change object values and leave some values without pointers, javascript using a garbage collection system to clean up. 
