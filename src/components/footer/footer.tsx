import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import the Link component from Next.js

const Footer = () => {
  return (
    <footer className="p-4">
      <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-4">
        <div>
          <Image
            src="/images/logo.svg"
            alt="Company logo"
            width={292}
            height={108}
            className="w-full lg:w-auto"
          />
        </div>
        <div>
          <h2 className="font-bold mb-1">About</h2>
          <ul>
            <li className="mb-1">
              <Link href="#">
                <span className="hover:underline">How it works</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link href="#">
                <span className="hover:underline">Featured</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link href="#">
                <span className="hover:underline">Partnership</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link href="#">
                <span className="hover:underline">Business Relation</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-1">Community</h2>
          <ul>
            <li className="mb-1">
              <Link href="#">
                <span className="hover:underline">Events</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link href="#">
                <span className="hover:underline">Blog</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link href="#">
                <span className="hover:underline">Podcast</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link href="#">
                <span className="hover:underline">Invite a friend</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-1">Socials</h2>
          <ul>
            <li className="mb-1">
              <Link href="#">
                <span className="hover:underline">Discord</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link href="#">
                <span className="hover:underline">Instagram</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link href="#">
                <span className="hover:underline">Twitter</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link href="#">
                <span className="hover:underline">Facebook</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center text-xs text-black border-t border-black pt-4">
        <div className="text-center lg:text-left mt-2">
          <p>© 2022 MORENT. All rights reserved</p>
        </div>
        <div className="flex space-x-4 mt-2 lg:mt-0">
          <Link href="#">
            <span className="hover:underline">Privacy Policy</span>
          </Link>
          <Link href="#">
            <span className="hover:underline">Terms & Condition</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
