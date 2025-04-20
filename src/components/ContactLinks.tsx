
import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

const ContactLinks: React.FC = () => {
  const [showEmail, setShowEmail] = useState(false);
  const { toast } = useToast();
  const email = "mathias.gilbert42@gmail.com";

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      window.location.href = `mailto:${email}`;
      toast({
        title: "Email copied to clipboard",
        duration: 2000,
      });
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
              className="relative group text-gray-700 hover:text-red-600 transition-colors w-24 h-6 flex items-center justify-center"
              onMouseEnter={() => setShowEmail(true)}
              onMouseLeave={() => setShowEmail(false)}
              aria-label="Copy email address"
            >
              <Mail 
                size={24} 
                className={`absolute transition-opacity duration-300 ${showEmail ? 'opacity-0' : 'opacity-100'}`}
              />
              <span 
                className={`absolute text-sm transition-opacity duration-300 ${showEmail ? 'opacity-100' : 'opacity-0'}`}
              >
                {email}
              </span>
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Click to copy</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ContactLinks;
