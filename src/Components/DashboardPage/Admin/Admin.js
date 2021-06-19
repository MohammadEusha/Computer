import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Sidebar/Sidebar';
import Swal from 'sweetalert2';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    const { handleSubmit, register } = useForm();
    const [imageURL, setImageURL] = useState(null)


    const onSubmit = data => {
        const serviceData = {
            title: data.title,
            description: data.description,
            price: data.price,
            image: imageURL
        }

        const url = `https://young-beach-67366.herokuapp.com/addService`
        console.log(serviceData)

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'New Service Has Been Added',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log('server side', res)
            })
    };


    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '45989dd4589e7b6e62f67e349b536454');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div style={{ backgroundColor: "#12161f", height: "900px", color: "white" }} className="row">
            <div className="col-md-3 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-7 col-sm-12 col-12 mt-5">
                <div className="text-center">
                    <h1>HI {loggedInUser.name}...Add Service Details Here ....!!!!</h1>
                </div>
                <form className="row mt-5 m-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6">
                        <label for="title" className="form-label"><h4>Service Name</h4></label>
                        <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Service Name" name="title" ref={register} className="form-control text-light" />
                    </div>
                    <div className="col-md-6">
                        <label for="description" className="form-label"><h4>Service Details</h4></label>
                        <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Service Details" name="description" className="form-control text-light" ref={register} />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label for="price" className="form-label"><h4>Price</h4></label>
                        <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Service Price" name="price" className="form-control text-light" ref={register} />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label className="form-label"><h4>Insert Service Image</h4></label>
                        <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Your Name" className="form-control text-light" type="file" onChange={handleImageUpload} id="formFile" />
                    </div>
                    <div className="col-12 d-grid ">
                        <button className="mt-4 btn btn-danger btn-lg btn-block" type="submit" ><FontAwesomeIcon icon={faPlusCircle} />  Add Service</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Admin;