import React from "react"

function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-black text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="https://www.facebook.com/slamidwestusa/" target="_blank" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>SRI LANKA ASSOCIATION
                </h6>
                <p>
                   Add something here
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Link1
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Link2
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Link3
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Link1
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Link2
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Link3
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Missouri, MO 00000, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  ex@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 XXXXXXX
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
        //   style={{backgroundColor: rgba(0, 0, 0, 0.05)}}
        >
          © 2021 Copyright :
          <a className="text-reset fw-bold" href="!#">
            SLA
          </a>
        </div>
      </footer>
    </>
  );
}


export default Footer