import React from "react";
import { IconType } from "../../consts/IconConsts";

import Coin from "../../assets/icon/coin.svg";
import Twitter from "../../assets/icon/twitter.svg";
import Mail from "../../assets/icon/mail.svg";
import Man from "../../assets/icon/man.svg";
import Heart from "../../assets/icon/heart.svg";
import Logout from "../../assets/icon/logout.svg";
import Withdrawal from "../../assets/icon/withdrawal.svg";
import Back from "../../assets/icon/back.svg";
import Pen from "../../assets/icon/pen.svg";

export type Props = {
  iconType: IconType;
  size: number;
  color?: string;
};
const IconAtoms = ({ iconType, size, color }: Props) => {
  switch (iconType) {
    case IconType.COIN:
      return <Coin width={size} height={size} fill={color} />;
    case IconType.TWITTER:
      return <Twitter width={size} height={size} fill={color} />;
    case IconType.MAIL:
      return <Mail height={size} width={size} fill={color} />;
    case IconType.MAN:
      return <Man height={size} width={size} fill={color} />;
    case IconType.HEART:
      return <Heart height={size} width={size} fill={color} />;
    case IconType.LOGOUT:
      return <Logout height={size} width={size} fill={color} />;
    case IconType.WITHDRAWAL:
      return <Withdrawal height={size} width={size} stroke={color} />;
    case IconType.PEN:
      return <Pen height={size} width={size} fill={color} />;
    case IconType.BACK:
      return <Back height={size} width={size} fill={color} />;
    default:
      return <></>;
  }
};

export default IconAtoms;
