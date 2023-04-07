import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

interface Props {
  children: ReactNode;
  title: string;
}

export default function PageLayout({ children,title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <p>news Api</p>
      </header>
      <Link href="/">Home</Link>
      <main>{children}</main>
    </>
  );
}
