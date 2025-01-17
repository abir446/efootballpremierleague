"use client";

import React from "react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { Link } from "@nextui-org/react";

export default function Menu() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="shadow" className="cursor-pointer font-semibold">Open Menu</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Link Actions">
      <DropdownItem key="Home">
          <Link href="/">Home</Link>
        </DropdownItem>
        <DropdownItem key="season">
          <Link href="/season">Season</Link>
        </DropdownItem>
        <DropdownItem key="about">
          <Link href="/about">About Us</Link>
        </DropdownItem>
        <DropdownItem key="contact">
          <Link href="/contact">Contact Us</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
