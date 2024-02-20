import SearchHeader from "@/components/SearchHeader";
import React from "react";
import "./../globals.css";

export default function Layout({ children }) {
  return (
    <div>
      <SearchHeader />

      {children}
    </div>
  );
}
