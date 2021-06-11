import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';


const AddAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { handleSubmit, register } = useForm();


    const onSubmit = data => {
        const adminData = {
            name: data.name,
            email: data.email,
        }

        const url = `https://young-beach-67366.herokuapp.com/addAdmin`
        console.log(adminData)

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(adminData)
        })
            .then(res => console.log('server side', res))
    };
    return (
        <div>
            <div className="row bg-light">
                <div className="col-md-3 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-7 col-sm-12 col-12 mt-5">
                    <div className="text-center">
                        <h1>HI {loggedInUser.name} ...Add Admin Here ....!!!!</h1>
                    </div>
                    <form className=" mt-5 m-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-8">
                            <label for="name" className="form-label"><h4>Admin Name </h4></label>
                            <input name="name" ref={register} className="form-control" />
                        </div>
                        <div className="col-md-8 mt-4">
                            <label for="email" className="form-label"><h4>Admin Email Address</h4></label>
                            <input name="email" className="form-control" ref={register} />
                        </div>
                        <div className="col-12 d-flex justify-content-start">
                            <button className="mt-4 btn btn-secondary btn-lg " type="submit" ><FontAwesomeIcon icon={faPlusCircle} />  Add Admin</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;