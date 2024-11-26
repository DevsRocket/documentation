import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ path, className, aria = "", children }) {
  const pathname = usePathname();
  const active = pathname == path;
  return (
    <Link
      aria-current={aria}
      className={active ? "text-green-500 " + className : " " + className}
      href={path}
    >
      {children}
    </Link>
  );
}
