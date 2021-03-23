import React from 'react'
import Picture from '../programming.jpg'
import image from '../UxDesign.png'
import AppPic from '../CovidPic.png'

export default function Project(props) {
    return (
        <main class="grid place-items-center min-h-screen bg-gradient-to-t from-gray-200 to-gray-900 p-5">
            <div>
                <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-20">My Projects</h1>
                <section class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* <!-- CARD 1 --> */}
                    <div class="bg-gray-900 shadow-lg rounded p-3">
                        <div class="group relative">
                            <img class="w-full md:w-100 block rounded" src={image} alt="Programming Pic" />
                            <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">


                                {/* <button class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                    </svg>
                                </button>

                                <button class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg>
                                </button> */}
                            </div>
                        </div>
                        <div class="p-5">
                            <h3 class="text-gray-400 text-lg">Ivan-Olowo-FE20-UX-Design-IP1</h3>
                            <p class="text-white text-sm"><a href="https://docs.google.com/presentation/d/1p48zoq9P6m8iGUcf8LpAG0bEzDYEDAmfuK5cmChTVNA/edit#slide=id.p">
                                https://docs.google.com/presentation/d/1p48zoq9P6m8iGUcf8LpAG0bEzDYEDAmfuK5cmChTVNA/edit#slide=id.p
                                </a></p>

                            <p class="text-gray-400">EUBIKE-prototype.png</p>
                            <a class="text-white text-sm" href="https://www.figma.com/file/O3MEG90oPjRn0NdoysyUFR/Ivan-EUBIKE-prototype?node-id=0%3A1">https://www.figma.com/file/O3MEG90oPjRn0NdoysyUFR/Ivan-EUBIKE-prototype?node-id=0%3A1</a>

                        </div>
                    </div>
                    {/*  <!-- END OF CARD 1 --> */}

                    {/* <!-- CARD 2 --> */}
                    <div class="bg-gray-900 shadow-lg rounded p-3">
                        <div class="group relative">
                            <img class="w-full md:w-100 block rounded" src={Picture} alt="programming Picture" />
                            <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                            </div>
                        </div>
                        <div class="p-5">
                            <h3 class="text-white text-lg">Note taking App</h3>
                            <p class="text-gray-400"></p>
                        </div>
                    </div>
                    {/*  END OF CARD 2  */}

                    {/* <!-- CARD 3 --> */}
                    <div class="bg-gray-900 shadow-lg rounded p-3">
                        <div class="group relative">
                            <img class="w-full md:w-100 block rounded" src={AppPic} alt="" />
                            <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                            </div>
                        </div>
                        <div class="p-5">
                            <h3 class="text-white text-lg">Covid Tracker App</h3>
                            <p class="text-gray-400">Link coming soon</p>
                        </div>
                    </div>
                    {/* <!-- END OF CARD 3 --> */}
                </section>
            </div>
        </main>
    );
}

