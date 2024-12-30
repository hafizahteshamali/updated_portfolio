import Image from "next/image";


const DevImg = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} className="rounded-full" fill priority alt="" />
    </div>
  )
}

export default DevImg