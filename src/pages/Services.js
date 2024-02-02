import Base from "../components/Base";

function Services() {
  return (
    <Base
      title="Services we provide"
      description="In this page we will discuss about the services that we provide."
      buttonEnabled={true}
      buttonLink="/"
      buttonType="warning"
      buttonText="Home"
    >
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-uppercase">Our Electronic Store Properties</h2>
            <p className="lead">
              Welcome to Electro Store, your ultimate destination for cutting-edge electronic products and unparalleled services. Explore the unique properties that set us apart:
            </p>

            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Wide Product Selection</h5>
                <p className="card-text">
                  Dive into our extensive catalog featuring the latest electronic gadgets, appliances, and accessories from renowned brands. Find everything you need all in one place.
                </p>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Expert Guidance</h5>
                <p className="card-text">
                  Our knowledgeable staff is dedicated to providing expert advice and guidance. From product recommendations to technical specifications, we're here to help you make informed decisions.
                </p>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Quality Assurance</h5>
                <p className="card-text">
                  Rest easy knowing that every product in our store undergoes rigorous quality checks. We prioritize delivering reliable and high-performance electronics to our customers.
                </p>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Efficient Customer Support</h5>
                <p className="card-text">
                  Experience seamless customer support from our dedicated team. Whether you have inquiries, need assistance, or encounter issues, we're here to provide timely and effective solutions.
                </p>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Secure and Fast Delivery</h5>
                <p className="card-text">
                  We understand the importance of timely deliveries. Benefit from our secure and swift delivery services, ensuring your products reach you in excellent condition and on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>














    </Base>
  );
}

export default Services;
