import React from "react";
import styles from "./sidebar.module.scss";
import Link from "next/link";
import CommonButton from "@/components/commonbutton/buttons";

export default function Sidebar() {
  return (
    <>
      <div className={styles.sidebaroverlay}></div>
      <aside className={styles.aside}>
        <div className={styles.sidebarbodymain}>
          <div className={styles.sidebarbody}>
            <div className={styles.sidebarlinksmain}>
              <Link href={"/"}>
                <div className={styles.sidebarlinkbox}>
                  <span>Home</span>
                </div>
              </Link>
              <Link href={"/"}>
                <div className={styles.sidebarlinkbox}>
                  <span>Blog</span>
                </div>
              </Link>
              <Link href={"/"}>
                <div className={styles.sidebarlinkbox}>
                  <span>Contact</span>
                </div>
              </Link>
              <Link href={"/"}>
                <div className={styles.sidebarlinkbox}>
                  <span>News</span>
                </div>
              </Link>
            </div>
            <CommonButton Text="Get Started" Linkpath={"/"} Buttonclass="commonbuttondark" />
          </div>
        </div>
      </aside>
    </>
  );
}
