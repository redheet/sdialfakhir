// app/loading.js
"use client";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Loading() {
  return (
    <div className="preloader">
      <img
        src="/assets/images/icons/preloader.gif"
        loading="lazy"
        alt="Loading..."
      />
      {/* <DotLottieReact src="/assets/dotfiles/loader.lottie" loop autoplay /> */}
    </div>
  );
}
