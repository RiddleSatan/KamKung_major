import React from 'react';

const Footer = () => {
  const socialLinks = [
    { href: '#', icon: 'fab fa-whatsapp' },
    { href: '#', icon: 'fas fa-envelope' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 text-sm text-gray-500">
            © 2023 Samsung Electronics Co., Ltd. All rights reserved.
          </div>
          <ul className="flex flex-wrap items-center">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="mr-4 text-gray-300 hover:text-white">
                  <i className={link.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
