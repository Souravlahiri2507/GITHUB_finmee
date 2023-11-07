import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-footer">
          <div className="footer-links">
            <div class="footer-section">
              <div class="footer-section-header">
                <i class="icon-github"></i>
                <span class="footer-section-title">© 2023 GitHub, Inc.</span>
              </div>
            </div>
            <div class="footer-section">
              <a href="/blog">Blog</a>
              <a href="/about">About</a>
              <a href="/shop">Shop</a>
              <a href="/contact">Contact</a>
            </div>
            <div class="footer-section">
              <a href="/api">API</a>
              <a href="/training">Training</a>
              <a href="/status">Status</a>
              <a href="/security">Security</a>
            </div>

            <div class="footer-section">
              <a href="/terms">Terms</a>
              <a href="/privacy">Privacy</a>
              <a href="/docs">Docs</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
