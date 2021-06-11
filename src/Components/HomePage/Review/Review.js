import React, { useEffect, useState } from 'react';
import ReviewInfo from '../ReviewInfo/ReviewInfo';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {

        fetch('https://young-beach-67366.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    return (
        <div className="mt-5">
            <div className="container">
                <div className="text-center">
                    <h1 style={{ fontSize: "65px" }} className="text-center">Our Customers Reviews </h1>
                </div>
                <div className="row d-flex justify-content-center">

                    {
                        reviews.map(review => <ReviewInfo review={review} key={review.name} />)
                    }


                </div>
            </div>
        </div>
    );
};

export default Review;