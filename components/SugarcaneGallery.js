"use client";
import { useState } from "react";

const shots = [
  { id: "home", label: "Home", src: "/images/sugarcane-home.png", alt: "Sugarcane Monitoring home page" },
  { id: "map", label: "Field map", src: "/images/sugarcane-map.png", alt: "Satellite map for drawing and managing fields" },
  { id: "dash", label: "Dashboard", src: "/images/sugarcane-dashboard.png", alt: "Field dashboard with NDVI trend and yield prediction" },
];

export default function SugarcaneGallery() {
  const [active, setActive] = useState(shots[2]);
  return (
    <div>
      <div className="tabs" role="tablist" aria-label="Sugarcane project screenshots">
        {shots.map((s) => (
          <button key={s.id} role="tab" aria-selected={active.id === s.id} onClick={() => setActive(s)}>
            {s.label}
          </button>
        ))}
      </div>
      <div className="frame">
        <div className="bar"><i /><i /><i /></div>
        <img src={active.src} alt={active.alt} loading="lazy" />
      </div>
    </div>
  );
}
