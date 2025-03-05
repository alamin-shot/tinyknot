import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import ninja from "../images/ninja.png";
import blade from "../images/ninja-blade.png";
export default function Nav() {
	return (
		<nav className="h-14 flex justify-between items-center font-robotoCondensed nav">
			<div className="text-[#f1e0c6] font-bold text-4xl pl-9 relative">
				<Link href="/">
					<h1>tinyKnot</h1>
				</Link>

				<div className="ninja absolute">
					<Image src={ninja} alt="" width={50} height={50} />
				</div>
			</div>
			<ul className="gap-5 flex justify-center items-center  text-amber-800 pr-20">
				<li>
					<Link href="/">TINY_URL</Link>
				</li>
				<li>
					<Link href="/about">ABOUT</Link>
				</li>
				<li>
					<Link href="/contact">CONTACT</Link>
				</li>
				<li>
					<Link target="_blank" href="https://github.com/alamin-shot">
						<FaGithub size={25} />
					</Link>
				</li>
				<div className="blade">
					<Image src={blade} alt="" width={30} height={30} />
				</div>
			</ul>
		</nav>
	);
}
