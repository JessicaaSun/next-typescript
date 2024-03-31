"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navbarItem } from "./menu";


export default function NavbarComponent() {
  const pathname = usePathname();
  // if (pathname.includes("/dashboard")) return null;
  // else
    return (
      <Navbar className="bg-blue-200">
        <NavbarBrand>
          <Image width={40} className="mr-4 rounded-full" height={40} src={"/assets/pic.jpg"} alt={""} />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {
            navbarItem.map((item,index : any)=>(
              <NavbarItem key={index}>
            <Link
              color="foreground"
              href={item.path}
              className={`${pathname === item.path && "font-bold text-blue-800"}`}
            >
              {
                item.title
              }
            </Link>
          </NavbarItem>
            ))
          }
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/dashboard">Dashboard</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/login" variant="flat">
              Login
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
}
