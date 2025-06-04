// 1
function inp(a, b, ...n) {
    console.log(a * b)
    console.log(n.reduce((res, num) => res + num))
}

inp(1,2,3,4,5)

// 2
let lst0 = [1,2,3,4,5]
let lst1 = [6,7,8,9,10]
let lst2 = [11,12,13,14,15]

let lst = [...lst0, ...lst1, ...lst2, 16,17,18,19,20]

console.log(lst)