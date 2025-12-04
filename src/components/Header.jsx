import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="relative flex items-center justify-between px-4 py-3 bg-white mt-5">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Navigation menus in the middle */}
        <NavigationMenu viewport={false} className="hidden md:block">
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-theme hover:cursor-pointer transition-colors">
                Buy
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-theme hover:cursor-pointer transition-colors">
                Rent
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-theme hover:cursor-pointer transition-colors">
                Sell
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-theme hover:cursor-pointer transition-colors">
                Blogs
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-theme hover:cursor-pointer transition-colors">
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Favorite heart and Login button on the right - hidden on mobile */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 hover:cursor-pointer hover:text-theme">
            <Heart className="h-6 w-6 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
            <span className="text-sm font-medium">Favourite</span>
          </div>

          <button className="px-4 py-2 text-white rounded-theme  transition-colors custom-theme-color">
            Login Now
          </button>
        </div>

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t z-50">
          <nav className="flex flex-col py-4">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium hover:text-theme hover:bg-gray-50 transition-colors"
            >
              Buy
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium hover:text-theme hover:bg-gray-50 transition-colors"
            >
              Rent
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium hover:text-theme hover:bg-gray-50 transition-colors"
            >
              Sell
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium hover:text-theme hover:bg-gray-50 transition-colors"
            >
              Blogs
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium hover:text-theme hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </a>
            <div className="border-t mt-4 pt-4 px-4">
              <div className="flex items-center gap-2 mb-4 hover:cursor-pointer hover:text-theme">
                <Heart className="h-6 w-6 text-gray-600" />
                <span className="text-sm font-medium">Favourite</span>
              </div>
              <button className="w-full px-4 py-2 text-white rounded-theme transition-colors custom-theme-color">
                Login Now
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
