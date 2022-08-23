import React from "react"
import Head from "next/head"

export default function MetaData({ title, description, image, url }) {
    return (
        <Head>

            {title ? (
                <>
                    <title>{title}</title>
                    <meta name="title" content={title} />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={title} />
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:title" content={title} />
                </>
            ) : (
                ""
            )}

            {description ? (
                <>
                    <meta name="description" content={description} />
                    <meta property="og:description" content={description} />
                    <meta property="twitter:description" content={description} />
                </>
            ) : (
                ""
            )}

            {url ? (
                <>
                    <meta property="og:url" content={url} />
                    <meta property="twitter:url" content={url} />
                    <link rel="canonical" href={url} />

                </>
            ) : (
                ""
            )}

            {image ? (
                <>
                    <meta property="og:image" content={image} />
                    <meta property="twitter:image" content={image} />
                </>
            ) : (
                ""
            )}

            <link rel="icon" href="/zent-title.svg" />

        </Head>
    )
}