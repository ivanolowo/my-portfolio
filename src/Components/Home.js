import React from 'react'
import image from '../Developer-Pic.jpg'

export default function Home() {
    return (
        <main>
            <img src={image}
                alt="Developer Pic"
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-300 font-bold cursive leading-none lg:leading-snug home-name justify-center">
                    Hallooo! <br></br>Ivan here.
                </h1>
            </section>
        </main>

    )
}