import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CiShoppingCart } from "react-icons/ci";
import { Input } from "@/components/ui/input"

export default function Navbar() {
	return (
		<nav className="flex justify-around items-center text-black py-4 border-b">
			<section className="text-3xl text-black">
				Logo
			</section>

			<ul className="flex items-center justify-center gap-5 text-lg">
				<li> <Link href={'/'}> Home </Link> </li>
				<li> <Link href={'/'}> Shop </Link> </li>
				<li> <Link href={'/'}> Contact </Link> </li>
			</ul>
			<section className="flex items-center justify-center gap-5 text-lg">
				<section>
					<Input type="text" placeholder="Search products.." />
				</section>
				<section className="flex gap-2">
					<Button> Login </Button>
					<Button variant={'outline'}> <CiShoppingCart size={24} /> </Button>
				</section>
			</section>
		</nav >
	)
}
