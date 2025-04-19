"use client";
import { useTranslations } from "next-intl";
import { ButtonHTMLAttributes } from "react";
import styles from "@shared/styles/components-styles/button.module.scss";
import Image from "next/image";
import { clsx } from "clsx";
type ButtonProps = {
  translation?: {
    context: string;
    key: string;
  };
  imageSrc?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  translation,
  imageSrc,
  icon,
  children,
  className,
  ...rest
}: ButtonProps) {
  const t = useTranslations();
  return (
    <button className={clsx(styles.buttonWrapper, className)} {...rest}>
      {imageSrc && <Image alt="" src={imageSrc} fill />}
      {icon && icon}
      {translation && <>{t(translation.context + "." + translation.key)}</>}
      {children && children}
    </button>
  );
}
