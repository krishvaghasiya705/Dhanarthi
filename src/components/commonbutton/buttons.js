import Arrow from "@/assets/icon/arrow";
import React from "react";
import styles from "./button.module.scss"

export default function CommonButton() {
  return (
    <>
      <button type="button" className={styles.commonbutton}>
        <span>Get Started</span>
        <Arrow />
      </button>
    </>
  );
}
