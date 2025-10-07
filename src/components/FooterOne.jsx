import Link from "next/link";

const FooterOne = () => {
  return (
    <footer className="footer bg-main-25 position-relative z-1" id="contact">
      <img
        src="assets/images/shapes/shape2.png"
        alt=""
        className="shape five animation-scalation"
      />
      <img
        src="assets/images/shapes/shape6.png"
        alt=""
        className="shape one animation-scalation"
      />
      <div className="py-120 ">
        <div className="container container-two">
          <div className="row row-cols-xxl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-5">
            <div className="col" data-aos="fade-up" data-aos-duration={300}>
              <div className="footer-item">
                <div className="footer-item__logo">
                  <Link href="/">
                    {" "}
                    <img src="assets/images/logo/logo.webp" alt="" />
                  </Link>
                </div>
                <p className="my-32 text-line-3">
                  Terwujudnya pendidikan yang bermutu tinggi dalam membentuk
                  siswa-siswi yang berakhlak, modern, dan menjadi kebanggaan
                  orang tua, masyarakat, bangsa dan negara.
                </p>
                <ul className="social-list flex-align gap-24">
                  <li className="social-list__item">
                    <Link
                      href="/#"
                      className="text-main-600 text-2xl hover-text-main-two-600"
                    >
                      <i className="ph-bold ph-facebook-logo" />
                    </Link>
                  </li>
                  <li className="social-list__item">
                    <Link
                      href="/#"
                      className="text-main-600 text-2xl hover-text-main-two-600"
                    >
                      {" "}
                      <i className="ph-bold ph-youtube-logo" />
                    </Link>
                  </li>
                  <li className="social-list__item">
                    <Link
                      href="https://www.instagram.com/sdi.alfakhir/"
                      target="_blank"
                      className="text-main-600 text-2xl hover-text-main-two-600"
                    >
                      <i className="ph-bold ph-instagram-logo" />
                    </Link>
                  </li>
                  <li className="social-list__item">
                    <Link
                      href="/#"
                      className="text-main-600 text-2xl hover-text-main-two-600"
                    >
                      <i className="ph-bold ph-linkedin-logo" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration={400}>
              <div className="footer-item">
                <h4 className="footer-item__title mb-32">Bantuan</h4>
                <ul className="footer-menu">
                  <li className="mb-16">
                    <Link
                      href="/#about"
                      className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                    >
                      Tentang Kami
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      href="/#visi-misi"
                      className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                    >
                      Visi & Misi
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      href="/#sejarah"
                      className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                    >
                      Sejarah Kami
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      href="/#contact"
                      className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                    >
                      Hubungi Kami
                    </Link>
                  </li>
                  <li className="mb-0">
                    <Link
                      href="https://forms.gle/kungShkai1iju2Yq9"
                      target="_blank"
                      className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                    >
                      Pendaftaran Online
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration={600}>
              <div className="footer-item">
                <h4 className="footer-item__title mb-32">Program Kami</h4>
                <ul className="footer-menu">
                  <li className="mb-16">
                    <Link
                      href="/#"
                      className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                    >
                      Kurikulum
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      href="/#"
                      className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                    >
                      Ekstrakurikuler
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      href="/#"
                      className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                    >
                      Program Unggulan
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      href="/#"
                      className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                    >
                      Program Internasional
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      href="/#"
                      className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                    >
                      Program Beasiswa
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration={800}>
              <div className="footer-item">
                <h4 className="footer-item__title mb-32">Contact Us</h4>
                <div className="flex-align gap-20 mb-24">
                  <span className="icon d-flex text-32 text-main-600">
                    <i className="ph ph-phone" />
                  </span>
                  <div className="">
                    <Link
                      href="tel:+6285695766755"
                      className="text-neutral-500 d-block hover-text-main-600 mb-4"
                    >
                      +62 8565-9576-6755 (Telp)
                    </Link>
                    <Link
                      href="https://wa.me/6285695766755"
                      target="_blank"
                      className="text-neutral-500 d-block hover-text-main-600 mb-0"
                    >
                      +62 856-9576-6755 (WA)
                    </Link>
                  </div>
                </div>
                <div className="flex-align gap-20 mb-24">
                  <span className="icon d-flex text-32 text-main-600">
                    <i className="ph ph-envelope-open" />
                  </span>
                  <div className="">
                    <Link
                      href="mailto:sdialfakhir@gmail.com"
                      className="text-neutral-500 d-block hover-text-main-600 mb-4"
                    >
                      sdialfakhir@gmail.com
                    </Link>
                  </div>
                </div>
                <div className="flex-align gap-20 mb-24">
                  <span className="icon d-flex text-32 text-main-600">
                    <i className="ph ph-map-trifold" />
                  </span>
                  <div className="">
                    <Link
                      href="https://maps.app.goo.gl/jkKnTF8nVYeHc5MU9"
                      target="_blank"
                    >
                      <span className="text-neutral-500 d-block mb-4">
                        Jl. Kemang, Pasir Putih,
                      </span>
                      <span className="text-neutral-500 d-block mb-0">
                        Kec. Sawangan, Kota Depok, Jawa Barat 16519
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* bottom Footer */}
        <div className="bottom-footer bg-main-25 border-top border-dashed border-main-100 border-0 py-32">
          <div className="container container-two">
            <div className="bottom-footer__inner flex-between gap-3 flex-wrap">
              <p className="bottom-footer__text">
                {" "}
                Copyright ©{" "}
                <span className="fw-semibold">
                  SD Islam Modern Al-Fakhir
                </span>{" "}
                All Rights Reserved. Developed by{" "}
                <Link
                  href="https://nozazi.vysesolution.net"
                  target="_blank"
                  className="text-main-600 hover-text-main-700 hover-text-decoration-underline"
                >
                  nozazi
                </Link>
              </p>
              <div className="footer-links">
                <Link
                  href="#"
                  className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-neutral-500 hover-text-main-600 hover-text-decoration-underline"
                >
                  Terms &amp; Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
