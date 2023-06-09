import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import logo from "../../public/images/MH_Logo_White (1).webp";
import coverPhoto from "../../public/images/cover_photo.webp";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const links = ["HOME", "SHOWS", "ALBUMS", "VIDEOS", "SHOP", "BIO", "CONTACT"];

export default function Home() {
  return (
    <>
      <Head>
        <title>Matt Hecker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div>
          <Image
            src={logo}
            alt="Matt Heckler logo"
            width={286}
            height={167}
          ></Image>
        </div>
        <ul className={styles.navLinks}>
          {links.map((link) => (
            <li className={styles.navLink} key={link}>
              {link}
            </li>
          ))}
        </ul>
      </header>
      <main className={styles.main}>
        <Image
          src={coverPhoto}
          alt="Matt Hecker - This Town is Killing Me"
          width={663}
          height={663}
        ></Image>
        <button className={styles.btn}>Buy Now</button>
        <div className={styles.formWrapper}>
          <div className={styles.formHeadingWrapper}>
            <h3 className={styles.formHeading}>JOIN THE MAILING LIST</h3>
          </div>
          <form>
            <div className={styles.inputWrapper}>
              <input
                type={"text"}
                className={styles.emailInput}
                placeholder="Email address"
              />
              <button type="submit" className={styles.submitBtn}>
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
