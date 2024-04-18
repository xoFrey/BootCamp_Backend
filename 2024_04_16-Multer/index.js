import express from "express"
import multer from "multer"



const app = express()

app.use((req, res, next)=> {
    console.log("new request:", req.method, req.url);
    next()
})
app.get("/", (_, res)=> {
    res.send("It works!")
})
const diskStorage = multer.diskStorage({destination:(req,file, cb)=>{
    cb(null, "./uploads")
} ,
filename:(req, file, cb)=> {
    const fileName = Date.now() + "_" + file.originalname
    cb(null, fileName)
}})
const upload = multer({ storage: diskStorage});


app.post("/api/files/upload", upload.single("Background"), (req, res)=> {
    console.log(req.body);
    console.log(req.file);

    res.json({fileName:req.file.filename})


  
})

const PORT = 2002; 

app.listen(PORT, ()=> console.log("Server ready at", PORT))