import React from 'react';

function Footer() {
  const footerData = [
    {
      title: "Abstract",
      links: [
        { name: "Branches", href: "/branches" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Help Center", href: "/help-center" },
        { name: "Release Notes", href: "/release-notes" },
        { name: "Status", href: "/status" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Twitter", href: "/twitter" },
        { name: "LinkedIn", href: "/linkedin" },
        { name: "Facebook", href: "/facebook" },
        { name: "Dribbble", href: "/dribbble" },
        { name: "Podcast", href: "/podcast" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about-us" },
        { name: "Careers", href: "/careers" },
        { name: "Legal", href: "/legal" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "info@abstract.com", href: "/contact-us" }
      ]
    }
  ];

  return (
    <div>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-10 grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold mb-2">{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="hover:underline">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center text-center mt-8 text-xs">
          <img src="/logo.png" className="w-8 h-8 mr-2" alt="Logo" />
          <p>© Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}
export default Footer;