import Head from "next/head";

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500">
            <Head>
                <title>Hello App Router with Next.js & Clerk</title>
                <meta
                    name="description"
                    content="A simple Hello World homepage using Next.js and Clerk"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-white p-8 rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-blue-500">Hello, App Router!</h1>
                <p className="text-gray-600">
                    This is a simple homepage built with Next.js and Clerk
                </p>
            </div>
        </div>
    );
}
