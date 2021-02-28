import Logo from "../../assets/Logo.svg";

export type Props = {
  size: number
}

const LogoAtoms = ({ size }: Props) => {
  return <Logo width={size} />;
};

export default LogoAtoms;
