import React from 'react';


const Crud = () => {
    return (
        <div className='d-flex justify-content-center'>
            <form className='col-3 margin-auto'>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control"  placeholder="Enter email" />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input type="email" className="form-control"  placeholder="Password" />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </div>
    )
}

export default Crud
