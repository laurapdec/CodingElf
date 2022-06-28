import React from "react";
import { Instagram, Github, Twitter ,Mail } from "../lib";

const Footer = () => {
  return (
    <footer class="p-4 bg-[#5b858f] sm:p-6 ">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0 flex content-center">
          <a href="https://codingelf.com/" class="flex items-center">
            <img
              src="../Elfo.jpg"
              class="mr-3 h-8"

              alt="Coding Elf Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Coding // Elf
            </span>
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 ">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Site Map
            </h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="https://codingelf.com/" class="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="https://codingelf.com/about-us" class="hover:underline">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 flex justify-center sm:text-center dark:text-gray-400">
          © 2022&nbsp;
          <a href="https://codingelf.com/" class="hover:underline">
          Coding Elf™
          </a>
          . All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 justify-center sm:mt-0">
          <Instagram size={`25px`}/>
          <Github size={`25px`}/>
          <Twitter size={`25px`}/>
          <Mail size={`25px`}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
