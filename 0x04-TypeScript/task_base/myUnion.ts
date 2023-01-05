type Users = {
    name: string
    id: number
}

type Admin = {
    userName: string
    id: number
}

let jose : Users | Admin = {
    name: "jose",
    id: 7474
};

jose = {userName: "rodolpho", id:7854};

function getIdFromDb(id: number | string): number | string {
    if(typeof id === "string"){
        id.toLowerCase;
    }else{
        id + 2;
    }

    return id;

}

const data : (string | number)[] = ["1","2",3,4,5]