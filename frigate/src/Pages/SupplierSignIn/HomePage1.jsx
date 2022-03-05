import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './HomePage1.css';

export const HomePage1 = () => {
    
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
      <div className='Home_Page1'>

      {/* ------------------------- Home_Page_1_Content---------------------------- */}
        <div className='Home_Page1_content pt-3'>
          {/* Hoem_Page_1 - Heading H1 */}
          <h3 className='col-12 text-center text-white'> Become a Frigate Supplier</h3>
          {/* Home_Page_1 - Paragraph */}
          <p className='col-12 text-center text-white'>Have a supplier account? 
          <Link className='signin' style={{textDecoration: 'none', color: 'black' }} to ='/signin'> sign in.</Link></p>

          {/* ----------------------- Home_Page1_ Supplier_Form---------------------- */}
         <div className='container-fluid mt-5 d-sm-flex justify-content-sm-center d-lg-flex justify-content-lg-center d-md-flex justify-content-md-center'>

          {/* Form___Paragraph_1 */}
          <form
          onSubmit={handleSubmit(formSubmit)} 
          className='Home_Page1_Form py-3 col-sm-12 col-md-8 col-lg-7 px-lg-5 px-3 bg-light'
          >
            <p> Create an account to get started.<span className='text-primary'>Learn More</span></p>

             {/* Company_Name */}
           <div className='d-flex flex-column col-sm-10 col-md-11 col-lg-11'>
            <label className='mb-2 fw-bold'> Company Name <span className='star'>*</span> </label>
            <input
            type="text"
            name="companyname" 
            className='Form_Input mb-3 col-12'
            placeholder='Enter Your Company Name'
            {...register("companyname", {
             required:true,
            })}
            />
            <span className='mb-2 error'>{errors.companyname ? 'Company Name is required' : ''} </span>
           </div>
          

           {/* First_Name & Last_Name */}
           <div className=' d-md-flex flex-md-row d-lg-flex flex-lg-row'>
            {/* First_Name */}
            <div className='d-flex flex-column col-sm-10 col-lg-6 col-md-6'>
              <label className='mb-2 fw-bold'>First Name <span className='star'>*</span> </label>
              <input
              type="text"
              name="firstname"  
              className='Form_Input mb-3 col-sm-12 col-md-10 col-lg-10'
              placeholder='Enter First Name'
              {...register("firstname", {
                required:true,
               })}
              />
              <span className='mb-2 error'>{errors.firstname ? 'First Name is required' : ''} </span>
            </div>
            
            {/* Last_Name */}
            <div className='d-flex flex-column col-sm-10 col-lg-6 col-md-6'>
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
           <div className=' d-md-flex flex-md-row d-lg-flex flex-lg-row'>
            {/* Email_Id */}
            <div className='d-flex flex-column col-sm-10 col-lg-6 col-md-6'>
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
            
            {/* Phone_Number */}
            <div className='d-flex flex-column col-sm-10 col-lg-6 col-md-6'>
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
           </div>
           {/* Email_Id & Phone_Number -------End */}


           {/* Password & Company_File */}
           <div className=' d-md-flex flex-md-row d-lg-flex flex-lg-row'>
            {/* Password */}
            <div className='d-flex flex-column col-sm-10 col-lg-6 col-md-6'>
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
            
            {/* Company_File */}
            <div className='col-sm-6 col-md-10 col-lg-6'>
            <label className='mb-1 fw-bold'>Company Profile <span className='star'>*</span> </label>
            <div className='mt-2 d-flex flex-row'>
              <button type='submit' className='btn'>Choose File</button>
              <p className='mt-1 mx-3 col-md-6'>No File Chosen</p>
            </div>
            </div>
           </div>
           {/* Password & Company_File -------End */}
 

           {/* Process_Work & Web_URL */}
           <div className=' d-md-flex flex-md-row d-lg-flex flex-lg-row'>
            {/* Process_Work */}
            <div className='d-flex flex-column col-sm-10 col-lg-6 col-md-6'>
              <label className='mb-3 fw-bold'>Processes You Work With <span className='star'>*</span> </label>

              <div className='d-flex flex-row mb-1 mx-3'>
              <input className='mt-2' type="checkbox" />
              <label className='mx-3'>CNC</label>
              </div>

              <div className='d-flex flex-row mb-1 mx-3'>
              <input className='mt-2' type="checkbox" />
              <label className='mx-3'>Sheet Metal Fabrication</label>
              </div>

              <div className='d-flex flex-row mb-1 mx-3'>
              <input className='mt-2' type="checkbox" />
              <label className='mx-3'>3D Printing</label>
              </div>
              
              <div className='d-flex flex-row mb-1 mx-3'>
              <input className='mt-2 check' type="checkbox" />
              <label className='mx-3'>Vacuum Casting</label>
              </div>

              <div className='d-flex flex-row mb-1 mx-3'>
              <input className='mt-2' type="checkbox" />
              <label className='mx-3'>Injection Molding</label>
              </div>

            </div>
            
            {/* Web_URL */}
            <div className='d-flex flex-column col-sm-10 col-lg-6 col-md-6'>
            <label className='mb-2 fw-bold'>Web URL <span className='star'>*</span> </label>
              <input
              type="text"
              name="Web URL"  
              className='Form_Input mb-3 col-sm-12 col-md-10 col-lg-10'
              placeholder='Enter Your Mobile Number'
              {...register("url", {
                required:true,
               })}
              />
               <span className='mb-1 error'>{errors.url ? 'Web URL is required' : ''} </span>
            </div>
           </div>
           {/* Password & Company_File -------End */}


           {/* Last_CheckBox */}
           <div className='d-flex flex-row mt-4'>
            <input 
            className='mt-2'
            type="checkbox"
            />
            <p className='mx-2 fw-bolder font-monospace fs-6'> I reviewed and agree to Frigate Terms of Service and Privacy Policy</p>
           </div>

           <div className='d-flex justify-content-center mt-4'>
           <button type='submit' className='btn-sm '>Register Now</button>
           </div>

           </form>
        </div>
        {/* ----------------------- Home_Page1_ Supplier_Form End ---------------------- */}
        </div>

        {/* ---------------------------- Triangle_Polygon------------------------------- */}

          <div className='Triangle_Polygon'>

          </div>
          <Link to='/home3'>Home 3</Link>
        {/* ----------------------- Home Page 3 Content End -------------------------- */}
      </div>
    );
  }

  export default HomePage1;

