import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./DisplayPackage.css";

const DisplayPackage = ({ pk }) => {
  return (
    <div>
      <div
        class="card mb-3"
        style={{ "max-width": "840px", height: "258.5px" }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={pk.img}
              class="p-2 rounded-5"
              style={{ width: "300px", height: "258.5px" }}
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div className="d-flex justify-content-between align-content-center ">
                <h5 class="card-title package-name">{pk.name}</h5>
                <h5 class="card-title package-price">{pk.price}</h5>
              </div>

              <p class="card-text stay">{pk.stay}</p>
              <div className="d-flex justify-content-start align-items-center ">
                <div>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                </div>
                <p class="card-text stay mt-2 ms-1">
                  {pk.ratings} start reviews
                </p>
              </div>
              <div className="d-flex align-content-center justify-content-between">
                <p className="mt-3">{pk.journey}</p>
                <h5 class="package-price">{pk.tourCategory}</h5>
              </div>
              <p class="mt-2 d-flex justify-content-start align-items-center gap-3">
                <Link to="/" className="border rounded-2 ps-2 pe-2">
                  <FaHeart />
                </Link>{" "}
                <Link
                  to={`/packages/${pk._id}`}
                  class=" btn btn-info package-details-button"
                  style={{ width: "428px", height: "38px" }}
                >
                  View Details
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="text-center">
        <button className="btn btn-outline-dark">see more</button>
      </div> */}
    </div>
  );
};

export default DisplayPackage;
