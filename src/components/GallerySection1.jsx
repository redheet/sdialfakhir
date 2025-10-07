"use client";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import galleryData from "@/data/gallery.json";

const GallerySection = () => {
  const categories = Object.entries(galleryData.categories);

  return (
    <section className="gallery py-120">
      <div className="container">
        <div className="container">
          <div className="section-heading text-center">
            <div className="flex-align d-inline-flex gap-8 mb-16">
              <span className="text-main-600 text-2xl d-flex">
                <i className="ph-bold ph-book-open" />
              </span>
              <h5 className="text-main-600 mb-0">Gallery</h5>
            </div>
            <h2 className="mb-24">Explore Our Gallery</h2>
            <p className="">
              Students can register for the workshops through the EduAll
              platform. Limited seats are available
            </p>
          </div>
          <div className="text-center">
            <div
              className="nav-tab-wrapper bg-white border border-neutral-40 p-16 mb-40 d-inline-block"
              data-aos="zoom-out"
            >
              <ul
                className="nav nav-pills common-tab gap-16"
                id="pills-tab"
                role="tablist"
              >
                {categories.map(([key, category], index) => (
                  <li key={key} className="nav-item" role="presentation">
                    <button
                      className={`nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8 ${
                        index === 0 ? "active" : ""
                      }`}
                      id={`pills-${key}-tab`}
                      data-bs-toggle="pill"
                      data-bs-target={`#pills-${key}`}
                      type="button"
                      role="tab"
                      aria-controls={`pills-${key}`}
                      aria-selected={index === 0 ? "true" : "false"}
                    >
                      <i
                        className={`text-xl d-flex text-main-600 ph-bold ${category.icon}`}
                      />
                      {category.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            {categories.map(([key, category], index) => (
              <div
                key={key}
                className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                id={`pills-${key}`}
                role="tabpanel"
                aria-labelledby={`pills-${key}-tab`}
                tabIndex={0}
              >
                {/* Masonry Start */}
                <div className="masonry">
                  <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                    {category.images.map((image) => (
                      <a
                        key={image.id}
                        className="masonry__item position-relative rounded-12 overflow-hidden"
                        href={image.href}
                      >
                        <img alt={image.alt} src={image.src} />
                      </a>
                    ))}
                  </LightGallery>
                </div>
                {/* Masonry End */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
