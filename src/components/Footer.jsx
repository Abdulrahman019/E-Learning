import React from 'react'

export default function Footer() {
  return (
    <footer class="footer bg-primary text-light">
      <div class="footer-content d-flex">
        <div class="footer-logo">
          <a class="navbar-brand" href="#"
            ><span class="logo">AS</span> <span>Education</span></a
          >
        </div>
        <section class="footer-links">
          <h3 class="footer-title mb-1">Quick Links</h3>
          <ul class="footer-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
          </ul>
        </section>
        <section class="footer-social">
          <h3 class="footer-title mb-1">Follow us on Social</h3>
          <ul class="footer-nav">
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fa-brands fa-github mr-1"></i>GitHub</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fa-brands fa-twitter mr-1"></i>Twitter</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fa-brands fa-instagram mr-1"></i>Instagram</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fa-brands fa-facebook mr-1"></i>Facebook</a
              >
            </li>
          </ul>
        </section>
      </div>
    </footer>
  )
}
