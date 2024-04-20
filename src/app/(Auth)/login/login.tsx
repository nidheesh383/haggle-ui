"use client";
import CustomButton from "@/components/button/CustomButton";
import { EyeFilledIcon } from "@/components/icon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/icon/EyeSlashFilledIcon";
import { MailIcon } from "@/svg/MailIcon";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="grid md:grid-cols-2 h-screen">
      <div
        className="text-center content-center hidden md:block "
        style={{ backgroundColor: "#282929" }}
      >
        <div className="flex justify-center items-center">
          <Image
            src="/undraw_takeout_boxes_ap54.svg"
            alt="login"
            width={600}
            height={600}
            loading="lazy"
          />
        </div>
        <p className="text-3xl pt-16">Haggle - Trade with Ease</p>
      </div>
      <div className="content-center" style={{ backgroundColor: "#171617" }}>
        <div className="grid place-items-center">
          <p className="text-3xl">{"Login"}</p>
          <Input
            type="email"
            label="Email"
            placeholder="you@example.com"
            labelPlacement="outside"
            className="pt-6 w-80"
            endContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Input
            label="Password"
            variant="bordered"
            placeholder="Enter your password"
            labelPlacement="outside"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-xs pt-6"
          />
          <div className="pt-6">
            <CustomButton
              label={"Login"}
              // isLoading={true}
              onChange={() => {
                console.log("...Checking...");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
