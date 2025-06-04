// ერთი და იგივე სენტაქსია და ყველაფერი უბრალოდ ერთი იღებს რამდენიც არ უნდა იყოს მეორე შლის ლისტს მაგალითად 

// 1
function obje(name, age, heigth) {
    this.name = name
    this.age = age
    this.heigth = heigth
}

obj = new obje("nika", 14, 1.80)

let {name, ...rest} = obj

console.log(rest)

// 2

let obj1 = [new obje("gio", 12, 1.50), new obje("luka", 10, 1.30), new obje("taso", 16, 1.70)]

console.log(obj1)

// 3
function namer(...n) {
    n.forEach((el) => {
        console.log(el)
    })
}

list = ["nika", "gio", "luka", "taso"]

namer(...list)