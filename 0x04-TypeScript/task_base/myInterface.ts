interface IUser {
    readonly dbId: number
    name: string,
    userId: number,
    googleId?:string,
    //startTrail: () => string
    startTrail(): string,
    getCoupon(couponName:string):number
}

interface IUser {
    githubId:string
}

interface Admin1 extends IUser{
    role: "admin"|"learner"|"pass"

}

const jsh : IUser = {
   dbId: 5560,
   name:"rodolp",
   userId: 51,
   githubId: "",
   startTrail: () => {
    return "hoop"
   },
   getCoupon:(name: "gtregrb40")=>{
    return 40
   }
}

const admin : Admin1 = {
    dbId: 5560,
    name:"rodolp",
    userId: 51,
    githubId: "",
    role: "learner",
    startTrail: () => {
     return "hoop"
    },
    getCoupon:(name: "gtregrb40")=>{
     return 40
    }
 }