/*
 * Make a binary tree representing (1+2*3)/4
 *
 */

function Node() {
    this.value = function(vars) {}
}

function Number(number) {
    this.number = number
}
Number.prototype = new Node()
Number.prototype.value = function(vars) {
    return this.number
}

function Variable(name) {
    this.name = name
}
Variable.prototype = new Node
Variable.prototype.value = function(vars) {
    console.log(this.name, vars)
    return vars[this.name]
}

function Sum(left, right) {
    this.left = left
    this.right = right
}
Sum.prototype = new Node()
Sum.prototype.value = function(vars) {
    return this.left.value(vars) + this.right.value(vars)
}

function Sub(left, right) {
    this.left = left
    this.right = right
}
Sub.prototype = new Node()
Sub.prototype.value = function(vars) {
    return this.left.value(vars) - this.right.value(vars)
}

function Mul(left, right) {
    this.left = left
    this.right = right
}
Mul.prototype = new Node()
Mul.prototype.value = function(vars) {
    return this.left.value(vars) * this.right.value(vars)
}

function Div(left, right) {
    this.left = left
    this.right = right
}
Div.prototype = new Node()
Div.prototype.value = function(vars) {
    return this.left.value(vars) / this.right.value(vars)
}

var answer = new Div(
    new Sum(
        new Number(1), 
        new Mul(
            new Number(2),
            new Number(3)
        )
    ),
    new Number(4)
)
console.log(answer)
console.log(answer.value())
var a2 = new Mul(
        answer.left,
        new Sum(
            new Variable('x'),
            new Variable('y')
            )
        )
console.log(a2)
console.log(a2.value({x: 4, y: 1}))
console.log(a2.value({x: 2, y: 3}))
