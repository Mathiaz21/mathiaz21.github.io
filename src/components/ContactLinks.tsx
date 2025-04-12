
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactLinks: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-6 my-8">
      <span className="text-sm">Contact me:</span>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-600 transition-colors"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={24} />
      </a>
      <a 
        href="https://github.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-gray-900 transition-colors"
        aria-label="GitHub Profile"
      >
        <Github size={24} />
      </a>
      <a 
        href="mailto:example@email.com" 
        className="text-gray-700 hover:text-red-600 transition-colors"
        aria-label="Send an email"
      >
        <Mail size={24} />
      </a>
    </div>
  );
};

export default ContactLinks;
