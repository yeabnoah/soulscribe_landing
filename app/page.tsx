"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaReddit,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="">
      <div className=" h-screen md:p-5 p-2">
        <div className=" flex justify-between items-center py-5 ms:px-10 md:px-8 pl-3">
          <div className=" flex items-center md:gap-5 gap-2">
            <Image
              className=" h-8 w-8 md:h-12 md:w-12"
              height={35}
              width={35}
              src="/icon.png"
              alt="Logo"
            />

            <h2 className=" md:text-2xl font-semibold text-white ">
              Soulscribe
            </h2>
          </div>
          <div className=" flex gap-5 items-center">
            <Link
              href="https://github.com/yeabnoah/soulscribe"
              className=" cursor-pointer"
            >
              <FaGithub
                size={23}
                color="#ffffff"
                className=" hover:-translate-y-2 transition-all"
              />
            </Link>
            <Button className=" flex gap-3 text-white md:text-xl md:py-5 py-2 hover:-translate-y-2 transition-all rounded">
              <Link href="https://t.me/technerd345"> Find Me</Link>

              <FaTelegram size={20} />
            </Button>
          </div>
        </div>

        <div className=" md:flex md:flex-col mt-20 flex-col flex justify-center items-center gap-10">
          <div className="">
            <Image src="/app5.png" height={600} width={800} alt="app" />
          </div>
        </div>
      </div>

      <div className=" h-[70vh] bg-white/80 px-5 flex flex-col justify-center">
        <div>
          <h2 className=" text-background my-5 md:text-5xl text-2xl text-center font-semibold">
            What is soulscribe ?
          </h2>

          <h2 className=" md:mt-10 max-w-4xl text-center font-light text-background mx-auto md:text-2xl">
            SoulScribe is a mobile app that serves as a pocket cheat sheet for
            Bible verses, meticulously categorized and presented for various
            life situations. Whether you’re navigating relationships, managing
            behavior, or seeking comfort during loneliness, depression, fear,
            anxiety, or suicidal thoughts, SoulScribe offers chosen Bible verses
            tailored to these needs. This app aims to support our generation by
            providing spiritual guidance and godly teachings, helping users
            reflect on and examine their lives through the wisdom of the Bible.
          </h2>

          <Link href="https://expo.dev/artifacts/eas/r6f2ihALuYzjKeBzMd6CHV.apk">
            <Button className=" mx-auto hover hover:-translate-y-2 transition-all hover:text-white hover:bg-black flex gap-5 items-center mt-10  border-black text-black border rounded  md:text-xl md:py-7 py-5">
              <FaCloudDownloadAlt size={30} />
              Download the app for Android
            </Button>
          </Link>
        </div>
      </div>

      <div className=" bg-emerald p-5 my-20 md:flex md:flex-row flex-col justify-center gap-10 md:mx-44">
        <div className=" md:flex-shrink-0 flex-col flex justify-center items-center">
          <Image
            src="/technerd.png"
            height={200}
            width={200}
            alt="app"
            className=" bg-white/80 md:rounded-2xl rounded-full md:h-64 md:w-64 h-24 w-24 justify-center"
          />
        </div>

        <div className=" flex-grow items-center flex  gap-96">
          <div className="  text-start">
            <h2 className=" text-white my-5 md:text-5xl text-2xl text-center md:text-start font-semibold">
              little info about me
            </h2>

            <h2 className=" md:mt-10 mt-5 text-center md:text-start font-light text-white mx-auto text-sm md:text-xl">
              👋 Hello! I&#39;m Yeabsra, a web and mobile developer from
              Ethiopia. I taught myself how to build websites and apps. I enjoy
              using technology to solve problems and bring ideas to life.
              I&#39;m good at paying attention to small details and finding
              solutions when things get tough. When I&#39;m not coding, I&#39;m
              always learning something new. Let&#39;s connect and work together
              to make cool stuff happen!
            </h2>
            <div>
              <div className=" flex items-start md:justify-start justify-center md:gap-2 gap-5 mt-5 ">
                <Link href="https://t.me/technerd">
                  <FaTelegram
                    size={20}
                    className="  text-white hover:-translate-y-2 transition-all md:h-8 md:w-12 h-5 w-5"
                  />
                </Link>

                <Link href="https://x.com/TechNerd556">
                  <FaXTwitter
                    size={20}
                    className="  text-white hover:-translate-y-2 transition-all md:h-8 md:w-12 h-5 w-5"
                  />
                </Link>

                <Link href="https://www.linkedin.com/in/yeabsra-ashebir-tech-nerd-8a3a80267/">
                  <FaLinkedin
                    size={20}
                    className="  text-white hover:-translate-y-2 transition-all md:h-8 md:w-12 h-5 w-5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-[70vh] bg-white/80 md:px-5 px-2 flex flex-col justify-center">
        <div>
          <h2 className=" text-background my-5 font-bold text-2xl md:text-5xl text-center md:font-semibold">
            Why I Created soulscribe
          </h2>

          <h2 className=" md:mt-10 md:w-[60%]  text-center font-light text-background mx-auto text-sm md:text-xl">
            I created SoulScribe to offer a practical and accessible way for
            people to connect with Bible verses relevant to their daily lives
            and emotional needs. By categorizing and presenting these verses for
            various situations—such as relationships, behavior, loneliness, and
            anxiety—SoulScribe aims to provide spiritual support and guidance,
            helping users navigate modern challenges through God’s teachings.
          </h2>

          <div className=" flex justify-center items-center">
            <Link href="https://expo.dev/artifacts/eas/r6f2ihALuYzjKeBzMd6CHV.apk">
              <Button className=" hover bg-white/80 hover:-translate-y-2 transition-all hover:text-white flex gap-5 items-center mt-10  border-background bg-background text-white border rounded  md:text-xl md:py-7 py-5">
                <FaCloudDownloadAlt size={30} />
                Download the app for Android
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="  h-24 flex md:justify-between mx-5 justify-between items-center md:w-[80%] md:mx-auto">
        <div className=" flex items-center gap-3">
          <Image
            className=" h-8 w-8 md:h-12 md:w-12"
            height={35}
            width={35}
            src="/icon.png"
            alt="Logo"
          />
          <h2 className=" md:text-2xl text-sm text-white font-medium">
            soulscribe
          </h2>
        </div>

        <div className=" hidden md:block">
          <div className=" flex items-start justify-start md:gap-2 gap-5 mt-5 ">
            <Link href="https://t.me/technerd">
              <FaTelegram
                size={20}
                className="  text-white hover:-translate-y-2 transition-all md:h-8 md:w-12 h-2 w-2"
              />
            </Link>

            <Link href="https://x.com/TechNerd556">
              <FaXTwitter
                size={20}
                className="  text-white hover:-translate-y-2 transition-all md:h-8 md:w-12 h-2 w-2"
              />
            </Link>

            <Link href="https://www.linkedin.com/in/yeabsra-ashebir-tech-nerd-8a3a80267/">
              <FaLinkedin
                size={20}
                className="  text-white hover:-translate-y-2 transition-all md:h-8 md:w-12 h-2 w-2"
              />
            </Link>
          </div>
        </div>

        <div className="  md:hidden">
          <div className=" flex items-center justify-center  gap-5 ">
            <Link href="https://t.me/technerd">
              <FaTelegram
                size={20}
                className="  text-white hover:-translate-y-2 transition-all md:h-8 md:w-12 h-5 w-5"
              />
            </Link>

            <Link href="https://x.com/TechNerd556">
              <FaXTwitter
                size={20}
                className="  text-white hover:-translate-y-2 transition-all md:h-8 md:w-12 h-5 w-5"
              />
            </Link>

            <Link href="https://www.linkedin.com/in/yeabsra-ashebir-tech-nerd-8a3a80267/">
              <FaLinkedin
                size={20}
                className="  text-white hover:-translate-y-2 transition-all md:h-8 md:w-12 h-5 w-5"
              />
            </Link>
          </div>
        </div>

        <div className=" md:flex items-center justify-center gap-3 hidden ">
          <Link
            href="https://t.me/selfmadecoder"
            className=" text-white text-xs md:text-base font-normal hover:text-white"
          >
            Powered by TechNerd - Jul 2024
          </Link>
        </div>
      </div>

      <div className=" flex items-center justify-center gap-3 -mt-5 mb-3 md:hidden">
        <Link
          href="https://t.me/selfmadecoder"
          className=" text-white text-xs md:text-base font-normal hover:text-white"
        >
          Powered by TechNerd - Jul 2024
        </Link>
      </div>
    </div>
  );
}
