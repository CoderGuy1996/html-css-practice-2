import React from 'react'
import './Job.css';
function Job() {
  return (
    <body>
      <div className="container">
        <div className="apply-box">
          <h1 className='title'>Job Application</h1>
          <form action="">
            <div className="form-container">
            <h2>Personal Information</h2>     
              <div className="form-control">
               <label htmlFor="">First Name</label>  
               <input type="text" />    
              </div>
              <div className="form-control">
            <label htmlFor="">Last Name</label>  
            <input type="text" />    

              </div>
              <div className="form-control">
            <label htmlFor="">Email</label>  
            <input type="text" />    

              </div>
              <div className="form-control">
            <label htmlFor="">Phone Number</label>  
            <input type="text" />    

              </div>
              <div className="form-control">
            <label htmlFor="">Date of Birth</label>  
            <input type="date" value="01-01-2023" />    

              </div>
              <div className="form-control">
            <label htmlFor="">Age</label>  
            <input type="text" />    

            </div>
            <div className="form-control">
             <label htmlFor="">Gender</label>  
             <input type="text" />    
            </div>
            <h2>Address</h2>
            <div className="form-control">
             <label htmlFor="">Current Address</label>  
             <textarea type="text" />    
            </div>
            <div className="form-control">
             <label htmlFor="">City</label>  
             <input type="text" />    
            </div> 
            <div className="form-control">
             <label htmlFor="">Post Office</label>  
             <input type="text" />    
            </div> 
            <div className="form-control">
             <label htmlFor="">District</label>  
             <input type="text" />    
            </div>
            <div className="form-control">
             <label htmlFor="">Pin Code</label>  
             <input type="text" />    
            </div>
            <div className="form-control">
             <label htmlFor="">State</label>  
             <input type="text" />    
            </div>
          </div>
          <h2>Qualifications</h2>
          <div className="form-control">
             <label htmlFor="">Post you want to apply for</label>  
             <input type="text" />    
            </div>
            <div className="form-control">
             <label htmlFor="">Upload your CV</label>  
             <input type="file" />    
            </div>
          <div className="button-conrainer">
            <button>Apply</button>
          </div>
          </form>
          </div>  
      </div>
    </body>
  )
}

export default Job
