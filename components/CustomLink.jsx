import Link from "next/link";
import { usePathname } from "next/navigation";
import { cloneElement } from "react";

export default function CustomLink({
  path,
  className,
  aria = undefined,
  children,
}) {
  const pathname = usePathname();
  const active = pathname == path;

  const activeClass = active ? "text-green-500" : "";

  const modifiedChildren =
    typeof children === "string"
      ? children // Leave text nodes as is
      : cloneElement(children, {
          className: `${children.props.className || ""} ${activeClass}`.trim(),
        });

  return (
    <Link href={path} aria-current={aria} className={className}>
      {modifiedChildren}
    </Link>
  );
}
