import multer from 'multer';

const upload = multer({storage})
let storage = multer.diskStorage({
    destination:(req, file, cb)=>{  //cb:callback
        cb(null,"./public")
    },
    filename:(req, file, cb)=>{
        cb(null, file.originalname)
    }
})

export default upload;   
