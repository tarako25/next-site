"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

const Header = () => {
    const MenuList = [
        {
            name: "メニュー1",
            url: "/menu1"
        },
        {
            name: "メニュー2",
            url: "/menu2"
        },
        {
            name: "メニュー3",
            url: "/menu3"
        },
        {
            name: "メニュー4",
            url: "/menu4"
        },
    ]
  return (
    <>
      <div className="flex justify-center items-center w-full h-[80px]">
        <div className="flex justify-between items-center w-full">
          <div>タイトル</div>
          <div className="hidden md:block">
            <NavigationMenu className="list-none">
              <NavigationMenuItem>
                {MenuList.map((item, index) => (
                    <Link href={item.url} key={index} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {item.name}
                    </NavigationMenuLink>
                  </Link>
                ))}
              </NavigationMenuItem>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
