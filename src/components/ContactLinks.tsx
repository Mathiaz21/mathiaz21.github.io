
import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const ContactLinks: React.FC = () => {
  const [tooltipContent, setTooltipContent] = useState("Click to copy");
  const email = "mathias.gilbert42@gmail.com";
  const openingSentence = "Contact me / view my projects:"

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="flex justify-center items-center gap-6 my-8">
      <span className="text-sm">{openingSentence}</span>
      <a 
        href="https://www.linkedin.com/in/mathias-gilbert/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-600 transition-colors"
        aria-label="LinkedIn Profile"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a 
        href="https://github.com/Mathiaz21" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-gray-900 transition-colors"
        aria-label="GitHub Profile"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <div 
        className="text-gray-700 hover:text-red-600 transition-colors"
        onClick={handleEmailClick}
        aria-label="Personal email"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </div>
  );
};

export default ContactLinks;
