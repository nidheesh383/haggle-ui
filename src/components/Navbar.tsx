import React from "react";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Navbar,
  Avatar,
  Badge,
  Divider,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";

interface AvatarProps {
  isBordered: boolean;
  radius: string;
  src: string;
}

export default function Layout() {
  return (
    <>
      <Navbar shouldHideOnScroll>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <AcmeLogo />
            <p className="hidden sm:block font-bold text-inherit">Haggle</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3">
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page" color="secondary">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
            <NavbarContent justify="end">
              <Link color="foreground" href="#">
                <Badge content="5" color="default">
                  <Avatar
                    isBordered={true}
                    radius="lg"
                    src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                  />
                </Badge>
              </Link>
            </NavbarContent>
          </NavbarContent>
        </NavbarContent>
      </Navbar>
      <Divider className="my-4" />
    </>
  );
}
