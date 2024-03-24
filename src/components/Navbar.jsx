import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-col gap-y-10">
        <li>
          <Link href="/form" className="border border-cyan-200 p-4">
            Register as Speaker
          </Link>
        </li>
        <li>
          <Link href="/faq" className="border border-cyan-200 p-4">
            Frequently asked questions
          </Link>
        </li>
        <li>
          <Link href="/sponsors" className="border border-cyan-200 p-4">
            Sponsorship prospectous
          </Link>
        </li>
      </ul>
    </nav>
  );
}
