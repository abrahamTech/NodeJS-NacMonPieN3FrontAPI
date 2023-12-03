import app from "./app.js";
import { connectDB } from "./db.js";

//Settings
app.set("port", 3000);


connectDB();


app.listen(app.get("port"), () =>{
    console.log(`Server listen on port ${app.get("port")}`);

})