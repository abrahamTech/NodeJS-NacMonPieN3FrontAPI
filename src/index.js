import app from "./app.js";
import { connectDB } from "./db.js";
import { loadMaterialsList } from "./loadMaterials.js";

//Settings
app.set("port", 4000);

connectDB();

//Load Materials List
//loadMaterialsList();


app.listen(app.get("port"), () =>{
    console.log(`Server listen on port ${app.get("port")}`);

})