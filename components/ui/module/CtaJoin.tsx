// // components/ui/main/module/CtaJoin.tsx

// "use client"

// import { useTransition } from "react"
// import { useRouter } from "next/navigation"
// import ContentHeadline from "@/components/ui/frame/ContentHeadline"


// const CtaJoin = () => {
//   const [isPending, startTransition] = useTransition()
//   const router = useRouter()

//   const handleClick = (href: string) => {
//     startTransition(() => {
//       router.push(href)
//     })
//   }

//   return (
//     <div className="py-16 bg-mainBlue">
//       <div className="md:md:w-1200 mx-auto text-white px-6 md:px-0">
//         <ContentHeadline
//           ImageSrc="/common/join_cta.svg"
//           ImageWidth={35}
//           ImageHeight={35}
//           title="入会のご案内"
//         />
//         <p className="text-center leading-8 -mt-8 text-lg">
//           通信販売広告に協会の会員であることをあらわすJADMAマークを使用することができ、
//           <br className="hidden md:block" />
//           企業に対する信頼感を消費者に対してアピールできます。
//         </p>
//         <ul className="mt-6 md:flex items-center justify-center md:gap-x-4 ">
//           {/* <li>
//             <AllButtonBlue
//               text="入会資格について詳しくはこちら"
//               href="/join"
//               onClick={handleClick}
//               isPending={isPending}
//             />
//           </li>
//           <li className="mt-1">
//             <AllButtonBlue
//               text="JADMAについて詳しく知る"
//               href="/abouts"
//               onClick={handleClick}
//               isPending={isPending}
//             />
//           </li> */}
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default CtaJoin
