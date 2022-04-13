import React from 'react'

const Services = () => {
  return (
    <div>
        <section id="service">
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="fs-5 text-center mb-0">Our Services</h3>
                        <h1 className="display-6 text-center mb-4">Our <b>Awesome</b> Services</h1>
                        <hr className="w-25 mx-auto"/>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-edit fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Project / Designer</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Furniture Maintenance</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-calendar-check-o fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Event and Value</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services