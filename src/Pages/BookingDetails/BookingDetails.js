<<<<<<< HEAD
import React from "react";
import { useLoaderData } from "react-router-dom";
import { GiJourney } from "react-icons/gi";
import "./BookingDetails.css";

const BookingDetails = () => {
  const bookingDetails = useLoaderData();
  const { name, price, journey, img, tourCategory, ratings } = bookingDetails;
  console.log(bookingDetails);
  return (
    <div>
      <section className="mt-5 pt-5" >
        <div className="row container m-auto">
          <div className="col-6">
            <div className="border-white rounded p-5 bg-white">
              <div className="d-flex justify-content-between align-items-center fw-bold">
                <p>{name}</p>
                <p className="booking-price">{price}</p>
              </div>
              <div className="text-center border rounded-4 p-2 fw-bold">
                <p>
                  <GiJourney className="me-2" />
                  {journey}
                </p>
                <p>
                  {/* <GiJourney /> */}
                  {tourCategory}
                </p>
              </div>
            </div>
            <div className="border-white rounded mt-5 p-5 bg-white">
              <div className="d-flex justify-content-between align-items-center fw-bold">
                <p>Payment</p>
                <p className="booking-price">Add Your card</p>
              </div>
              <div className="text-center border rounded-4 p-2 mt-4 fw-bold">
                 <button className="btn btn-light" >Make Payment</button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="border-0 bg-white rounded">
              <div className="d-flex justify-content-start align-items-center">
                <img
                  className=" p-2"
                  src={img}
                  alt=""
                  style={{ width: "120px", height: "120px" }}
                />

                <div className="fw-bold">
                  <p className="fs-4">{name}</p>
                  <p>{ratings}</p>
                </div>
              </div>
              <hr />

              <h6 className="fs-small p-2">
                your booking is protected by golobe
              </h6>
              <div className="p-2">
                <h5>Price Details</h5>
                <div>
                  <div className="d-flex justify-content-between align-items-center ">
                    <p className="fw-bold">Base Fare </p>
                    <p className="booking-price">120</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center ">
                    <p className="fw-bold"> Discount </p>
                    <p className="booking-price">0</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center ">
                    <p className="fw-bold">Texes</p>
                    <p className="booking-price">10</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center ">
                    <p className="fw-bold">Service Fee </p>
                    <p className="booking-price">5</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center ">
                    <p className="fw-bold">Total </p>
                    <p className="booking-price">$</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingDetails;
=======
import React from 'react';
import './BookingDetails.css'

const BookingDetails = () => {
    return (
        <div>
          <section>
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
          </section>
        </div>
    );
};

export default BookingDetails;
>>>>>>> a2d00516d6e3d3d16f5809220057a3fc30be053d
