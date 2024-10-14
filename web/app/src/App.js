import './App.css';
import { useEffect } from 'react';
import Menu from './components/Menu';
import Product from './components/Product';
import Swal from "sweetalert2";
//import {useState} from "react";
//import Myinput from './components/Myinput';
function App() {
 // useEffect(() =>{   //useEffect
 //   fetchData();      //useEffect
 // }, []);             //useEffect
//  const fetchData = () => {       //useEffect
//   console.log("On page load..")      
 // }
  //const [counter, setCounter] = useState(0);
  //const upDateCounter = () => {
 // let newCounter = (counter);
 //  setCounter(newCounter+1);
//}

//const changePhone = (e) => {
 // setPhone(e.target.value)
//}
 
const ShowAlert = () =>{   /// fucntion ปุ่มคลิก Alert
  Swal.fire({               /// fucntion ปุ่มคลิก Alert
    title: 'My Dialog',     /// fucntion ปุ่มคลิก Alert
    text: 'Success',         /// fucntion ปุ่มคลิก Alert
    icon:'success',         /// fucntion ปุ่มคลิก Alert
  })
}
const ShowConfirm = () =>{   /// fucntion ปุ่มคลิก Alert
  Swal.fire({               /// fucntion ปุ่มคลิก Alert
    title: 'Your Sure To Confirm',     /// fucntion ปุ่มคลิก Alert
    text: 'You Want to Confirm',         /// fucntion ปุ่มคลิก Alert
    icon:'question',         /// fucntion ปุ่มคลิก Alert
    showConfirmButton:true,
    showCancelButton:true
  }).then((res) => {
    if(res.isConfirmed){
      console.log("You Confirm");
    }
  })
}
  return (
    <div>
      <button className='btn btn-primary' onClick={ShowAlert}>Click me</button> 
      <button className='btn btn-danger ms-3' onClick={ShowConfirm}>Confirm</button>
      <Menu />
    </div>
  );
}

export default App;
