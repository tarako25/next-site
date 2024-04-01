"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

const Header = () => {
  const MenuList = [
    {
      name: "ホーム",
      url: "/"
    },
    {
      name: "記事一覧",
      url: "/articles"
    },
    {
      name: "制作物一覧",
      url: "/products"
    }
  ];
  return (
    <>
      <div className="w-full bg-white flex justify-center flex-col items-center">
        <div className="flex justify-center items-center xl:w-[1080px] w-[90%] h-[80px]">
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
      </div>
    </>
  );
};

export default Header;
