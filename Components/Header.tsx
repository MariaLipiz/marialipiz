import Link from "next/link";

export default function Header() {
  return (
    <header className="confirm-header">
      <Link className="brand" href="/" aria-label="María Lipiz, inicio">
        maría lípiz.
      </Link>
    </header>
  );
}
