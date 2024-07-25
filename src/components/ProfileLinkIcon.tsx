import Link from "next/link"
import CustomIcon from "./CustomIcon"
import { IconType } from "react-icons"

type Props = {
  path: string,
  Icon: IconType,
}

const ProfileLinkIcon = ({ path, Icon }: Props) => {
  return (
    <Link href={path} className="hover:scale-125 transition-all">
      <CustomIcon Icon={Icon} style="text-xl p-2 shadow" />
    </Link>
  )
}
export default ProfileLinkIcon