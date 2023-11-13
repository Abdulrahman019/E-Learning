import React from 'react'

export default function Navbar() {
  return (
    <nav class="navbar bg-primary text-light mb-3">
      <div class="navbar-logo">
        <a class="navbar-brand" href="./index.html"
          ><span class="logo">AS</span> Education</a
        >
        <button class="navbar-toggler btn btn-sm btn-close-white">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
      <div class="navbar-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="./Pages/home.html">Home</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="./Pages/about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./Pages/contact.html">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./Pages/logIn.html">Log in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./Pages/register.html">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
