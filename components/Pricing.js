import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useUser, UserButton } from "@clerk/nextjs"; // Penambahan clerk user

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { isLoaded, user } = useUser(); // clerk user

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Pilih Kelas Memasak Anda
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Pilih kelas yang sesuai dengan kemampuan Anda dan bergabunglah untuk memasak,
              belajar, dan bersenang-senang!
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Premium.png"
                    width={145}
                    height={165}
                    alt="Kelas Memasak Dasar"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Culinary Program Master (CPM)
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Program 1 tahun sebanyak 115x pertemuan
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4">
                    $50 <span className="text-black-500">/ kelas</span>
                  </p>
                  {isLoaded && user ? (
                    <ButtonOutline>Berlangganan</ButtonOutline>
                  ) : (
                    <>
                      <ButtonOutline>Daftar</ButtonOutline>
                    </>
                  )}
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Premium.png"
                    width={145}
                    height={165}
                    alt="Kelas Memasak Menengah"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Quick Class - Baking or Pastry
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Program 1x pertemuan dengan bebas memilih mau kelas apa
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4">
                    $100 <span className="text-black-500">/ kelas</span>
                  </p>
                  {isLoaded && user ? (
                    <ButtonOutline>Berlangganan</ButtonOutline>
                  ) : (
                    <>
                      <ButtonOutline>Daftar</ButtonOutline>
                    </>
                  )}
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Premium.png"
                    width={145}
                    height={165}
                    alt="Kelas Memasak Lanjutan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Kelas Memasak Lanjutan
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Kuasai 15 Resep Gourmet
                  </li>
                  <li className="relative check custom-list my-2">
                    Teknik Kuliner Lanjutan
                  </li>
                  <li className="relative check custom-list my-2">
                    Sesi Pribadi dengan Koki
                  </li>
                  <li className="relative check custom-list my-2">
                    Sertifikat Penyelesaian
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4">
                    $150 <span className="text-black-500">/ kelas</span>
                  </p>
                  {isLoaded && user ? (
                    <ButtonOutline>Berlangganan</ButtonOutline>
                  ) : (
                    <>
                      <ButtonOutline>Daftar</ButtonOutline>
                    </>
                  )}
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h4xs
              variants={scrollAnimation}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black-600 text-center mb-6"
            >
              Bergabunglah dengan Kelas Memasak Kami Sekarang!
            </motion.h4xs>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-8/12 lg:w-7/12 mx-auto text-center mb-6 text-black-500"
            >
              Dengan bergabung di kelas kami, Anda akan mendapatkan pengalaman memasak yang
              luar biasa, dari dasar hingga teknik lanjutan. Tingkatkan keterampilan Anda dan
              jadilah chef handal!
            </motion.p>
            {isLoaded && user ? (
              <ButtonPrimary>Mulai Belajar</ButtonPrimary>
            ) : (
              <ButtonPrimary>Daftar untuk Bergabung</ButtonPrimary>
            )}
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
