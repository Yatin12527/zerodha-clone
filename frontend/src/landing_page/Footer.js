import React from "react";

function Footer() {
  return (
    <footer className="bg-light text-muted mt-5 pt-5 border-top">
      <div className="container">
        {/* Top Row: Logo + Links */}
        <div className="row gy-4">
          {/* Logo + Socials */}
          <div className="col-md-3">
            <img
              src="media/images/logo.svg"
              alt="Zerodha logo"
              style={{ width: "55%", marginBottom: "10px" }}
            />
            <p className="small mb-4">
              © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="d-flex gap-3 fs-5 text-secondary">
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-telegram"></i>
              <i className="fa-brands fa-whatsapp"></i>
            </div>
          </div>

          {/* Company */}
          <div className="col-md-3">
            <h6 className="fw-bold text-dark mb-3">Company</h6>
            <ul className="list-unstyled small">
              <li>
                <a
                  href="#"
                  className="text-muted text-decoration-none d-block mb-1"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted text-decoration-none d-block mb-1"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted text-decoration-none d-block mb-1"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted text-decoration-none d-block mb-1"
                >
                  Referral program
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted text-decoration-none d-block mb-1"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted text-decoration-none d-block mb-1"
                >
                  Press & media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted text-decoration-none d-block mb-1"
                >
                  Zerodha Cares (CSR)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted text-decoration-none d-block mb-1"
                >
                  Technology
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3">
            <h6 className="fw-bold text-dark mb-3">Support</h6>
            <ul className="list-unstyled small">
              <li>
                <a
                  href="#"
                  className="text-muted text-decoration-none d-block mb-1"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted text-decoration-none d-block mb-1"
                >
                  Support portal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted text-decoration-none d-block mb-1"
                >
                  Z-Connect blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted text-decoration-none d-block mb-1"
                >
                  List of charges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted text-decoration-none d-block mb-1"
                >
                  Downloads & resources
                </a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className="col-md-3">
            <h6 className="fw-bold text-dark mb-3">Account</h6>
            <ul className="list-unstyled small">
              <li>
                <a
                  href="#"
                  className="text-muted text-decoration-none d-block mb-1"
                >
                  Open an account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted text-decoration-none d-block mb-1"
                >
                  Fund transfer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted text-decoration-none d-block mb-1"
                >
                  60 day challenge
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Legal Section */}
        <div className="small text-secondary lh-base">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633. CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019. Registered
            Address: #153/154, 4th Cross, Dollars Colony, J.P Nagar 4th Phase,
            Bengaluru - 560078.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints: Name, PAN, Address,
            Mobile Number, E-mail ID.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all related documents carefully before investing.
          </p>

          <p>
            Attention investors: Stock brokers can accept securities as margins
            from clients only by way of pledge in the depository system w.e.f
            September 01, 2020. Update your e-mail and phone number with your
            stock broker / depository participant.
          </p>

          <div className="d-flex flex-wrap gap-3 mt-3">
            <a href="#" className="text-decoration-none text-secondary">
              NSE
            </a>
            <a href="#" className="text-decoration-none text-secondary">
              BSE
            </a>
            <a href="#" className="text-decoration-none text-secondary">
              MCX
            </a>
            <a href="#" className="text-decoration-none text-secondary">
              Terms & conditions
            </a>
            <a href="#" className="text-decoration-none text-secondary">
              Policies & procedures
            </a>
            <a href="#" className="text-decoration-none text-secondary">
              Privacy policy
            </a>
            <a href="#" className="text-decoration-none text-secondary">
              Investor charter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
