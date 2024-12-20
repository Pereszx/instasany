import Image from "next/image"
import { GridContainer } from "./grid";
import Link from "next/link";

const Logoimg = "/logo.svg";
const SearchIcon = "/icon-search.svg";
const IconUser = "/icon-user.svg";

const arrayMenu = [
  'Início',
  'Benefícios',
  'Para quem é o curso?',
  'Preços promocionais',
  'Sobre nós'
]


export function Header() {
  const activedStyled = 'bg-green-actived text-opacity-100 rounded-full'
  return (
    <header className="relative w-full h-24 bg-green-primary flex items-center">
      <GridContainer className="flex items-center justify-between">
          <Image
            src={Logoimg}
            alt="Logo"
            width={150}
            height={150}
          />
          <div className="flex items-center gap-20">
            <nav className="flex gap-2">
              {
                arrayMenu.map((item, index) => (
                  <Link key={index} href="#" className={`px-3 py-1 text-white 
                  text-opacity-40 hover:text-opacity-100 transition-all ${ index == 0 ? activedStyled: '' }`}> { item } </Link>
                ))
              }
            </nav>
            <div className="flex items-center gap-6">
              <button>
                <Image
                  src={SearchIcon}
                  alt="Search"
                  width={20}
                  height={20}
                />
              </button>
              <button className="flex items-center gap-2">
                <Image
                  src={IconUser}
                  alt="User"
                  width={20}
                  height={20}
                />
                <span className="text-white font-medium">Fazer login</span>
              </button>
            </div>
          </div>
      </ GridContainer>
    </header>
  )
}