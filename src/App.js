
import { useState } from 'react';
import"./App.css"

function App() {
// const [firstName,setFirstName] = useState("");
//   const [lastName,setLastName] = useState("");
//   console.log(firstName);
//   console.log(lastName);




//   function changeHandlerFirst(event) {
//     // console.log(event.target.value);
//     setFirstName(event.target.value)
//   }
//   function changeHandlerLast(event) {
//     // console.log(event.target.value);
//     setLastName(event.target.value);
//   }'



// to handle multipal state to use object

const [formData,setFormData] =useState({firstName:"",lastName:"",email:"" ,comments:false, candidates:false, offers:false,bTn:true,mode:"",
  favretCon:"India",streetAddres:"",city:"",state:"",postalCode:"",pushNotification:""});

// console.log(formData)

function changeHandler(event) {
  const {name,value,checked,type} = event.target
  setFormData(prevFormData => {

    return {
      ...prevFormData,
    [name]: type ==="checkbox" ? checked : value
    }
  });
}
function submitHadler(event) {
  event.preventDefault();
  console.log("finally printing the entire form ka data .....")
  console.log(formData)
}
  return (
    <div className=" App flex fle items-center outline">

      <form onSubmit={submitHadler}  >


      <label htmlFor="firstName">First Name</label><br></br>
        <input type="text"placeholder='first name'
        onChange={changeHandler}
        id='firstName'
          name='firstName'
          value={formData.firstName}
          className='outline'
        />
        <br/>
        <br />


        <label htmlFor="lastName">Last Name</label><br></br>
        <input type="text"placeholder='last name'
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}
        id='lastName'
          className='outline'
        />
         <br/>
        <br />


        <label htmlFor="email">Email</label><br></br>
        <input type="email"placeholder='Enter the Email'
        onChange={changeHandler}
        name='email'
          id='email'
          value={formData.email}
          className='outline'
        />


<br/>
<br />

<label htmlFor="favretCon">Country</label><br></br>
     <select name="favretCon" id="favretCon" value={formData.favretCon}
      onChange={changeHandler}
      className='outline'
     >
     <option value="scarpio">India</option>
     <option value="fartuner">United States</option>
     <option value="tharr">Canada</option>
     <option value="defender">defender</option>
     <option value="legender">Mexico</option>
</select>
<br/>
<br />

<label htmlFor="streetAddres">Street Addres</label><br></br>
        <input type="streetAddres"placeholder='Enter Street Addres'
        onChange={changeHandler}
        name='streetAddres'
          id='streetAddres'
          value={formData.streetAddres}
          className='outline'
        />


<br/>
<br />

<label htmlFor="city">City</label><br></br>
        <input type="city"placeholder='Enter the city'
        onChange={changeHandler}
        name='city'
          id='city'
          value={formData.city}
          className='outline'
        />
         <br/>
         <br />



<label htmlFor="state">State</label><br></br>
        <input type="state"placeholder='Enter the State'
        onChange={changeHandler}
        name='state'
          id='state'
          value={formData.state}
          className='outline'
        />


<br/>
<br />

<label htmlFor="postalCode">Postal Code</label><br></br>
        <input type="postalCode"placeholder='Enter the Postal Code'
        onChange={changeHandler}
        name='postalCode'
          id='postalCode'
          value={formData.postalCode}
          className='outline'
        />


<br/>
<br />
<fieldset>
  <legend>By Email</legend>
  <div className='flex '>
  <input type="checkbox" onChange = {changeHandler} name='comments' id='comments' checked={formData.comments}
     />
      <div>

     <label htmlFor="comments">
     Comments</label>
     <p> Lorem ipsum dolor sit amet consectetur </p>
     </div>
  </div>

  <div className='flex '>
  <input type="checkbox" onChange = {changeHandler} name='candidates' id='candidates' checked={formData.candidates}
     />
      <div>

     <label htmlFor="candidates">
     Candidates</label>
     <p> Lorem ipsum dolor sit amet consectetur </p>
     </div>
  </div>


  <div className='flex '>
  <input type="checkbox" onChange = {changeHandler} name='offers' id='offers' checked={formData.offers}
     />
      <div>

     <label htmlFor="offers">
     Offers</label>
     <p> Lorem ipsum dolor sit amet consectetur </p>
     </div>
  </div>




</fieldset>
<br/>
<br />
<fieldset>
<legend>Push Notification</legend>
<p> Lorem ipsum dolor sit amet consectetur adipisicing</p>
<input type='radio'
  id='pushEverything'
  name='pushNotification'
  value="Everything"
  onChange={changeHandler}
/>
<label htmlFor="pushEverything">Everything</label>

<br />

<input type='radio'
  id='pushEmail'
  name='pushNotification'
  value="Same as Email"
  onChange={changeHandler}
/>
<label htmlFor="pushEmail">Same as email </label>

<br />
<input type='radio'
  id='nothing'
  name='pushNotification'
  value="No Push Notification "
  onChange={changeHandler}
/>
<label htmlFor="nothing">No Push Notifications </label>
</fieldset>


<button className='bg-blue-500 text-white font-bold rounded py-2 px-4'>Save</button>

      </form>
    </div>
  );
}

export default App;
