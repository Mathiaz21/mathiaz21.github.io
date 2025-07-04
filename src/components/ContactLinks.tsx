
import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const ContactLinks: React.FC = () => {
  const email = "mathias.gilbert42@gmail.com";
  const openingSentence = "Contact me / view my projects:"
  const iconSize = "2x"

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="flex flex-col items-center gap-0">
      <h2 className="text-2xl font-bold text-center mb-10">{openingSentence}</h2>
      <div className="flex justify-center items-center gap-6 my-8">
        <a 
          href="https://www.linkedin.com/in/mathias-gilbert/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 transition-colors"
          aria-label="LinkedIn Profile"
        >
          <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
        </a>
        <a 
          href="https://github.com/Mathiaz21" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900 transition-colors"
          aria-label="GitHub Profile"
        >
          <FontAwesomeIcon icon={faGithub} size={iconSize} />
        </a>
        <div 
          className="text-gray-700 hover:text-red-600 transition-colors"
          onClick={handleEmailClick}
          aria-label="Personal email"
        >
          <FontAwesomeIcon icon={faEnvelope} size={iconSize} />
        </div>
      </div>
    </div>
  );
};

export default ContactLinks;
