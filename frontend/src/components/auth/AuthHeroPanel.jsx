import React from "react";

function AuthHeroPanel() {
  return (
    <div className="auth-hero-grid relative h-40 shrink-0 overflow-hidden sm:h-48 md:h-auto md:w-[45%] md:flex-none">
      <img
        src="/ChatGPT%20Image%20Sep%2030,%202026,%2011_21_42%20PM.png"
        alt=""
        className="auth-hero-image absolute inset-0 size-full object-contain p-3"
      />
    </div>
  );
}

export default AuthHeroPanel;
