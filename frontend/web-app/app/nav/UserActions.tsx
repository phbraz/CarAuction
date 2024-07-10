"use client";

import React from "react";
import { Dropdown, DropdownDivider } from "flowbite-react";
import { User } from "next-auth";
import { HiUser } from "react-icons/hi";
import Link from "next/link";
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from "react-icons/ai";
import { HiCog } from "react-icons/hi2";
import { signOut } from "next-auth/react";

interface Props {
  user: Partial<User>;
}

const UserActions = ({ user }: Props) => {
  return (
    <Dropdown label={`Welcome ${user.name}`} inline>
      <Dropdown.Item icon={HiUser}>
        <Link href="/">My Auctions</Link>
      </Dropdown.Item>

      <Dropdown.Item icon={AiFillTrophy}>
        <Link href="/">Auctions won</Link>
      </Dropdown.Item>

      <Dropdown.Item icon={AiFillCar}>
        <Link href="/">Sell my car</Link>
      </Dropdown.Item>

      <Dropdown.Item icon={HiCog}>
        <Link href="/">Session (dev only)</Link>
      </Dropdown.Item>

      <DropdownDivider />

      <Dropdown.Item
        icon={AiOutlineLogout}
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Sign out
      </Dropdown.Item>
    </Dropdown>
  );
};
export default UserActions;
