import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className=" flex  justify-center items-center  ">
      <div className="container w-[1216px] mx-auto flex items-center justify-between p-1.5">
        <div className="flex  items-center ">
          <Image src="/logo.jpg" width={50} height={50} />
        </div>

        <div className="flex gap-6 items-center justify-center">
          <ul className="flex gap-6 text-lg">
            <li>
              <Link href={'/about'}>Rede de apoio</Link>
            </li>
            <li>Como pedir ajuda</li>
          </ul>
        </div>
      </div>
    </header>
  )
}
