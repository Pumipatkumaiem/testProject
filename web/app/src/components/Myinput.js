import {useState} from "react";
function Myinput(props){
    const [name, setName] = useState('');
 //const [counter, setCounter] = useState(0);
  //const upDateCounter = () => {
 // let newCounter = (counter);
 //  setCounter(newCounter+1);
//}
const [phone, setPhone ] = useState(''); // วิธีที่ 2
const changName = (e) =>{
  setName(e.target.value)
}
//const changePhone = (e) => {
 // setPhone(e.target.value)
//}
    return(
    <>
    <div>{props.label}</div>
    <div className="">
      <input onChange={(e) => changName(e)} />
      <input onChange={(e) => setPhone(e.target.value)}/>  {/*วิธีที่ 2 แบบไม่ใช้ function*/}
      <div>{props.output} = {name}</div>
      <div>{props.output} = {phone}</div> {/*วิธีที่2*/}
    </div>
    </>
    );
}
export default Myinput;