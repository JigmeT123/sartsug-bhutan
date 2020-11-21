const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const path = require('path');
const os = require('os');
const Busboy = require('busboy');


const { Storage } = require('@google-cloud/storage');
const projectId = process.env.REACT_APP_PROJECT_ID;
const keyFilename = 'sartsug-bhutan-firebase-adminsdk-hpt49-254828ee7c.json';
let gcs = new Storage ({
    projectId: projectId,
    keyFilename: keyFilename
});



exports.uploadFile = functions.https.onRequest((req, res)=>{

    cors(req, res, () => {
        if(req.method !== "POST"){
            return res.status(500).json({
                message: "It is not working"
            });
        }
        const busboy = new Busboy({headers: req.headers});
        let uploadData = null;

        busboy.on('file', (fieldname, file, filename, encoding, mimetype)=>{
            const filepath = path.join(os.tmpdir(), filename);
            uploadData = {file: filepath, type: mimetype};
            file.pipe(fs.createWriteStream(filepath));
        });

        busboy.on('finish', ()=>{
            const bucket = gcs.bucket(process.env.REACT_APP_STORAGE_BUCKET);
            return bucket.upload(uploadData.file, {
                uploadType: 'media',
                metadata: {
                    metadata: {
                        contentType: uploadData.type
                    }
                }
            }).then(()=>{
                return res.status(200).json({
                    message: 'it worked!'
                });
            }).catch(err =>{              
                res.status(500).json({
                    error: err
                });
            });
        });
        busboy.end(req.rawBody);    
    });
});