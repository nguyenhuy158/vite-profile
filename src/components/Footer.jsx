import React from 'react';
import { Github, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Let's Connect</h2>
            <p className="text-slate-400 max-w-sm">
              I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="flex gap-6">
            <a href="mailto:huy.ntq02@gmail.com" className="hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://github.com/nguyenhuy158/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nguyenhuy158/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.youtube.com/@ntqhuy2k2" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Youtube size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Huy Nguyen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;