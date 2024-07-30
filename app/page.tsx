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

            <h2 className=" md:text-2xl font-semibold text-emerald-500 ">
              No Junk
            </h2>
          </div>
          <div className=" flex gap-5 items-center">
            <Link
              href="https://github.com/yeabnoah/No-Junk"
              className=" cursor-pointer"
            >
              <FaGithub
                size={23}
                color="#10b981"
                className=" hover:-translate-y-2 transition-all"
              />
            </Link>
            <Button className=" flex gap-3 text-emerald-500 md:text-xl md:py-5 py-2 hover:-translate-y-2 transition-all rounded">
              <Link href="https://t.me/technerd345"> Find Me</Link>

              <FaTelegram size={20} />
            </Button>
          </div>
        </div>

        <div className=" md:flex md:flex-row mt-20 flex-col flex gap-10">
          <div className=" flex-1">
            <div className=" md:mt-28 flex justify-center items-center">
              <div className=" md:mx-10 mx-3 text-start md:text-6xl text-3xl font-bold text-emerald-500 md:w-[85%]  justify-center flex-col flex items-start">
                Welcome to No Junk, Join us and consume organic shared Contents.
                <h2 className=" mt-5 text-start md:text-xl text-sm font-light text-emerald-500 ">
                  No Junk is your go-to platform for discovering and sharing the
                  most valuable content from across all social media. We've
                  built a community where only the best and most interesting
                  posts make the cut. Say goodbye to clutter and endless
                  scrolling; at No Junk, it's all quality, all the time.
                </h2>
                <Link href="">
                  <Button className=" justify-start hover:bg-emerald-500 hover:-translate-y-2 transition-all hover:text-background flex gap-5 items-center mt-10  border-emerald-500 border rounded md:text-xl text-sm md:py-7 py-5">
                    <FaCloudDownloadAlt size={30} />
                    Download the app for Android
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className=" flex-1">
            <Image src="/app3.png" height={700} width={700} alt="app" />
          </div>
        </div>
      </div>

      <div className=" h-[70vh] bg-emerald-500 px-5 flex flex-col justify-center">
        <div>
          <h2 className=" text-background my-5 md:text-5xl text-2xl text-center font-semibold">
            Share from Your Favorite Platforms
          </h2>

          <h2 className=" md:mt-10 max-w-4xl text-center font-light text-background mx-auto md:text-2xl">
            At No Junk, we believe in the power of great content, no matter
            where it comes from. Our platform allows you to discover and share
            the best posts from a wide range of social media platforms. Whether
            you're a fan of viral videos, insightful articles, or stunning
            photos, you'll find it all here.
          </h2>

          <div className=" flex items-center justify-center gap-4 md:gap-8 mt-10">
            <FaTelegram
              size={35}
              className="  text-background hover:-translate-y-2 transition-all"
            />
            <FaInstagram
              size={35}
              className="  text-background hover:-translate-y-2 transition-all"
            />
            <FaFacebook
              size={35}
              className="  text-background hover:-translate-y-2 transition-all"
            />
            <FaXTwitter
              size={35}
              className="  text-background hover:-translate-y-2 transition-all"
            />
            <FaYoutube
              size={35}
              className="  text-background hover:-translate-y-2 transition-all"
            />
            <FaLinkedin
              size={35}
              className="  text-background hover:-translate-y-2 transition-all"
            />
            <FaReddit
              size={35}
              className="  text-background hover:-translate-y-2 transition-all"
            />
            <FaTiktok
              size={35}
              className="  text-background hover:-translate-y-2 transition-all"
            />
          </div>
        </div>
      </div>

      <div className=" bg-emerald p-5 my-20 md:flex md:flex-row flex-col justify-center gap-10 md:mx-44">
        <div className=" md:flex-shrink-0 flex-col flex justify-center items-center">
          <Image
            src="/technerd.png"
            height={200}
            width={200}
            alt="app"
            className=" bg-emerald-500 md:rounded-2xl rounded-full md:h-64 md:w-64 h-24 w-24 justify-center"
          />
        </div>

        <div className=" flex-grow items-center flex  gap-96">
          <div className="  text-start">
            <h2 className=" text-emerald-500 my-5 md:text-5xl text-2xl text-center md:text-start font-semibold">
              little info about me
            </h2>

            <h2 className=" md:mt-10 mt-5 text-center md:text-start font-light text-emerald-500 mx-auto text-sm md:text-xl">
              👋 Hello! I'm Yeabsra, a web and mobile developer from Ethiopia. I
              taught myself how to build websites and apps. I enjoy using
              technology to solve problems and bring ideas to life. I'm good at
              paying attention to small details and finding solutions when
              things get tough. When I'm not coding, I'm always learning
              something new. Let's connect and work together to make cool stuff
              happen!
            </h2>
            <div>
              <div className=" flex items-start md:justify-start justify-center md:gap-2 gap-5 mt-5 ">
                <Link href="https://t.me/technerd">
                  <FaTelegram
                    size={20}
                    className="  text-emerald-500 hover:-translate-y-2 transition-all md:h-8 md:w-12 h-5 w-5"
                  />
                </Link>

                <Link href="https://x.com/TechNerd556">
                  <FaXTwitter
                    size={20}
                    className="  text-emerald-500 hover:-translate-y-2 transition-all md:h-8 md:w-12 h-5 w-5"
                  />
                </Link>

                <Link href="https://www.linkedin.com/in/yeabsra-ashebir-tech-nerd-8a3a80267/">
                  <FaLinkedin
                    size={20}
                    className="  text-emerald-500 hover:-translate-y-2 transition-all md:h-8 md:w-12 h-5 w-5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-[70vh] bg-emerald-500 md:px-5 px-2 flex flex-col justify-center">
        <div>
          <h2 className=" text-background my-5 font-bold text-2xl md:text-5xl text-center md:font-semibold">
            Why I Created No Junk
          </h2>

          <h2 className=" md:mt-10 md:w-[60%]  text-center font-light text-background mx-auto text-sm md:text-xl">
            Let's face it, social media is packed with endless posts, and it can
            be tough to find the good stuff without getting lost in the noise.
            We built No Junk because we wanted a place where you could easily
            find and share the best content from all your favorite platforms.
            Our goal is to make it simple for you to discover quality posts,
            without having to wade through tons of fluff. Whether you're looking
            for something inspiring, funny, or just plain interesting, No Junk
            is here to help you find the gems. We believe that great content
            deserves to be seen, and we're excited to share it with you!
          </h2>

          <div className=" flex justify-center items-center">
            <Link href="">
              <Button className=" hover:bg-emerald-500 hover:-translate-y-2 transition-all hover:text-background flex gap-5 items-center mt-10  border-background bg-background text-emerald-500 border rounded  md:text-xl md:py-7 py-5">
                <FaCloudDownloadAlt size={30} />
                Download the app for Android
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="  h-24 bg-background flex md:justify-between mx-5 justify-between items-center md:w-[80%] md:mx-auto">
        <div className=" flex items-center gap-3">
          <Image
            src="/icon.png"
            height={25}
            width={25}
            alt="logo"
            className=" h-5 w-5 md:h-8 md:w-8"
          />
          <h2 className=" md:text-2xl text-sm text-emerald-400 font-medium">
            No Junk
          </h2>
        </div>

        <div className=" hidden md:block">
          <div className=" flex items-start justify-start md:gap-2 gap-5 mt-5 ">
            <Link href="https://t.me/technerd">
              <FaTelegram
                size={20}
                className="  text-emerald-500 hover:-translate-y-2 transition-all md:h-8 md:w-12 h-2 w-2"
              />
            </Link>

            <Link href="https://x.com/TechNerd556">
              <FaXTwitter
                size={20}
                className="  text-emerald-500 hover:-translate-y-2 transition-all md:h-8 md:w-12 h-2 w-2"
              />
            </Link>

            <Link href="https://www.linkedin.com/in/yeabsra-ashebir-tech-nerd-8a3a80267/">
              <FaLinkedin
                size={20}
                className="  text-emerald-500 hover:-translate-y-2 transition-all md:h-8 md:w-12 h-2 w-2"
              />
            </Link>
          </div>
        </div>

        <div className="  md:hidden">
          <div className=" flex items-center justify-center  gap-5 ">
            <Link href="https://t.me/technerd">
              <FaTelegram
                size={20}
                className="  text-emerald-500 hover:-translate-y-2 transition-all md:h-8 md:w-12 h-5 w-5"
              />
            </Link>

            <Link href="https://x.com/TechNerd556">
              <FaXTwitter
                size={20}
                className="  text-emerald-500 hover:-translate-y-2 transition-all md:h-8 md:w-12 h-5 w-5"
              />
            </Link>

            <Link href="https://www.linkedin.com/in/yeabsra-ashebir-tech-nerd-8a3a80267/">
              <FaLinkedin
                size={20}
                className="  text-emerald-500 hover:-translate-y-2 transition-all md:h-8 md:w-12 h-5 w-5"
              />
            </Link>
          </div>
        </div>

        <div className=" md:flex items-center justify-center gap-3 hidden ">
          <Link
            href="https://t.me/selfmadecoder"
            className=" text-emerald-400 text-xs md:text-base font-normal hover:text-emerald-700"
          >
            Powered by TechNerd - Jul 2024
          </Link>
        </div>
      </div>

      <div className=" flex items-center justify-center gap-3 -mt-5 mb-3 md:hidden">
        <Link
          href="https://t.me/selfmadecoder"
          className=" text-emerald-400 text-xs md:text-base font-normal hover:text-emerald-700"
        >
          Powered by TechNerd - Jul 2024
        </Link>
      </div>
    </div>
  );
}
