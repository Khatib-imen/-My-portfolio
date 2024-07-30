import Slider from "react-slick";
import { sliderProps } from "../sliderProps";
const Testimonials = () => {
  return (
    <div className="testimonial-section m-30px-t sm-m-20px-t pb-5">
      <div className="sub-title m-30px-b">
      </div>
      <Slider {...sliderProps.testimonial} id="client-slider-single">
        <div className="testimonial-col">
          <div className="say">
            <p>
            Understanding Fundamental Networking Concepts.<br/>
Configuring and Managing Basic Routers and Switches.<br/>
Setting Up and Managing VLANs and Inter-VLAN Routing.<br/>
Configuring Basic Wireless Networks and Ensuring Their Security.<br/>
Using Access Control Lists (ACLs) to Secure Networks.<br/>

            </p>
          </div>
          <div className="user">
            <div className="img">
              <img src="static/img/cisco.png" alt title />
            </div>
            <div className="name ml-2">
              <span>CCNA 1,CCNA 2</span>
              <label> Introduction to Networks & SRWE</label>
            </div>
          </div>
        </div>
        <div className="testimonial-col">
          <div className="say">
            <p>
            Conception et Mise en Œuvre de Réseaux Évolutifs.<br/>
Routage Dynamique et Protocoles.<br/>
Technologies WAN et Interconnexion des Réseaux.<br/>
Sécurité et Surveillance du Réseau.<br/>
Qualité de Service (QoS) et Performances Réseau.<br/>
Redondance et Haute Disponibilité.
            </p>
          </div>
          <div className="user">
            <div className="img">
              <img src="static/img/cisco.png" alt title />
            </div>
            <div className="name ml-2">
              <span>CCNA 3,CCNA 4</span>
              <label>Scaling & Connecting Networks</label>
            </div>
          </div>
        </div>
        <div className="testimonial-col">
          <div className="say">
            <p>
            I have gained a thorough understanding of AWS Architecture and core cloud services.
             My certification reflects my ability to manage AWS resources effectively,
              navigate AWS Pricing models, and utilize AWS Support resources.
               This foundational knowledge equips me to design and implement robust cloud solutions,
                positioning me well for further specialization in AWS technologies.
            </p>
          </div>
          <div className="user">
            <div className="img">
              <img src="static/img/aws.png" alt title />
            </div>
            <div className="name ml-2">
              <span>AWS Academy Cloud Foundations</span>
              <label>AWS Academy Graduate</label>
            </div>
          </div>
        </div>
      </Slider>{" "}
    </div>
  );
};
export default Testimonials;
