"use client";
import Link from "next/link";
// import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";

const FreeTrailOne = () => {
  return (
    <section
      className="free-trails py-120 position-relative z-1 bg-main-25 overflow-hidden"
      id="visi-misi"
    >
      <div className="position-relative">
        <div className="container">
          <div className="row gy-xl-0 gy-5 flex-wrap-reverse align-items-center">
            <div className="col-lg-6">
              <div className="position-relative wow bounceIn">
                <img
                  src="assets/images/thumbs/3.png"
                  alt=""
                  data-tilt=""
                  data-tilt-max={8}
                  data-tilt-speed={500}
                  data-tilt-perspective={5000}
                  data-tilt-transition="1s"
                  data-tilt-full-page-listening=""
                />
                {/* <div className="w-120 h-120 bg-main-two-600 rounded-circle border border-white d-flex flex-column align-items-center justify-content-center position-absolute start-50 top-0 translate-middle-x mt-28">
                  <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                    {({ isVisible }) => (
                      <h2 className="text-white mb-0 fw-medium counter counter">
                        {isVisible ? <CountUp end={12} /> : null}K
                      </h2>
                    )}
                  </VisibilitySensor>
                  <span className="text-white text-secondary">Community</span>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-40">
                <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                  <span className="text-main-600 text-2xl d-flex">
                    <i className="ph-bold ph-book-open" />
                  </span>
                  <h5 className="text-main-600 mb-0">
                    SD Islam Modern Al-Fakhir - Visi & Misi{" "}
                  </h5>
                </div>
                <h2 className="mb-24 wow bounceIn">Visi Sekolah</h2>
                <p className="text-neutral-500 text-line-3 wow bounceInUp">
                  Terwujudnya pendidikan yang bermutu tinggi dalam membentuk
                  siswa-siswi yang berakhlak, modern, dan menjadi kebanggaan
                  orang tua, masyarakat, bangsa dan negara.
                </p>
                <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown"></div>
                <h2 className="mb-24 wow bounceInRight">Misi Sekolah</h2>
              </div>
              <ul className="grid-cols-2">
                <li
                  className="flex-align gap-8"
                  data-aos="fade-left"
                  data-aos-duration={200}
                >
                  <img src="assets/images/icons/check2.png" alt="" />
                  <span className="text-neutral-500 text-md fw-medium">
                    Beribadah dengan benar
                  </span>
                </li>
                <li
                  className="flex-align gap-8"
                  data-aos="fade-left"
                  data-aos-duration={400}
                >
                  <img src="assets/images/icons/check2.png" alt="" />
                  <span className="text-neutral-500 text-md fw-medium">
                    Berakhlak Mulia
                  </span>
                </li>
                <li
                  className="flex-align gap-8"
                  data-aos="fade-left"
                  data-aos-duration={600}
                >
                  <img src="assets/images/icons/check2.png" alt="" />
                  <span className="text-neutral-500 text-md fw-medium">
                    Berbadan Sehat{" "}
                  </span>
                </li>
                <li
                  className="flex-align gap-8"
                  data-aos="fade-left"
                  data-aos-duration={800}
                >
                  <img src="assets/images/icons/check2.png" alt="" />
                  <span className="text-neutral-500 text-md fw-medium">
                    Berpengetahuan Luas
                  </span>
                </li>
                <li
                  className="flex-align gap-8"
                  data-aos="fade-left"
                  data-aos-duration={800}
                >
                  <img src="assets/images/icons/check2.png" alt="" />
                  <span className="text-neutral-500 text-md fw-medium">
                    Berfikir Kritis & Kreatif
                  </span>
                </li>
                <li
                  className="flex-align gap-8"
                  data-aos="fade-left"
                  data-aos-duration={800}
                >
                  <img src="assets/images/icons/check2.png" alt="" />
                  <span className="text-neutral-500 text-md fw-medium">
                    Cinta Al-Qur'an
                  </span>
                </li>
              </ul>
              <div className="pt-40 border-top border-neutral-50 mt-40 border-dashed border-0">
                <Link
                  href="/sign-up"
                  className="btn btn-main rounded-pill flex-align d-inline-flex gap-8"
                >
                  Register Now
                  <i className="ph-bold ph-arrow-up-right d-flex text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrailOne;
