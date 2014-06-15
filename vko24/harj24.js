/*
 * Make a binary tree representing (1+2*3)/4
 *
 */

function Node() {
    this.value = function() {}
}

function Number(number) {
    this.number = number
}
Number.prototype = new Node()
Number.prototype.value = function() {
    return this.number
}

function Sum(left, right) {
    this.left = left
    this.right = right
}
Sum.prototype = new Node()
Sum.prototype.value = function() {
    return this.left.value() + this.right.value()
}

function Sub(left, right) {
    this.left = left
    this.right = right
}
Sub.prototype = new Node()
Sub.prototype.value = function() {
    return this.left.value() - this.right.value()
}

function Mul(left, right) {
    this.left = left
    this.right = right
}
Mul.prototype = new Node()
Mul.prototype.value = function() {
    return this.left.value() * this.right.value()
}

function Div(left, right) {
    this.left = left
    this.right = right
}
Div.prototype = new Node()
Div.prototype.value = function() {
    return this.left.value() / this.right.value()
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
