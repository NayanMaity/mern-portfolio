import React from "react";

const Contact = ({ data }) => {
    return (
        <section id="contact" className="section">
            <div className="main-subtitle"><i className="las la-envelope"></i><span>CONTACT</span></div>
            <div className="section-heading"><h5 className="text-start">Let's Work <span className="high-light">Together!</span></h5></div>
            <div className="contact-info">
                <h5 className="text-start">
                    <a href={`mailto:${data.email}`}>{data.email || "nayanmaity369@gmail.com"}</a>
                </h5>
            </div>
            <div className="contact-social">
                {data.socials?.instagram && <h5 className="text-start"><a href={data.socials.instagram}>Instagram</a></h5>}
                {data.socials?.facebook && <h5 className="text-start"><a href={data.socials.facebook}>Facebook</a></h5>}
                {data.socials?.twitter && <h5 className="text-start"><a href={data.socials.twitter}>Twitter</a></h5>}
            </div>
        </section>
    );
};

export default Contact;
