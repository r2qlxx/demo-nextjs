import MaxWidthContainer from "@/components/MaxWidthContainer"
import { BsTwitterX, BsYoutube, BsPersonBoundingBox } from "react-icons/bs";
import CustomIcon from "@/components/CustomIcon";
import { Pacifico } from "next/font/google";
import ProfileLinkIcon from "@/components/ProfileLinkIcon";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

const About = () => {
  const URL_X = "https://x.com/";
  const URL_YOUTUBE = "https://www.youtube.com/";

  return (
    <MaxWidthContainer>
      <div className="flex flex-col items-center lg:flex-row justify-center lg:gap-40">
        <CustomIcon Icon={BsPersonBoundingBox} style="text-[14em] text-blue-950" />
        <div className="flex flex-col justify-center gap-12 pt-20">
          <div className="flex flex-col justify-center gap-12">
            <p className="text-2xl">Hello. I'm </p>
            <p className={`text-6xl font-bold ${pacifico.className}`}>r2qlxx</p>
            <p className="text-2xl">, a developer.</p>
          </div>
          <div className="flex items-center gap-12">
            <ProfileLinkIcon path={URL_X} Icon={BsTwitterX} />
            <ProfileLinkIcon path={URL_YOUTUBE} Icon={BsYoutube} />
          </div>
          <div className="border border-gray-500"></div>
          <div className="">
            JPN
          </div>
        </div>
      </div>
    </MaxWidthContainer >
  )
}
export default About