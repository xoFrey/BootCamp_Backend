import express from "express"
import multer from "multer"
import url from "url"
import path from "path"
import fs from "fs"

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const app = express()

app.use((req, res, next)=> {
    console.log("new request:", req.method, req.url);
    next()
})
app.get("/", (_, res)=> {
    res.send("It works!")
})

const upload = multer({dest:"./uploads"});


app.post("/api/files/upload", upload.single("Background"), (req, res)=> {
    console.log(req.body);
    console.log(req.file);
res.json({fileName: req.file.filename})

})

const PORT = 2002; 

app.listen(PORT, ()=> console.log("Server ready at", PORT))