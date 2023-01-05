type User = {
    readonly _id: string,
    name: string
    email:string
    isReactive: boolean
    creadCard?:number

}

type User1 = {
    name: string
    isReactive: boolean
}

let myUser : User = {
    _id: "12478",
    name: "rod",
    email:"r@r",
    isReactive:false

}

let myUser1 : User1 = {
    name: "rod",
    isReactive:false

}

let myUser2 : User1 = {
    name: "rodha",
    isReactive:false

}

const mySuperHero : number[] = []

mySuperHero.push(5)
mySuperHero.push(50)
mySuperHero.push(25)

const allUser: User1[] = []

allUser.push(myUser1)
allUser.push(myUser2)




function createUser(u: User){}