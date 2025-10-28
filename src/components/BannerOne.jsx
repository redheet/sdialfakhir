import Link from "next/link";

const BannerOne = () => {
  return (
    <section className="banner py-80 position-relative overflow-hidden">
      <img
        src="assets/images/shapes/shape1.png"
        alt=""
        className="shape one animation-rotation"
      />
      <img
        src="assets/images/shapes/shape2.png"
        alt=""
        className="shape two animation-scalation"
      />
      <img
        src="assets/images/shapes/shape3.png"
        alt=""
        className="shape three animation-walking"
      />
      <img
        src="assets/images/shapes/shape4.png"
        alt=""
        className="shape four animation-scalation"
      />
      <img
        src="assets/images/shapes/shape5.png"
        alt=""
        className="shape five animation-walking"
      />
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-xl-6">
            <div className="banner-content pe-md-4">
              <div className="flex-align gap-8 mb-16" data-aos="fade-down">
                <span className="w-8 h-8 bg-main-600 rounded-circle" />
                <h5 className="text-main-600 mb-0"> AL-FAKHIR SCHOOL</h5>
              </div>
              <h1 className="display2 mb-24 wow bounceInLeft">
                SDI{" "}
                <span
                  className="text-main-two-600 wow bounceInRight"
                  data-wow-duration="2s"
                  data-wow-delay=".5s"
                >
                  Modern
                </span>{" "}
                <span
                  className="wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".5s"
                >
                  Al-Fakhir
                </span>
              </h1>
              <p className="text-neutral-500 wow bounceInUp">
                SD Islam yang mengusung konsep modern, mengadopsi model kelas
                dan program internasional, namun tetap mengutamakan pendidikan
                karakter, moral, akhlak dan nilai-nilai keislaman.
              </p>
              <div className="buttons-wrapper flex-align flex-wrap gap-24 mt-40">
                <Link
                  href="https://forms.gle/kungShkai1iju2Yq9"
                  className="btn btn-main rounded-pill flex-align gap-8"
                  data-aos="fade-right"
                  target="_blank"
                >
                  Pendaftaran
                  <i className="ph-bold ph-arrow-up-right d-flex text-lg" />
                </Link>
                <Link
                  href="/#"
                  className="btn btn-outline-main rounded-pill flex-align gap-8"
                  data-aos="fade-left"
                >
                  Tentang Sekolah
                  <i className="ph-bold ph-arrow-up-right d-flex text-lg" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="banner-thumb position-relative">
              <img
                src="assets/images/thumbs/zaidan.webp"
                alt=""
                className="banner-thumb__img rounded-12 wow bounceIn"
                data-wow-duration="3s"
                data-wow-delay=".5s"
                data-tilt=""
                data-tilt-max={12}
                data-tilt-speed={500}
                data-tilt-perspective={5000}
                data-tilt-full-page-listening=""
                data-tilt-scale="1.02"
              />
              <img
                src="assets/images/shapes/curve-arrow.png"
                alt=""
                className="curve-arrow position-absolute"
              />
              <div
                className="banner-box one px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg d-inline-block"
                data-aos="fade-down"
              >
                <span className="text-main-600">10+</span> Murid terdaftar
                {/* <div className="enrolled-students mt-12">
                  <img
                    src="assets/images/thumbs/enroll-student-img1.png"
                    alt=""
                    className="w-48 h-48 rounded-circle object-fit-cover transition-2"
                  />
                  <img
                    src="assets/images/thumbs/enroll-student-img2.png"
                    alt=""
                    className="w-48 h-48 rounded-circle object-fit-cover transition-2"
                  />
                  <img
                    src="assets/images/thumbs/enroll-student-img3.png"
                    alt=""
                    className="w-48 h-48 rounded-circle object-fit-cover transition-2"
                  />
                  <img
                    src="assets/images/thumbs/enroll-student-img4.png"
                    alt=""
                    className="w-48 h-48 rounded-circle object-fit-cover transition-2"
                  />
                  <img
                    src="assets/images/thumbs/enroll-student-img5.png"
                    alt=""
                    className="w-48 h-48 rounded-circle object-fit-cover transition-2"
                  />
                  <img
                    src="assets/images/thumbs/enroll-student-img6.png"
                    alt=""
                    className="w-48 h-48 rounded-circle object-fit-cover transition-2"
                  />
                </div> */}
              </div>
              <div
                className="banner-box two px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg flex-align d-inline-flex gap-16"
                data-aos="fade-up"
              >
                <span className="banner-box__icon flex-shrink-0 w-48 h-48 bg-purple-400 text-white text-2xl flex-center rounded-circle">
                  <i className="ph ph-watch" />
                </span>
                <div>
                  <h6 className="mb-4">10% OFF</h6>
                  <span className="">Untuk Pendaftaran 2025</span>
                </div>
              </div>
              <div
                className="banner-box three px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg flex-align d-inline-flex gap-16"
                data-aos="fade-left"
              >
                <span className="banner-box__icon flex-shrink-0 w-48 h-48 bg-main-50 text-main-600 text-2xl flex-center rounded-circle">
                  <i className="ph ph-phone-call" />
                </span>
                <div>
                  <span className="">Online Supports</span>
                  <a
                    href="https://wa.me/+6285281752123"
                    className="mt-8 fw-medium text-xl d-block text-main-600 hover-text-main-500"
                  >
                    +62 852-8175-2123
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
