// import AboutOne from "@/components/AboutOne";
import BannerOne from "@/components/BannerOne";
// import ChooseUsTwo from "@/components/ChooseUsTwo";
// import BlogOne from "@/components/BlogOne";
// import BrandOne from "@/components/BrandOne";
// import CertificateOne from "@/components/CertificateOne";
// import ChooseUsOne from "@/components/ChooseUsOne";
// import CounterOne from "@/components/CounterOne";
// import ExploreCourseOne from "@/components/ExploreCourseOne";
import FeaturesOne from "@/components/FeaturesOne";
import FooterOne from "@/components/FooterOne";
import FreeTrailOne from "@/components/FreeTrailOne";
import HeaderOne from "@/components/HeaderOne";
// import InstructorOne from "@/components/InstructorOne";
// import TestimonialsOne from "@/components/TestimonialsOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "SD Islam Modern Al-Fakhir ",
  description:
    "SD Islam yang mengusung konsep modern, mengadopsi model kelas dan program internasional, namun tetap mengutamakan pendidikan karakter, moral, akhlak dan nilai-nilai keislaman.",
  author: "Design by nozazi",
  keywords: [
    "SD Islam Modern Al-Fakhir",
    "Al-Fakhir",
    "SD Islam",
    "Sekolah Dasar",
  ],
};

const page = () => {
  return (
    <>
      {/* HeaderOne */}
      <HeaderOne />

      {/* Animation */}
      <Animation />

      {/* BannerOne */}
      <BannerOne />

      {/* BrandOne */}
      {/* <BrandOne /> */}

      {/* FeaturesOne */}
      <FeaturesOne />
      {/* <ChooseUsTwo /> */}
      <FreeTrailOne />

      {/* ExploreCourseOne */}
      {/* <ExploreCourseOne /> */}

      {/* AboutOne */}
      {/* <AboutOne /> */}

      {/* InstructorOne */}
      {/* <InstructorOne /> */}

      {/* CHooseUsOne */}
      {/* <ChooseUsOne /> */}

      {/* CounterOne */}
      {/* <CounterOne /> */}

      {/* TestimonialsOne */}
      {/* <TestimonialsOne /> */}

      {/* BlogOne */}
      {/* <BlogOne /> */}

      {/* CertificateOne */}
      {/* <CertificateOne /> */}

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
