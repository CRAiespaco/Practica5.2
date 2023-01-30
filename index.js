const mongoose=require("mongoose");
const app=require("./app");
const port=3000;
const urlMongoAtlas="mongodb+srv://admin:admin123456@christopherdb.1h9nloo.mongodb.net/mydb"

mongoose.connect(urlMongoAtlas,(err,res)=>{
    try{
        if(err){
            throw erro
        }else{
            console.log("La conexión a la BD es correcta");

            app.listen(port,()=>{
                console.log("Servidor del API REST está funcionando en http://localhost:"+port);
            })
        }
    }catch(error){
        console.log(error);
    };
})