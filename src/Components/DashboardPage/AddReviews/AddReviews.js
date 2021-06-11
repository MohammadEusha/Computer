import axios from 'axios';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddReviews = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const { handleSubmit, register } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            from: data.from,
            quote: data.quote,
            img: imageURL
        }

        const url = `https://young-beach-67366.herokuapp.com/addReview`
        console.log(reviewData)

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server side', res))
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
        <div >
            <div className="row bg-light ">
                <div className="col-md-3 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-7 col-sm-12 col-12 mt-5">
                    <div className="text-center">
                        <h1>HI {loggedInUser.name}....Add Reviews Here ....!!!!</h1>
                    </div>
                    <form className="row mt-5 m-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-6">
                            <label for="name" className="form-label"><h4>Your Name</h4></label>
                            <input name="name" ref={register} className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label for="from" className="form-label"><h4>Place You Live</h4></label>
                            <input name="from" className="form-control" ref={register} id="inputPassword4" />
                        </div>
                        <div className="col-md-6 mt-3">
                            <label for="quote" className="form-label"><h4>Your Review About Our Service </h4></label>
                            <input name="quote" className="form-control" ref={register} id="inputEmail4" />
                        </div>
                        <div className="col-md-6 mt-3">
                            <label className="form-label"><h4>Insert Your Image</h4></label>
                            <input className="form-control" type="file" onChange={handleImageUpload} id="formFile" />
                        </div>
                        <div className="col-12 d-flex justify-content-end">
                            <button className="mt-4 btn btn-secondary btn-lg " type="submit" ><FontAwesomeIcon icon={faPlusCircle} />  Add Reviews</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReviews;