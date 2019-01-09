var express = require('express');
var router = express.Router();
var WeddingData = require('../models/wedding-data');
var path = require('path');
var crypto = require('crypto');
 var ObjectId = require('mongodb');
var mongoose = require('mongoose');
var multer = require('multer');
var GridFsStorage = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');


const url = 'mongodb://localhost:27017/eventezy';
mongoose.connect(url);
const conn = mongoose.createConnection('mongodb://localhost:27017/eventezy');


// let gfs;
// conn.once('open', () => {
//   //init stream
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection('WeddingData');
// })

// //create storage engine
// const storage = new GridFsStorage({
//   url: 'mongodb://localhost:27017/eventezy',
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString('hex') + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'WeddingData'
//         };
//         resolve(fileInfo);
//       });
//     });
//   }
// });
// const upload = multer({ storage });

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
  cb(null, 'public/images');
  },
  filename: function(req, file, cb) {
  cb(null, file.originalname);
  }
 });
  
 var upload = multer({
  storage: storage
 });
/* GET home page. */
router.get('/', (req, res, next) => {
  WeddingData.findOne({email: 'ydu@gmail.com'})
              .then((doc) => {
                
                res.render('index', { item: doc });
              });
});

// router.get('/:id', (req, res, next) => {
//   WeddingData.findOne({id: req.params.id})
//               .then((doc) => {
//                 res.render('index', { items: doc });
//               });
 
// });



router.post('/insert', upload.any(), (req, res, next) => {
  // let brideImg = ' ';
  // let groomImg = ' ';
  
  WeddingData.findOne({email: 'ydu@gmail.com'}, (err, doc) => {
    // if(err) {
    //   console.log(err);
    // }
    // console.log(doc.brideImg);
    // if(req.body.avtar_hs === 'yes' && doc.brideImg === ' ' && doc.groomImg === ' ') {
    //   brideImg = req.files[0].filename;
    //   groomImg = req.files[1].filename;
    // } else {
    //   brideImg = doc.brideImg;
    //   groomImg = doc.groomImg;
    // }

    let counter = req.body.ecounter;
    console.log(counter);
    let event, edate, etime, ename;
    let arr = [];
    for(let i = 1; i<=counter; i++) {
      edate = 'edate' + i;
      etime = 'etime' + i;
      ename = 'ename' + i;
      
      console.log(edate);   //undefined
      console.log(edate1);  

      console.log(req.body.etime);
      event = {
        edate : req.body.edate,
        etime : req.body.etime,
        ename : req.body.ename 
      }
      console.log(event);
      // console.log(typeof event);
      arr.push(event);
    }
    // console.log("Itinerary"+JSON.stringify(arr));
    // doc.itinerary = JSON.stringify(arr);
    // console.log(JSON.stringify(doc.itinerary));

    // doc.bgName = req.body.bride_groom;
    // doc.date = req.body.weddingDate;
    // doc.showImg = req.body.avtar_hs;
    // doc.brideImg = brideImg;
    // doc.groomImg = groomImg;
    // doc.when = req.body.when;
    // doc.where = req.body.venue;
    // doc.showItinerary = req.body.itinerary_hs;
    // doc.showRSVP = req.body.rsvp_hs;
    // doc.rsvpLink = req.body.rsvp_link;
    // doc.host = req.body.host;
    // doc.email = req.body.email;
    // doc.contact = req.body.phone_no;
    // doc.save();
    
    res.redirect('/');
  });
 
  
})

router.get('/display', (req, res, next) => {
  WeddingData.findOne({email: 'ydu@gmail.com'})
              .then((doc) => {
                console.log(doc);
                res.render('display', { items: doc });
              });
});
module.exports = router;
