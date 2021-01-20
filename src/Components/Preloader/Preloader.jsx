import React from "react";
import "./Preloader.css";
export default function Preloader() {
  return (
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  );
}
