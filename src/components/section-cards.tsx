'use client'

import Image from "next/image"
import { useEffect, useRef } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Mockup = '/mockup-main.png'

const Card01 = '/image-01.png'
const Card02 = '/image-02.png'
const Card03 = '/image-03.png'
const Card04 = '/image-04.png'
const Card05 = '/image-05.png'
const Card06 = '/image-06.png'

export function SectionCards() {
  const MockupRef = useRef(null)
  const titleRef = useRef(null)
  const sectionRef = useRef(null)

  const section = sectionRef.current;

  const Card01Ref = useRef(null)
  const Card02Ref = useRef(null)
  const Card03Ref = useRef(null)
  const Card04Ref = useRef(null)
  const Card05Ref = useRef(null)
  const Card06Ref = useRef(null)

  function animateCards (images : null[], position : number){
    gsap.fromTo(images, {
      opacity: 0,
      x: position
    }, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: .1, 
      scrollTrigger: {
        trigger: section,
        start: 'center center'
      }
    })
  }

  useEffect(() =>{
    const MockupPhone = MockupRef.current;
    const title = titleRef.current;

    gsap.fromTo(MockupPhone, {
      opacity: 0,
      scale: .5
    },{
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power5.out"
    })

    gsap.fromTo(title, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: '65% center',
        end: '',
        markers: true
      }
    })

    const img01 = Card01Ref.current;
    const img02 = Card02Ref.current;
    const img03 = Card03Ref.current;
    const img04 = Card04Ref.current;
    const img05 = Card05Ref.current;
    const img06 = Card06Ref.current;

    const leftImages = [img01, img02, img03]
    const rightImages = [img04, img05, img06]

    animateCards(leftImages, 50)
    animateCards(rightImages, -50)
    
  }, [MockupRef, titleRef, section, Card01Ref, Card02Ref, Card03Ref, Card04Ref, Card05Ref, Card06Ref, animateCards])
  return (
    <>
      <section className=" w-full pb-20 " ref={sectionRef}>
        <Image
          src={Mockup}
          alt='Mockup main'
          width={330}
          height={100}
          className="sticky z-10 top-56 mx-auto -mt-[33rem] mb-16 opacity-0"
          ref={MockupRef}
        />

        <h2 className="text-center text-7xl font-semibold text-black mb-56 opacity-0" ref={titleRef}>Faça
          <span className="text-green-title-card"> você </span>mesmo em casa</h2>

        <div className=" relative w-full max-w-area-cards h-area-cards mx-auto">
          <Image src={Card01} ref={Card01Ref} className="absolute top-8 left-44" alt='card01'  width={220} height={220}  /
          >
          <Image src={Card02} ref={Card02Ref} className="absolute left-0 bottom-32" alt='card02'   width={220} height={220} /
          >
          <Image src={Card03} ref={Card03Ref} className="absolute bottom-0 left-80" alt='card03'   width={220} height={220} /
          >
          <Image src={Card04} ref={Card04Ref}  className="absolute top-0 right-32" alt='card04'   width={220} height={220} /
          >
          <Image src={Card05} ref={Card05Ref} className="absolute right-0 bottom-28" alt='card05'   width={220} height={220} /
          >
          <Image src={Card06} ref={Card06Ref} className="absolute bottom-0 right-80" alt='card06'   width={220} height={220} /
          >
        </div>
      </section>
    </>
  )
}