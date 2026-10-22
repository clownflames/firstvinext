// components/Navbar.tsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-center">
        <h1 className="text-xl font-semibold tracking-tight">
          FastIntern
        </h1>
      </div>
    </nav>
  );
}