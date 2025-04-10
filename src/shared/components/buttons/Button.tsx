import Image from "next/image";
import styles from "@shared/styles/components-styles/button.module.scss";
import clsx from "clsx";
type ButtonProps = {
  style?: string;
  text?: string;
  iconPath?: string;
  icon?: React.ReactElement;
  type: "submit" | "button" | "reset";
  children?: React.ReactNode | React.ReactNode[];
  fnc?: () => void;
};
export default function Button({
  style,
  text,
  icon,
  iconPath,
  children,
  fnc,
  type,
}: ButtonProps) {
  return (
    <button className={style} onClick={fnc} type={type}>
      {iconPath && (
        <div className={styles.button__ImgCon}>
          <Image alt="btn_image" src={iconPath} fill />
        </div>
      )}
      {icon && <div className={styles.button__ImgCon}>{icon}</div>}
      {children && children}
      {text && text}
    </button>
  );
}
