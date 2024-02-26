let appHeader = ` 
<!-- Spinner Start -->
<div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
   <div class="spinner-border position-relative text-primary" style="width: 6rem; height: 6rem;" role="status"></div>
   <i class="fa fa-laptop-code fa-2x text-primary position-absolute top-50 start-50 translate-middle"></i>
</div>
<!-- Spinner End -->


<!-- Topbar Start -->
<div class="container-fluid bg-light px-0 wow fadeIn" data-wow-delay="0.1s">
   <div class="row gx-0 align-items-center d-none d-lg-flex">
       <div class="col-lg-6 px-5 text-start">
           <ol class="breadcrumb mb-0">
               <li class="breadcrumb-item"><a class="small text-secondary" href="#">Home</a></li>
               <li class="breadcrumb-item"><a class="small text-secondary" href="#">Career</a></li>
               <li class="breadcrumb-item"><a class="small text-secondary" href="#">Terms</a></li>
               <li class="breadcrumb-item"><a class="small text-secondary" href="#">Privacy</a></li>
           </ol>
       </div>
       <div class="col-lg-6 px-5 text-end">
           <small>Follow us:</small>
           <div class="h-100 d-inline-flex align-items-center">
               <a class="btn-square text-primary border-end rounded-0" href=""><i class="fab fa-facebook-f"></i></a>
               <a class="btn-square text-primary border-end rounded-0" href=""><i class="fab fa-twitter"></i></a>
               <a class="btn-square text-primary border-end rounded-0" href=""><i class="fab fa-linkedin-in"></i></a>
               <a class="btn-square text-primary pe-0" href=""><i class="fab fa-instagram"></i></a>
           </div>
       </div>
   </div>
</div>

<!-- Brand & Contact Start -->
    <div class="container-fluid py-4 px-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="row align-items-center top-bar">
            <div class="col-lg-4 col-md-12 text-center text-lg-start">
                <a href="" class="navbar-brand m-0 p-0">
                    <h1 class="fw-bold text-primary m-0"><i class="fa fa-laptop-code me-3"></i>Dubai Vision Pro</h1>
                    <!-- <img src="img/logo.png" alt="Logo"> -->
                </a>
            </div>
            <div class="col-lg-8 col-md-7 d-none d-lg-block">
                <div class="row">
                    <div class="col-4">
                        <div class="d-flex align-items-center justify-content-end">
                            <div class="flex-shrink-0 btn-lg-square border rounded-circle">
                                <i class="far fa-clock text-primary"></i>
                            </div>
                            <div class="ps-3">
                                <p class="mb-2">Opening Hour</p>
                                <h6 class="mb-0">Mon - Fri, 9:00 AM - 6:00 PM</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="d-flex align-items-center justify-content-end">
                            <div class="flex-shrink-0 btn-lg-square border rounded-circle">
                                <i class="fa fa-phone text-primary"></i>
                            </div>
                            <div class="ps-3">
                                <p class="mb-2">Call Us</p>
                                <h6 class="mb-0">+971 50 816 9951</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="d-flex align-items-center justify-content-end">
                            <div class="flex-shrink-0 btn-lg-square border rounded-circle">
                                <i class="far fa-envelope text-primary"></i>
                            </div>
                            <div class="ps-3">
                                <p class="mb-2">Email Us</p>
                                <h6 class="mb-0">contact@dubaivisionpro.com</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Brand & Contact End -->


    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-primary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <a href="#" class="navbar-brand ms-3 d-lg-none">MENU</a>
        <button type="button" class="navbar-toggler me-3" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav me-auto p-3 p-lg-0">
                <a href="index.html" class="nav-item nav-link active">Home</a>
                <a href="about.html" class="nav-item nav-link">About Us</a>
                <a href="service.html" class="nav-item nav-link">Services</a>
                <a href="project.html" class="nav-item nav-link">Projects</a>
                <!--<div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu border-0 rounded-0 rounded-bottom m-0">
                        <a href="feature.html" class="dropdown-item">Features</a>
                        <a href="team.html" class="dropdown-item">Our Team</a>
                        <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                        <a href="404.html" class="dropdown-item">404 Page</a>
                    </div>
                </div>-->
                <a href="contact.html" class="nav-item nav-link">Contact Us</a>
            </div>
            <a href="./contact.html" class="btn btn-sm btn-light rounded-pill py-2 px-4 d-none d-lg-block">Get Started</a>
        </div>
    </nav>
    <!-- Navbar End -->
`;


document.getElementById("app-header").innerHTML = appHeader;


let appFooter = `
<!-- Footer Start -->
<div class="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="row g-5">
            <div class="col-lg-3 col-md-6">
                <h5 class="text-light mb-4">Address</h5>
                <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Office 620, 99 Commons Building, Puito Road, Tuenmun, NT Hong Kong</p>
                <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+971 50 816 9951</p>
                <p class="mb-2"><i class="fa fa-envelope me-3"></i>Contact@dubaivisionpro.com</p>
                <div class="d-flex pt-2">
                    <a class="btn btn-square btn-outline-secondary rounded-circle me-1" href=""><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-square btn-outline-secondary rounded-circle me-1" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-square btn-outline-secondary rounded-circle me-1" href=""><i class="fab fa-youtube"></i></a>
                    <a class="btn btn-square btn-outline-secondary rounded-circle me-0" href=""><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <h5 class="text-light mb-4">Quick Links</h5>
                <a class="btn btn-link" href="./about.html">About Us</a>
                <a class="btn btn-link" href="./contact.html">Contact Us</a>
                <a class="btn btn-link" href="./service.html">Our Services</a>
                <a class="btn btn-link" href="./terms.html">Terms & Condition</a>
                <a class="btn btn-link" href="./support.html">Support</a>
            </div>
            <div class="col-lg-3 col-md-6">
                <h5 class="text-light mb-4">Gallery</h5>
                <div class="row g-2">
                    <div class="col-4">
                        <img class="img-fluid rounded" src="img/project-1.jpg" alt="Image">
                    </div>
                    <div class="col-4">
                        <img class="img-fluid rounded" src="img/project-2.jpg" alt="Image">
                    </div>
                    <div class="col-4">
                        <img class="img-fluid rounded" src="img/project-3.jpg" alt="Image">
                    </div>
                    <div class="col-4">
                        <img class="img-fluid rounded" src="img/project-4.jpg" alt="Image">
                    </div>
                    <div class="col-4">
                        <img class="img-fluid rounded" src="img/project-5.jpg" alt="Image">
                    </div>
                    <div class="col-4">
                        <img class="img-fluid rounded" src="img/project-6.jpg" alt="Image">
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <h5 class="text-light mb-4">Newsletter</h5>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div class="position-relative mx-auto" style="max-width: 400px;">
                    <input class="form-control bg-transparent border-secondary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
                    <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid copyright">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a href="#">Dubai Vision Pro</a>, All Right Reserved.
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                    Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                    <br>Distributed By: <a class="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Footer End -->
`;

document.getElementById("app-footer").innerHTML = appFooter;