'use client'

import Image from "next/image"
import { useEffect, useRef } from "react"
import { GridContainer } from "./grid";
import gsap from "gsap"

const IconFile = "/icon-file.svg";
const IconHand = "/icon-hand.svg";
const IconHand02 = "/icon-hand-02.svg";
const IconMockup = "/mockup.svg";

export function SectionHero() {
  const textHeroRef = useRef(null)
  const mockupLeftRef = useRef(null)
  const mockupRightRef = useRef(null)

  useEffect(() =>{
    const textHero = textHeroRef.current
    const MLeft = mockupLeftRef.current
    const MRight = mockupRightRef.current

    gsap.fromTo(textHero, {
      opacity: 0
    },{
      opacity: 1,
      y:0,
      duration: 1,
      ease: 'power4.out'
    })

    gsap.fromTo(MLeft, {
      rotate: 0
    }, {
      rotate: -10,
      duration: 1
    })
    gsap.fromTo(MRight, {
      rotate: 0
    }, {
      rotate: 10,
      duration: 1
    })
  }, []);

  return (
    <section className=" relative w-full h-section-hero bg-hero bg-no-repeat bg-top bg-green-primary border-t border-t-green-border pt-16 overflow-hidden">
      <GridContainer className="flex flex-col items-center">
        <div className="w-full max-w-text-hero text-center opacity-0" ref={textHeroRef}>
          <h3 className="text-xl font-medium text-green-actived mb-4">Novo curso focado em instagram</h3>
          <h1 className="text-white text-6xl/normal font-semibold mb-8">Destrave suas habilidades</h1>
          <div className="flex items-center justify-center gap-10">
            <button className="flex items-center gap-2">
              <Image
                src={IconFile}
                alt="Search"
                width={20}
                height={20}
              />
              <span className="text-white font-medium">Assinar lista de espera</span>
            </button>
            <button className="py-4 px-5 bg-green-btn rounded-full text-green-primary font-bold">
              Começar agora
            </button>
          </div>
        </div>
        <div className="relative w-full max-w-area-icons h-28 mt-4">
          <Image
            src={IconHand}
            alt="Icon Hand"
            width={50}
            height={50}
            className="absolute left-0 bottom-0"
          />
          <Image
            src={IconHand02}
            alt="Icon Hand02"
            width={50}
            height={50}
            className="absolute top-0 right-1"
          />
        </div>
        <div className="absolute -bottom-44 w-full max-w-area-mockups flex justify-between">
          <Image
            src={IconMockup}
            alt="Mockup"
            width={330}
            height={100}
            className="relative top-[1.1rem] left-[3.3rem]"
            ref={mockupLeftRef}
          />
          <Image
            src={IconMockup}
            alt="Mockup"
            width={330}
            height={100}
            className="relative top-[1.1rem] right-[3.3rem]"
            ref={mockupRightRef}
          />
        </div>
      </GridContainer>
    </section>
  )
}