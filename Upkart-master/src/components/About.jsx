import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <h1 className="lead mb-4">
                        UpKaRT is all about footwear. We have been in the shoe business for over 130 years. Yes, you read that correctly, over a century plus a quarter. Today we are proud to offer our best customer service to patrons both online here at UpKaRT.com and in our shoe stores in the Indianapolis, IN area. For more information about the 130+ history of Stout's Footwear, visit our history page.

Stout’s Footwear, the oldest shoe store in the United States and our parent company, proudly opened its doors to the world of ecommerce in 2009. Since starting UpKart.com, we have devoted our energy to providing personable and knowledgable customer service with quick free shipping to every customer. Excellent customer service is the standard of Stout’s Footwear and UpKart.com that will not be compromised. Our goal is to make sure that your demands of quality, style and comfort are fulfilled.

Style, comfort and quality are the focus of the UpKaRT.com buying team. The brands we carry are a reflection of our values which is why we search the world for the finest footwear every season. We know that if you don’t take care of your feet then your whole body suffers. Brands such as New Balance, Munro, Ecco, KEEN, Birkenstock and Sorel epitomize what we are about. Top-quality styles that are crafted with support, style and exquisite materials.
                        </h1>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/home11.jpg" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
