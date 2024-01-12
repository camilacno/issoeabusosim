import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className=" flex  justify-center items-center   ">
      <div className="container w-4/5 mx-auto flex items-center justify-between p-1.5 ">
        <div className="flex  items-center ">
          <Image src="/logo.jpg" width={50} height={50} alt="Logo" />
        </div>

        <div className="flex gap-6 items-center justify-center">
          <ul className="flex gap-6 text-lg">
            <li>
              <Link href={'/rede-apoio'}>Rede de apoio</Link>
            </li>
            <li>
              <Link href={'/pedir-ajuda'}>Como pedir ajuda</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
