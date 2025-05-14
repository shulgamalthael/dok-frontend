import {Fragment} from "react";
import Head from "next/head";
import HomePage from "@/components/HomePage";

const Page = () => {
    return(
        <Fragment>
            <Head>
                <title>DOK.UA | Catalog</title>
            </Head>
            <HomePage />
        </Fragment>
    )
}

export default Page;