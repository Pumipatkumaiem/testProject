module.exports = {
    getHello: (req,res) => {
        res.send('Hello World!')
    },
    getHelloname: (req,res) => {
        res.send('Hello my name is ' + req.params.name); //req รับจาก client
    },
    myPost: (req,res) =>{
        res.send('This is my Post '+ req.body.name);
    },
    getmyPut: (req,res) =>{
        res.send('id = '+ req.params.id + 'name = ' + req.body.name);
    },
    getmyDelete:(req,res)=>{
        res.send('id delete = ' + req.params.id);
    },
    getmyJson:(req,res)=>{
        res.send(req.body.name + " last is " + req.body.lname);
    },
    myLogin:(req,res)=>{ // login แบบ post 
        try{
            const username = req.body.username;
            const password = req.body.password;
            
            if(username  =='admin' && password == 'admin'){
               return res.send({message: "Success"});
            }
        
            throw { message: "unauthorized"}; //โยน Eroor throw = โยน error ให้เข้าไปที่ catch
            } catch(e){
                res.statusCode =500;
                res.send({message: e.message})
            }
    }
};