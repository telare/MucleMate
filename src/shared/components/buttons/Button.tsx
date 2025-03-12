import "@shared/styles/components-styles/button.scss";
import Image from "next/image";
type ButtonProps = {
  style?: string;
  text: string;
  iconPath?: string;
  type: "submit" | "button";
  children?:React.ReactNode;
  fnc?: () => void;
};
export default function Button({
  style,
  text,
  iconPath,
  fnc,
  children,
  type,
}: ButtonProps) {
  return (
    <button className={style && style} onClick={fnc && fnc} type={type}>
      {iconPath ? <Image alt="btn_image" src={iconPath} /> : text}
      {children && children}
    </button>
  );
}
