import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPage() {
  return (
    <Layout>
      <Head>
        <title>first post</title>
      </Head>
      {/* 加载第三方脚本 */}
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("加载成功");
        }}
      ></Script> */}

      <h1>First post</h1>
      <h2>
        <Link href="/">Back to home</Link>
        {/* src路径/ 就直接是public */}
        <Image width={400} height={400} src="/images/1 (19).jpg"></Image>
      </h2>
    </Layout>
  );
}
