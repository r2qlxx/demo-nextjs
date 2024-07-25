import CustomIcon from "@/components/CustomIcon";
import MaxWidthContainer from "@/components/MaxWidthContainer"
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython, SiGnubash, SiSpring, SiSpringboot, SiMysql, SiPostgresql, SiMongodb, SiDocker, SiAnsible, SiAmazonaws } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const Skill = () => {
  return (
    <MaxWidthContainer>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl">My Skills</h1>
        <div className="mt-20 flex flex-wrap gap-4">
          <CustomIcon Icon={SiHtml5} style="text-5xl text-orange-500" />
          <CustomIcon Icon={SiCss3} style="text-5xl text-blue-500" />
          <CustomIcon Icon={SiJavascript} style="text-5xl text-yellow-500" />
          <CustomIcon Icon={SiTypescript} style="text-5xl text-blue-500" />
          <CustomIcon Icon={FaJava} style="text-5xl text-red-500" />
          <CustomIcon Icon={SiPython} style="text-5xl text-purple-500" />
          <CustomIcon Icon={SiGnubash} style="text-5xl text-gray-500" />
        </div>
        <div className="mt-20 flex flex-wrap gap-4">
          <CustomIcon Icon={RiNextjsFill} style="text-5xl" />
          <CustomIcon Icon={SiSpring} style="text-5xl text-green-500" />
          <CustomIcon Icon={SiSpringboot} style="text-5xl text-green-500" />
        </div>
        <div className="mt-20 flex flex-wrap gap-4">
          <CustomIcon Icon={SiMysql} style="text-5xl text-blue-500" />
          <CustomIcon Icon={SiPostgresql} style="text-5xl text-blue-900" />
          <CustomIcon Icon={SiMongodb} style="text-5xl text-green-500" />
        </div>
        <div className="mt-20 flex flex-wrap gap-4">
          <CustomIcon Icon={SiAmazonaws} style="text-5xl text-orange-500" />
          <CustomIcon Icon={SiDocker} style="text-5xl text-blue-500" />
          <CustomIcon Icon={SiAnsible} style="text-5xl" />
        </div>
        <p className="mt-20 flex flex-wrap gap-4">etc.</p>
      </div>
    </MaxWidthContainer >
  )
}
export default Skill