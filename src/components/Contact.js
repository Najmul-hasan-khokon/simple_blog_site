const Contact = () => (
    <section className="contact-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-3" />
                <div className="col-lg-6 ">
                    <div className="contact-items">
                        <h2 className="mb-3 text-dark">Ready to get started?</h2>
                        <form action="#" className="Forms">
                            <input
                                className="form-control form-control-lg my-3"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter name"
                            />
                            <input
                                className="form-control form-control-lg mb-3"
                                type="email"
                                name="name"
                                id="name"
                                placeholder="Enter email"
                            />
                            <textarea
                                className="form-control form-control-sm"
                                name="textarea"
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Message"
                            />
                            <button className="btn btn-danger text-white my-3" type="button">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3" />
            </div>
        </div>
    </section>
);

export default Contact;
