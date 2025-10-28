import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href='/'>
        <Image src='/logo.png' width={70} height={74} priority alt="" />
    </Link>
  )
}

export default Logo