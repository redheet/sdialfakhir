"use client";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function NotFound() {
  return (
    <section className="not_found">
      <div className="container">
        <div className="row">
          <DotLottieReact src="/assets/dotfiles/404-3.lottie" loop autoplay />
          <div className="col-12 text-center">
            {/* <h1 className="display-1">404 Error</h1>
            <h2>Page Not Found</h2> */}

            <Link href="/" className="btn btn-main">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
