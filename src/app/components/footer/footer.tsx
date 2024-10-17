import Link from "next/link";

function Footer() {
  return (
    <header className="flex justify-between">
      {/* Logo */}
      <div>
        <h3 className="absolute inset-x-0 bottom-0 h-16 ...08">Pakistan 2024 </h3>
      </div>

      {/* Links */}
      <nav>
        <ul className=" flex gap-x-4 absolute bottom-0 right-0 h-16 w-16...08">
          <li>
            <Link href="/">Privacy</Link>
          </li>
          <li>
            <Link href="/about">Terms</Link>
          </li>
          <li>
            <Link href="/contact">Settings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Footer;