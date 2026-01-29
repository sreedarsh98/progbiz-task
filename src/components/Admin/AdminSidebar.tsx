"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminSidebar = () => {
  const path = usePathname();

  return (
    <aside className="admin-sidebar">
      <h3 className="admin-logo">REPOO</h3>

      <nav>
        <Link
          href="/admin"
          className={path === "/admin" ? "active" : ""}
        >
          Dashboard
        </Link>

        <Link
          href="/admin/faq"
          className={path.includes("/faq") ? "active" : ""}
        >
          FAQ
        </Link>

        <Link
          href="/admin/testimonial"
          className={path.includes("/testimonial") ? "active" : ""}
        >
          Testimonial
        </Link>

        <Link
          href="/admin/users"
          className={path.includes("/users") ? "active" : ""}
        >
          Users
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
