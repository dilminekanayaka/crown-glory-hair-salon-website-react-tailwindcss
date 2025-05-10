import React from 'react';
import { InstagramIcon, FacebookIcon, TwitterIcon, MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
export function Footer() {
  return <footer id="contact" className="bg-neutral-800 text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Crown & Glory</h3>
            <p className="text-neutral-300 mb-6">
              A salon dedicated to celebrating and enhancing the natural beauty
              of Afro-textured hair.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-sage-600 flex items-center justify-center hover:bg-sage-500 transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-sage-600 flex items-center justify-center hover:bg-sage-500 transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-sage-600 flex items-center justify-center hover:bg-sage-500 transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-3 text-sage-400 mt-1" />
                <span className="text-neutral-300">
                  123 Natural Way, Brooklyn
                  <br />
                  NY 11201, USA
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3 text-sage-400" />
                <a href="tel:+12345678901" className="text-neutral-300 hover:text-sage-400 transition-colors">
                  +1 (234) 567-8901
                </a>
              </li>
              <li className="flex items-center">
                <MailIcon className="w-5 h-5 mr-3 text-sage-400" />
                <a href="mailto:hello@crownandglory.com" className="text-neutral-300 hover:text-sage-400 transition-colors">
                  hello@crownandglory.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Hours</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex justify-between">
                <span>Monday:</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday - Friday:</span>
                <span>10:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>11:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-700 mt-12 pt-8 text-center text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} Crown & Glory. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
}