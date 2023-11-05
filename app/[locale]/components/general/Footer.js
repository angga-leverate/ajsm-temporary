import React from "react";
import Image from "next/image";
import logoMsig from "../../../../public/img/logo_mobile.png";
import sloganAjsm from "../../../../public/img/tagline_new.png";
import memberAjsm from "../../../../public/img/member.png";

function Footer() {
  return (
    <div className="container">
      <footer className="pt-5 ajsm_footer desktop">
        <div className="row ajsm_footernav">
          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Career
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Download
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Marketing Offices
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Terms of Conditions
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          <Image
              alt="AJSM"
              src={memberAjsm}
              className="img-fluid"
              width={300}
            ></Image>
          </div>
        </div>
        <div className="py-4 my-4 border-top">
          <p>
            PT MSIG Life Insurance Indonesia Tbk guarantees the confidentiality
            of customer information that has been provided.
          </p>
          <p>
            PT MSIG Life Insurance Indonesia Tbk is licensed with & supervised
            by OJK and a member of Alternative Dispute Resolution Body Financial
            Services Sector.
          </p>
        </div>
      </footer>
      <footer className="pt-5 ajsm_footer mobile">
        <div className="row mb-5">
          <div className="col">
            <Image
              alt="AJSM"
              src={logoMsig}
              className="img-fluid"
            ></Image>
          </div>
          <div className="col">
          <Image
              alt="AJSM"
              src={sloganAjsm}
              className="img-fluid"
            ></Image>            
          </div>
        </div>
        <div className="row ajsm_sosmed text-center my-5">
          <div className="col">
            <i className="fab fa-facebook"></i>
          </div>
          <div className="col">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="col">
            <i className="fab fa-linkedin-in"></i>
          </div>
          <div className="col">
            <i className="fab fa-youtube"></i>
          </div>                              
        </div>
        <div className="row ajsm_footernav">
          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Career
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Download
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Marketing Offices
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Terms of Conditions
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          <Image
              alt="AJSM"
              src={memberAjsm}
              className="img-fluid"
            ></Image>
          </div>
        </div>
        <div className="py-4 my-4 border-top">
          <p className="mb-0">
            PT MSIG Life Insurance Indonesia Tbk guarantees the confidentiality
            of customer information that has been provided.
          </p>
          <p>
            PT MSIG Life Insurance Indonesia Tbk is licensed with & supervised
            by OJK and a member of Alternative Dispute Resolution Body Financial
            Services Sector.
          </p>
        </div>
      </footer>      
    </div>
  );
}

export default Footer;
