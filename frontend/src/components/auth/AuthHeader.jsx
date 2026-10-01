import React from "react";
import { APP_NAME, AppLogo } from "../AppLogo";
import { WallpaperPicker } from "../WallpaperPicker";
import { ThemePresetPicker } from "../ThemePresetPicker";
import { ThemeToggle } from "../ThemeToggle";

function AuthHeader() {
  return (
    <header className="sticky top-0 z-10 flex shrink-0 items-center gap-1.5 border-b border-black/10 bg-[#F6F6F6]/95 px-2 py-2 backdrop-blur-md sm:gap-2 sm:px-3 dark:border-white/10 dark:bg-[#1C1C1E]/95">
      <div className="flex min-w-0 flex-1 items-center gap-2 px-1 sm:gap-2.5">
        <AppLogo
          size={30}
          className="size-6.5 shrink-0 rounded-[7px] sm:size-7.5"
          alt="Real-Time Chat"
        />

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold leading-tight sm:text-[15px]">
            {APP_NAME}
          </p>
          <p className="hidden truncate text-xs text-[#8E8E93] sm:block dark:text-[#98989D]">
            Secure and fast real-time messaging
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-0.5">
        <WallpaperPicker />

        <ThemePresetPicker />

        <ThemeToggle />
      </div>
    </header>
  );
}

export default AuthHeader;
