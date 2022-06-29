import logo from './logo.svg';
import './App.css';
import './A1.css';
import { useState } from 'react';



function App() {
   
  
  const [maindata, setmaindata]=useState([])
  const [Name,    getvalName]=  useState([])
  const [CONTACT, getvalCONTACT]= useState([])
  const [EMAIL,   getvalEMAIL]= useState([])
  const [HOBBY,   getvalHOBBY]= useState([])
  const [CITY,    getvalCITY]= useState([])
  const [STATE,   getvalSTATE]= useState([])
  const [editdata,seteditdata]=useState(false);
  const[editdata1,seteditdata1]=useState('');
  // const[userDetails,setUserDetails]= useState({Name: "", CONTACT:"", EMAIL:'', HOBBY:"", CITY: "", STATE:""})

  const from = () =>{
    let obj = {
       Name:Name,
       CONTACT:CONTACT,
       EMAIL:EMAIL, 
       HOBBY:HOBBY,
       CITY: CITY,
       STATE:STATE
        }
   if(editdata)
   {
     const updatedobject=maindata.map((user,ind)=>
     ind == editdata1 ? obj:user
     );
        setmaindata(updatedobject);
   }
   else
   {
     setmaindata([...maindata,obj])
   }
  
      


    
    getvalName(" ");
    getvalCONTACT(" ");
    getvalEMAIL(" ");
    getvalHOBBY(" ");
    getvalCITY(" ");
    getvalSTATE(" ");
   }
   

    const deletehandler = (i) =>{
          //  alert(i);

           maindata.splice(i,1);
           setmaindata([...maindata]);      
    }
    const edithandler=(i)=>
    {
      seteditdata(true);
      seteditdata1(i);

      const getdata = maindata[i];
      getvalName(getdata.Name);
      getvalCONTACT(getdata.CONTACT);
      getvalEMAIL(getdata.EMAIL);
      getvalHOBBY(getdata.HOBBY);
      getvalCITY(getdata.CITY);
      getvalSTATE(getdata.STATE);



      
    }

   



  


  

  return (
    <div className="App">

       {/* <input className='s2' type="text" placeholder="Search.." name="search"/>   */}
      <form>
        <table align="center" className="fromcss"> 
        <tr>
          <td>NAME</td>
          <td>
            <input type="text"onChange={(a)=>{getvalName(a.target.value)} }  value = {Name} ></input>
          </td>
        </tr>
        <tr>
          <td>CONTACT</td>
          <td>
            <input type="text" onChange={(b)=>{getvalCONTACT(b.target.value)} }  value = {CONTACT}></input>
          </td>
        </tr>
        <tr>
          <td>EMAIL</td>
          <td>
            <input type="text" onChange={(c)=>{getvalEMAIL(c.target.value)} }    value = {EMAIL}></input>
          </td>
        </tr>
        <tr>
          <td>HOBBY</td>
          <td>
            <input type="text" onChange={(d)=>{getvalHOBBY(d.target.value)} }   value = {HOBBY}></input>
          </td>
        </tr>
        <tr>
          <td>CITY</td>
          <td>
            <input type="text" onChange={(e)=>{getvalCITY(e.target.value)} }    value ={CITY}></input>
          </td>
        </tr>
        <tr>
          <td>STATE</td>
          <td>
            <input type="text" onChange={(f)=>{getvalSTATE(f.target.value)} }   value = {STATE}></input>
          </td>
        </tr>
       </table>
       <input className="s1" type="button" value="submit" onClick={from}></input>

      </form>

      
      <hr></hr>
      <h4>PRINT VALUE</h4>
    

      <div>
        <table align="center">
          <tr>
            <td>id</td>
            <td>NAME:</td>
            <td>CONTACT</td>
            <td>EMAIL</td>
            <td>HOBBY</td>
            <td>CITY</td>
            <td>STATE</td>
          </tr>
          {
            maindata.map((item,i)=>{
              return(
                <tr>
                  <td>{i}</td>
                <td>{item.Name}</td>
                <td>{item.CONTACT}</td>
                <td>{item.EMAIL}</td>
                <td>{item.HOBBY}</td>
                <td>{item.CITY}</td>
                <td>{item.STATE}</td>
               <td><input type="button" value="EDIT" onClick={()=>{ edithandler(i)}} ></input></td> 
               <td><input type="button" value="Delete"  onClick={()=>{deletehandler(i)}} ></input></td> 
              </tr>
              )
            })
          }
          
        </table>
      </div>

    </div>
  );
}

export default App;


