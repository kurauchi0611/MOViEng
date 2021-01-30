import React from "react";
import { IconType } from "../../consts/IconConsts";

import Coin from "../../assets/icon/coin.svg";
import Twitter from "../../assets/icon/twitter.svg";
import Mail from "../../assets/icon/mail.svg";
import Main from "../../assets/icon/main.svg";
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
      return (
        <Coin width={size} height={size} color={color} />
      );
    case IconType.TWITTER:
      return (
        <Twitter width={size} height={size} color={color} />
      );
    case IconType.MAIL:
      return (
        <Mail height={size} width={size} color={color} />
      );
    case IconType.MAN:
      return (
        <Main height={size} width={size} color={color} />
      );
    case IconType.HEART:
      return (
        <Heart height={size} width={size} color={color} />
      );
    case IconType.LOGOUT:
      return (
        <Logout height={size} width={size} color={color} />
      );
    case IconType.WITHDRAWAL:
      return (
        <Withdrawal
          height={size}
          width={size}
        
          color={color}
        />
      );
    case IconType.PEN:
      return <Pen height={size} width={size} color={color} />;
    default:
      return (
        <Back width={size} height={size} color={color} />
      );
  }
};

export default IconAtoms;
