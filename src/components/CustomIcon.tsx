import { eventNames } from "process";
import { IconType } from "react-icons";

type Props = {
  Icon: IconType,
  style?: string,
  event?: React.MouseEventHandler,
}

const CustomIcon = ({ Icon, style, event }: Props) => {
  return (
    <div className={style} onClick={event}>
      <Icon />
    </div>
  )
}

export default CustomIcon