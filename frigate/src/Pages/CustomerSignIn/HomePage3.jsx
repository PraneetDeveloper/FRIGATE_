import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './HomePage3.css';

const HomePage3 = () => {
  
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const formSubmit = (data) => {
    console.log("data",data);
  };
  console.log("errors",errors);

  return (
    <div>
      {/* ---------------------- Home Page 3 Content Start ----------------------- */}
      <div className='Home_Page3_content pt-3'>
          {/* Hoem_Page_3 - Heading H1 */}
          <h3 className='col-12 text-center text-white'> Create Your Coustomer Account</h3>
          {/* Home_Page_3 - Paragraph */}
          <p className='col-12 text-center text-white'>Have a customer account? 
          <Link className='signin' style={{textDecoration: 'none', color: 'black' }} to ='/signin'> sign in.</Link></p>

          {/* ----------------------- Home_Page_3_ Customer_Form---------------------- */}
         <div className='container-fluid px-auto mt-5 d-sm-flex justify-content-sm-center d-md-flex justify-content-md-center d-lg-flex justify-content-lg-center'>

          {/* Form___Paragraph_1 */}
          <form
          onSubmit={handleSubmit(formSubmit)} 
          className='Home_Page3_Form py-3 col-sm-12 col-md-8 col-lg-7 px-lg-4 px-3 bg-light'
          >
            <p className='mx-lg-5 ps-lg-3 mx-md-4 ps-md-3'> Create an account to get started.<span className='text-primary'>Learn More</span> </p>

           {/* First_Name & Last_Name */}
           <div className='d-flex flex-column'>
            {/* First_Name */}
            <div className='d-flex flex-column mx-lg-auto mx-md-auto col-md-10 col-sm-10 col-lg-10'>
              <label className='mb-2 fw-bold'>First Name <span className='star'>*</span> </label>
              <input
              type="text"
              name="firstname"  
              className='Form_Input mb-3  col-sm-12 col-md-10 col-lg-10'
              placeholder='Enter First Name'
              {...register("firstname", {
                required:true,
               })}
              />
              <span className='mb-2 error'>{errors.firstname ? 'First Name is required' : ''} </span>
            </div>
            
            {/* Last_Name */}
            <div className='d-flex flex-column mx-lg-auto mx-md-auto col-md-10 col-sm-10 col-lg-10'>
            <label className='mb-2 fw-bold'>Last Name <span className='star'>*</span> </label>
              <input
              type="text"
              name="Last Name"  
              className='Form_Input mb-3 col-sm-12 col-md-10 col-lg-10'
              placeholder='Enter Last Name'
              {...register("lastname", {
                required:true,
               })}
              />
              <span className='mb-2 error'>{errors.lastname ? 'Last Name is required' : ''} </span>
            </div>
           </div>
           {/* First_Name & Last_Name -------End */}


           {/* Email_Id & Phone_No */}
           <div className=' d-flex flex-column'>

               {/* Phone_Number */}
            <div className='d-flex flex-column mx-lg-auto mx-md-auto col-md-10 col-sm-10 col-lg-10'>
            <label className='mb-2 fw-bold'>Phone Number <span className='star'>*</span> </label>
              <input
              type="text"
              name="Mobile Number"  
              className='Form_Input mb-3 col-sm-12 col-md-10 col-lg-10'
              placeholder='Enter Your Mobile Number'
              {...register("mobilenumber", {
                required:true,
               })}
              />
              <span className='mb-2 error'>{errors.mobilenumber ? 'Mobile Number is required' : ''} </span>
            </div>


            {/* Email_Id */}
            <div className='d-flex flex-column mx-lg-auto mx-md-auto col-md-10 col-sm-10 col-lg-10'>
              <label className='mb-2 fw-bold'>Email (Account Username) <span className='star'>*</span> </label>
              <input
              type="text"
              name="Email"  
              className='Form_Input mb-3 col-sm-12 col-md-10 col-lg-10'
              placeholder='Enter Your Email'
              {...register("email", {
                required:true,
               })}
              />
              <span className='mb-2 error'>{errors.email ? 'Email is required' : ''} </span>
            </div>
            
           </div>
           {/* Email_Id & Phone_Number -------End */}


           {/* Password & Company_File */}
           <div className=' d-md-flex flex-md-row d-lg-flex flex-lg-row'>
            {/* Password */}
            <div className='d-flex flex-column mx-lg-auto mx-md-auto col-md-10 col-sm-10  col-lg-10'>
              <label className='mb-2 fw-bold'>Password <span className='star'>*</span> </label>
              <input
              type="password"
              name="Password"  
              className='Form_Input mb-3 col-sm-12 col-md-10 col-lg-10'
              placeholder='Enter Your Password'
              {...register("password", {
                required:true,
               })}
              />
              <span className='mb-2 error'>{errors.password ? 'Password is required' : ''} </span>
            </div>

            </div>
            {/* Password Ends */}

           {/* Last_CheckBox */}
           <div className='d-flex flex-row mt-4 mx-lg-5 ps-lg-3 mx-md-4 ps-md-3'>
            <input 
            className='mt-lg-1 mt-md-2'
            type="checkbox"
            />
            <p className='mx-2 fw-bolder font-monospace fs-6'> Remember Me </p>
           </div>

           <div className='d-flex justify-content-center mt-4'>
           <button type='submit' className='btn-sm mx-lg-auto'>Register Now</button>
           </div>

           </form>
        </div>
        {/* ----------------------- Home_Page1_ Supplier_Form End ---------------------- */}
        </div>

        {/* ---------------------------- Triangle_Polygon------------------------------- */}

          <div className='Triangle_Polygon'>

          </div>    
      {/* ---------------------- Home Page 3 Content End --------------------------*/}
    </div>
  )
}

export default HomePage3
