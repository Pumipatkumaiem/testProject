const express = require('express')
const controller = require("./controller")
const app = express()
const port = 3001
const pool = require('./connect');
const db = pool.connect();
const multer = require('multer');
const cors = require('cors');
app.use(express.urlencoded({extended: true})); //ทำให้ส่งค่าจาก form เข้ามาได้
app.use(express.json()); // ทำให้ส่ง json ได้
app.use(cors());

app.get('/db/list', async (req,res)=> { // SELECT DATA 
const db = await pool.connect();  // SELECT DATA 
const result = await db.query("SELECT * FROM tb_book"); // SELECT DATA 
db.release(); //คืนทรัพย์กร
res.send(result.rows); // SELECT DATA 
}) // SELECT DATA 


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/Images');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

// Route สำหรับอัพโหลดไฟล์
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('ไฟล์อัพโหลดเรียบร้อยแล้ว');
});

app.post('/db/insert', async (req,res) =>{
  const result = await pool.query('INSERT INTO tb_book(isbn, name, price) VALUES($1,$2,$3)', 
    [req.body.isbn, req.body.name, req.body.price]);
res.send({result:result});



})
app.put('/db/update/:id', async (req,res) =>{
  const result = await pool.query('UPDATE tb_book SET isbn = $1, name =$2, price =$3 WHERE id = $4',[
    req.body.isbn,
    req.body.name,
    req.body.price,
    req.params.id
  ]);
  res.send({result:result})
})



app.delete('/db/delete/:id', async (req,res) =>{
  const result = await pool.query("DELETE FROM tb_book WHERE id=$1",[
    req.params.id
  ]);
  res.send({result:result});
});

app.get('/', (req, res) => controller.getHello(req,res));
app.get('/hello/:name', (req, res) => controller.getHelloname(req,res));  //res = ส่งไป server
app.post('/hello/myPost', (req,res) => controller.myPost (req,res)); //ใช้ตอนเพิ่มข้อมูล คล้ายๆกับ SLECT //post คือการส่งค่าจาก form
app.put('/hello/:id', (req,res) => controller.getmyPut (req,res));//ใช้ตอนเพิ่มข้อมูล คล้ายๆกับ UPDATE
app.delete('/hello/myDelete/:id', (req,res ) => controller.getmyDelete(req,res));
app.post('/hello/myPostfromJson', (req,res) => controller.getmyJson(req,res)); //ส่วนมากใช้ json 
app.post('/login', (req,res) => controller.myLogin(req,res));
app.get('/Object', (req, res) => {
  const User = {
    name:"peter Inwza",
    age:24,
    status: true
  }
  res.send({result: User});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


