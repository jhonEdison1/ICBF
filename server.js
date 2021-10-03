const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const mimeTypes = require('mime-types');
const cors = require('cors');
const multipart = require('connect-multiparty');



const multiPartMiddelware = multipart({
    uploadDir: './uploads'

});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

/*const storage = multer.diskStorage({
    destination: 'uploads',
    filename: function(req,file,cb){
        cb("",Date.now()+ file.originalname +"."+ mimeTypes.extension(file.mimetype));
    }
})
const upload = multer({

   storage: storage,
  
})*/

app.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/views/index.html");
});

app.post('/files', multiPartMiddelware(), (req,res)=>{

    res.json({
        'message': 'subido correctamente'
    });
});

/*app.post("/files", upload.single('avatar'), (req, res) => {

    res.send({resp:"Archivo subido con exito"});
   

})*/



app.listen(8080, () => console.log("server started"));