import "@shared/styles/components-styles/Button.scss";
import Image from "next/image";
type ButtonProps = {
  style?: string;
  text?: string;
  iconPath?: string ;
  icon?:React.ReactElement;
  type: "submit" | "button";
  children?:React.ReactNode;
  fnc?: () => void;
};
export default function Button({
  style,
  text,
  icon,
  iconPath,
  fnc,
  children,
  type,
}: ButtonProps) {
  return (
    <button className={style && style} onClick={fnc && fnc} type={type}>
      {iconPath && <Image alt="btn_image" src={iconPath} />}
      {icon && icon}
      {text && text}
      {children && children}
    </button>
  );
}
