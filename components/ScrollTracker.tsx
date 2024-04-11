import { RefProps } from "@/Interface";
import React, { useEffect, useState } from "react";

export function ScrollTracker({ aboutRef, projectRef, contactRef }: RefProps) {
  const [currentComponent, setCurrentComponent] = useState("");
  console.log("🚀 ~ ScrollTracker ~ currentComponent:", currentComponent)

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const aboutOffset = aboutRef.current?.offsetTop;
      const projectOffset = projectRef.current?.offsetTop;
      const contactOffset = contactRef.current?.offsetTop;

      if (!aboutOffset || !projectOffset || !contactOffset) {
        return;
      }
      if (currentPosition >= aboutOffset && currentPosition < projectOffset) {
        setCurrentComponent("Introduction");
      } else if (
        currentPosition >= projectOffset &&
        currentPosition < contactOffset
      ) {
        setCurrentComponent("Projects");
      } else if (currentPosition >= contactOffset) {
        setCurrentComponent("Contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [aboutRef, projectRef, contactRef]);

  return (
    <div className="fixed right-0 top-0 mt-24">
      <p className="text-white">Currently Scrolled Component: {currentComponent}</p>
    </div>
  );
}
