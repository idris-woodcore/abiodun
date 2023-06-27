import React from "react";
import { Cascader } from "antd";
import data from "../data.json";

function Home(): JSX.Element {
  const onChange = (value: any) => {
    console.log(value);
  };
  return (
    <main
      id="content"
      role="main"
      className="main"
      style={{ backgroundColor: "#fbfbfb" }}
    >
      <div className="content container">
        <div className="page-header">
          <div className="row align-items-end">
            <div className="col-sm mb-2 mb-sm-0">
              <h1 className="page-header-title">Profile</h1>
            </div>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-lg-9 mx-auto">
            <div className="d-grid gap-3 gap-lg-5">
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title h4">
                    Please enter your name and pick the Sectors you are
                    currently involved in.
                  </h2>
                </div>

                <div className="card-body">
                  <div>
                    <div className="row mb-4">
                      <label
                        htmlFor="firstNameLabel"
                        className="col-sm-3 col-form-label form-label"
                      >
                        Full name
                        <i
                          className="bi-question-circle text-body ms-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Displayed on public forums, such as Front."
                        ></i>
                      </label>

                      <div className="col-sm-9">
                        <div className="input-group input-group-sm-vertical">
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            id="firstNameLabel"
                            placeholder="Your first name"
                            aria-label="Your first name"
                            value="Mark"
                          />
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            id="lastNameLabel"
                            placeholder="Your last name"
                            aria-label="Your last name"
                            value="Williams"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <label
                        htmlFor="departmentLabel"
                        className="col-sm-3 col-form-label form-label"
                      >
                        Sectors
                      </label>

                      <div className="col-sm-9">
                        {/* <input
                          type="text"
                          className="form-control"
                          name="department"
                          id="departmentLabel"
                          placeholder="Your department"
                          aria-label="Your department"
                        /> */}
                        <Cascader
                          style={{ width: "100%" }}
                          options={data}
                          onChange={onChange}
                          multiple
                          maxTagCount="responsive"
                        />
                      </div>
                    </div>

                    <div className="row align-items-center mb-4">
                      <label className="col-sm-3 col-form-label form-label">
                        Agree to terms
                        <span className="badge bg-primary text-uppercase ms-1"></span>
                      </label>

                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-end">
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="stickyBlockEndPoint"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
