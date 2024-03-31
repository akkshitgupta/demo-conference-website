import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row gap-y-7">
        <li>
          <Link
            href="/form"
            className="border w-full border-blue-900 dark:border-cyan-200 p-4">
            Register as Speaker
          </Link>
        </li>
        <li>
          <Link
            href="/faq"
            className="border border-blue-900 dark:border-cyan-200 p-4">
            Frequently asked questions
          </Link>
        </li>
        <li>
          <Link
            href="/sponsors"
            className="border border-blue-900 dark:border-cyan-200 p-4">
            Sponsorship prospectous
          </Link>
        </li>
      </ul>
    </nav>
  );
}
