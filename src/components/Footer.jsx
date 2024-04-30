import { LuHeart } from "react-icons/lu";
import { cn } from "../utils/cn-merge";

const Footer = () => {
  return (
    <footer
      className={cn(
        "absolute w-full  border-t border-default-200 p-6 hide-in-print lg:ps-64"
      )}
    >
      <div className={cn("container ms-2")}>
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <p className="text-default-600">
            Designed, crafted and coded with{" "}
            <LuHeart size={16} className="inline fill-red-500 text-red-500" />{" "}
            by Coderthemes.com
          </p>

          <div className="flex justify-end gap-6 mr-15">
            <a href="" className="font-medium text-default-500">
              Terms
            </a>
            <a href="" className="font-medium text-default-500">
              Privacy
            </a>
            <a href="" className="font-medium text-default-500">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
