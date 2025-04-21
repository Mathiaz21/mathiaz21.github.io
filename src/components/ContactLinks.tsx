
import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ContactLinks: React.FC = () => {
  const [tooltipContent, setTooltipContent] = useState("Click to copy");
  const email = "mathias.gilbert42@gmail.com";

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setTooltipContent("Link copied");
      setTimeout(() => setTooltipContent("Click to copy"), 2000);
      window.location.href = `mailto:${email}`;
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="flex justify-center items-center gap-6 my-8">
      <span className="text-sm">Contact me:</span>
      <a 
        href="https://www.linkedin.com/in/mathias-gilbert/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-600 transition-colors"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={24} />
      </a>
      <a 
        href="https://github.com/Mathiaz21" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-gray-900 transition-colors"
        aria-label="GitHub Profile"
      >
        <Github size={24} />
      </a>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleEmailClick}
              className="relative overflow-hidden w-[200px] h-6"
              aria-label="Copy email address"
            >
              <div className="flex items-center absolute left-0 w-full transition-transform duration-300 group-hover:-translate-x-full">
                <Mail size={24} className="text-gray-700 hover:text-red-600 transition-colors" />
              </div>
              <span className="absolute left-0 text-sm transform translate-x-full transition-transform duration-300 group-hover:translate-x-0">
                {email}
              </span>
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltipContent}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ContactLinks;
