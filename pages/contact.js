import Link from "next/link";
import { motion as m } from "framer-motion";
import { container, item } from "../animation";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  return (
    <m.main
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
          className="text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-20 px-12 "
    >
      <div className="my-80 p-1 font-archivo overflow-hidden ">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="lg:text-5xl text-6xl lg:text-right text-center"
        >
          Vamos Falar
        </m.h1>
      </div>
      <div className="flex gap-20">
        <div className="lg:text-2xl text-base">
          <h3>Encontre me:</h3>
        </div>
        <div className="font-latoBold  lg:text-6xl text-2xl underline">
          <m.ul variants={container} initial="hidden" animate="show">

            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                    <div className="text-6xl flex justify-center gap-16  text-gray-900 dark:text-gray-400">
                        <AiFillGithub className="text-5xl" />
                        <AiFillInstagram className="text-5xl" />
                        <AiFillLinkedin className="text-5xl" />
                    </div>
              </m.li>
            </div>

          </m.ul>
        </div>
      </div>
    </m.main>
  );
}
