import React from "react";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "../Components/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <Link href="https://www.instagram.com/hicostorage/">
          <a className={styles.socialButton}>
            <Image alt='Hico Storage Grand Junction Instagram' src="/instagram.svg" width={40} height={40} />
          </a>
        </Link>
      </div>

      <div className={styles.socials}>
        <Link href="https://www.facebook.com/HICO-Storage-100413955810139/">
          <a className={styles.socialButton}>
            <Image alt='Hico Storage Grand Junction Facebook' src="/facebook.png" width={40} height={40} />
          </a>
        </Link>
      </div>

      <div className={styles.socials}>
        <Link href="https://www.yelp.com/biz/hico-storage-grand-junction?osq=Hico+storage">
          <a className={styles.socialButton}>
            <Image alt='Hico Storage Grand Junction Yelp' src="/yelp.png" width={90} height={40} />
          </a>
        </Link>
        </div>
    </footer>
  );
};

export default Footer;
