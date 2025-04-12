
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactLinks: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-4 my-8">
      <span className="text-sm">Contact me:</span>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
      >
        <Linkedin size={18} />
        LinkedIn
      </a>
      <a 
        href="https://github.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:text-gray-600 transition-colors"
      >
        <Github size={18} />
        GitHub
      </a>
      <a 
        href="mailto:example@email.com" 
        className="inline-flex items-center gap-1 hover:text-red-600 transition-colors"
      >
        <Mail size={18} />
        e-mail
      </a>
    </div>
  );
};

export default ContactLinks;
