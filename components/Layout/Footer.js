import React from "react";
import Masakin from "../../public/assets/LOGOOSR.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Masakin className="h-20 w-auto mb-6" /> {/* Increased logo size */}
          <p className="mb-4">
            <strong className="font-medium">Event Memasak</strong> adalah acara yang mempertemukan pecinta memasak dengan berbagai aktivitas menarik dan inspiratif.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - Event Memasak</p>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Acara</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Jadwal Acara
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Resep Unggulan
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Demo Memasak
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Kompetisi
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Galeri Foto
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Blog
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Informasi</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Tentang Kami
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQ
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Panduan
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Kebijakan Privasi
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Syarat & Ketentuan
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Ikut Berpartisipasi</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Sponsorship
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Menjadi Partner
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
