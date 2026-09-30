import React from "react";
import { useRouterState } from "@tanstack/react-router";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaMedium,
  FaYoutube,
} from "react-icons/fa6";

import footerLinks from "../data/footerLinks.json";
import socialLinksData from "../data/socialLinks.json";

const socialIcons = {
  Facebook: FaFacebookF,
  Twitter: FaXTwitter,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  YouTube: FaYoutube,
  Medium: FaMedium,
};

const Footer = () => {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const topPad = pathname === "/" ? "pt-24" : "pt-20";
  return (
    <footer className={`relative ${topPad} bg-brand-blue-deep font-gotham text-sm text-white overflow-hidden`}>
      <div className="pointer-events-none absolute inset-0 bg-[url('/footer-globe.svg')] bg-auto bg-no-repeat bg-position-[calc(100%+12rem)_bottom] opacity-20"></div>
      <div className="relative z-10 mx-auto max-w-[1100px]">
        <div className="grid justify-items-start grid-cols-2 md:grid-cols-4 px-5">
          {[0, 1, 2, 3].map((colIndex) => (
            <div key={colIndex} className="space-y-8">
              {[footerLinks[colIndex]].map(
                (section) => (
                  <div key={section.title}>
                    <h2 className="mt-5 mb-3 font-gotham text-sm font-semibold uppercase text-white">
                      {section.title}
                    </h2>
                    <ul className="">
                      {section.links.map((link) => (
                        <li className="mb-1 hover:text-brand-green-light" key={link}>
                          <a
                            href="#"
                            className="text-xs transition-colors duration-200 hover:text-brand-green-light"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
              )}
            </div>
          ))}
        </div>
        <div className="px-4 py-4 mt-4 mb-10 border-t border-white/10 md:flex md:items-center md:justify-between text-xs">
          <span className="text-xs sm:text-center">
            © 2026{" "}
            <a href="/" className="hover:text-white">
              TIC Advisor
            </a>
            . All Rights Reserved. | Privacy Policy | Terms of Use
          </span>
          <div className="mt-4 flex space-x-6 sm:justify-center md:mt-0">
            {socialLinksData.map(({ icon, href, name }) => {
              const Icon = socialIcons[icon];
              return (
                <a
                  key={name}
                  href={href}
                  className="text-white transition-colors duration-200 hover:text-white"
                >
                  <Icon/>
                  <span className="sr-only">{name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;