import React, { useState } from "react";
import "./Services.css";

const services = [
  {
    id: 1,
    name: "Custom Website Development",
    image: "https://www.hubspot.com/hs-fs/hubfs/web-development.webp?width=595&height=400&name=web-development.webp",
    description: `We specialize in crafting visually stunning and highly functional websites tailored to your business needs. 
    - Responsive and mobile-friendly design 
    - SEO-optimized architecture 
    - Customizable and scalable solutions`,
  },
  {
    id: 2,
    name: "E-Commerce Solutions",
    image: "https://onefoursix.co.uk/wp-content/uploads/2020/06/ecommerce-websites-northampton-web-design-onefoursix-scaled.jpg",
    description: `Looking to take your store online? We design and develop robust e-commerce platforms to help you sell smarter and grow faster. 
    - Seamless user experiences 
    - Secure payment gateways 
    - Inventory and order management`,
  },
  {
    id: 3,
    name: "Web Application Development",
    image: "https://www.mindinventory.com/blog/wp-content/uploads/2022/10/web-app.png",
    description: `We create feature-rich web applications that enhance productivity and user engagement. 
    - Scalable architecture 
    - Interactive interfaces 
    - API integration`,
  },
  {
    id: 4,
    name: "UI/UX Design",
    image: "https://cdn.kwork.com/pics/t3/45/29241499-650d1d257161c.jpg",
    description: `First impressions matter. Our design team ensures your website not only looks great but provides an intuitive experience for your users. 
    - Modern and creative designs 
    - User-focused interface 
    - Brand-consistent visuals`,
  },
  {
    id: 5,
    name: "Website Maintenance and Support",
    image: "https://www.cloudways.com/blog/wp-content/uploads/How-to-Sell-Website-Maintenance-Services.jpg",
    description: `Your website needs regular updates to stay secure and perform at its best. 
    - Performance optimization 
    - Security updates 
    - Content management`,
  },
  {
    id: 6,
    name: "SEO and Digital Marketing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKVvbqannw6kR10VPU9Da_KkALK7i50iZdQ&s",
    description: `We help your business get discovered online through strategic digital marketing solutions. 
    - On-page and off-page SEO 
    - Content marketing 
    - Social media integration`,
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => handleCardClick(service)}
          >
            <div className="image-container">
              <img
                src={service.image}
                alt={service.name}
                className="service-image"
              />
              <div className="service-name">{service.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal on inner click
          >
            <h2 className="modal-title">{selectedService.name}</h2>
            <p className="modal-description">{selectedService.description}</p>
            <button className="modal-close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
