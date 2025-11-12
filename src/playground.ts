import { db } from "./server/db";

await db.user.create({
    data:{
        firstName:'Karan',
        lastName:'Mehta',
        emailAddress:'abc@gmail.com'
    }
})