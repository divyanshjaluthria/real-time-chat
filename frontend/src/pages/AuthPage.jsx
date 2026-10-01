import React from "react";
import AuthHeader from "../components/auth/AuthHeader";
import AuthHeroPanel from "../components/auth/AuthHeroPanel";
import { AuthActionPanel } from "../components/auth/AuthActionPanel";
import { useWallpaper } from "../context/wallapaper.js";

function AuthPage() {
  const { frameStyle } = useWallpaper();
  return (
    <div
      className="box-border flex min-h-dvh flex-col p-2 sm:p-5 md:p-8"
      style={frameStyle}
    >
      <div className="mx-auto flex w-full max-w-368 flex-1 flex-col overflow-visible rounded-2xl border border-border bg-background text-foreground md:overflow-hidden md:rounded-3xl">
        <AuthHeader />

        <main className="relative flex flex-1 flex-col overflow-visible md:flex-row md:overflow-hidden">
          <AuthHeroPanel />
          <AuthActionPanel />
        </main>
      </div>
    </div>
  );
}

export default AuthPage;
