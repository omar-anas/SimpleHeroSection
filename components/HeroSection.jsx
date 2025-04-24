import React, { useState } from "react";
import Button from "./Button.jsx";
import backgroundImage from "../assets/BG.jpg";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

const dummyHeadlines = [
  "Your Brand, Your Success",
  "Streamline Client Projects",
  "Maximize Your Agency Profits",
];

const dummySubheadlines = [
  "Deliver websites under your agency's brand. Customize everything from the platform interface to client communications, ensuring a seamless, professional experience that reinforces your agency's identity.",
  "Manage multiple client websites from a single dashboard. Our AI-powered platform helps you create, edit, and deploy websites faster than ever, letting you take on more clients without increasing overhead.",
  "Turn website creation into a profitable service line. With rapid delivery times and professional results, you can serve more clients, increase project margins, and grow your agency revenue without scaling your team.",
];

const dummyCtaText = ["Learn More", "Explore Features", "Request a Demo"];

// Using placehold.co for dummy images
const dummyImages = [pic1, pic2, pic3];

const HeroSection = () => {
  const [headline, setHeadline] = useState(dummyHeadlines[0]);
  const [subheadline, setSubheadline] = useState(dummySubheadlines[0]);
  const [ctaText, setCtaText] = useState(dummyCtaText[0]);
  const [image, setimage] = useState(dummyImages[0]);

  const handleTextEdit = (setter) => (e) => {
    setter(e.target.innerText);
  };

  const handleCtaTextEdit = (e) => {
    setCtaText(e.target.innerText);
  };

  const regenerateContent = () => {
    const randomHeadlineIndex = Math.floor(
      Math.random() * dummyHeadlines.length
    );
    const randomSubheadlineIndex = Math.floor(
      Math.random() * dummySubheadlines.length
    );
    const randomCtaIndex = Math.floor(Math.random() * dummyCtaText.length);
    const randomImageIndex = Math.floor(Math.random() * dummyImages.length);

    setHeadline(dummyHeadlines[randomHeadlineIndex]);
    setSubheadline(dummySubheadlines[randomSubheadlineIndex]);
    setCtaText(dummyCtaText[randomCtaIndex]);
    setimage(dummyImages[randomImageIndex]);

    console.log("working");
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="container mx-auto px-4 py-15 md:py-12 relative z-10">
   
        <div className="container mx-auto px-4 py-16 md:py-10 relative z-10">

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
   
            <div className="md:w-1/2 text-center md:text-left text-white">
           
              <h1
                className="text-4xl md:text-5xl font-bold mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                contentEditable={true}
                onBlur={handleTextEdit(setHeadline)}
                suppressContentEditableWarning={true}
              >
                {headline}
              </h1>
              <p
                className="text-lg md:text-xl mb-8 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                contentEditable={true}
                onBlur={handleTextEdit(setSubheadline)}
                suppressContentEditableWarning={true}
              >
                {subheadline}
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"
                  contentEditable={true}
                  onBlur={handleCtaTextEdit}
                >
                  {ctaText}
                </Button>
                <Button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400"
                  onClick={regenerateContent}
                >
                  Regenerate with AI
                </Button>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src={image}
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
