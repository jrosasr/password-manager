import Link from "next/link";
import { SingleItemProps } from "./SingleItem.types";

export function SingleItem(props: SingleItemProps) {
    const { label, icon: Icon, href, onClick } = props;
  return (
    <Link
      href={href}
      className="flex items-center gap-2 hover:bg-blue-100/20 p-2 rounded-md transition-all duration-300"
      onClick={onClick}
    >
        <div className="bg-blue-100/20 p-2 rounded-md">
            <Icon size={20} />
        </div>
        {label}
    </Link>
  );
}
