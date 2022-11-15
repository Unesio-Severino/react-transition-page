import Link from "next/link";

export default function Navbar() {
    return(
        <nav>
            <ul>
                <Link href={"/"}>
                    <li>Home</li>
                </Link>

                <Link href={"/contact"}>
                    <li>Contacts</li>
                </Link>

            </ul>
        </nav>
    )
}