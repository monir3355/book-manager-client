import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="pb-4 position-relative">
        <div className="bg-white border rounded-5">
          <section className="p-4 text-center w-100">
            {/* <!-- Hero --> */}
            <div
              className="p-5 text-center bg-image rounded-3"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1521776943084-9a3512bd6311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
                height: "400px",
              }}
            >
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white w-75">
                    <h1 className="mb-3">Lorem ipsum dolor sit</h1>
                    <h6 className="mb-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis, perspiciatis. Laborum possimus voluptatum
                      repudiandae eius!
                    </h6>
                    <a
                      className="btn btn-outline-light btn-lg"
                      href="#!"
                      role="button"
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Hero --> */}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Banner;
