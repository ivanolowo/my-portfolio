import React from 'react'

function About() {
    return (
        <div>
            <section class="text-gray-200 bg-gray-900">
                <div class="max-w-6xl mx-auto px-5 py-24 ">
                    <div class="text-center mb-20">
                        <h1 class=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">About Me!</h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Meticulous web developer with over 1 year of front end school projects experience and passion for responsive website design and a firm believer in the mobile-first approach. KYH Stockholm student. Implemented responsive website and several other approaches .</p>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
                        <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div class="pattern-dots-md gray-light">
                                <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  "  >
                                    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                    </div>
                                    <div class="flex-grow ">
                                        <h2 class=" text-xl title-font font-medium mb-3">Responsibilities</h2>
                                        <p class="leading-relaxed text-sm text-justify">Implemented website, mobile applications, and a landing page from concept through deployment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div class="pattern-dots-md gray-light">
                                <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                                    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                    </div>
                                    <div class="flex-grow">
                                        <h2 class=" text-xl title-font font-medium mb-3">UX & UI Design</h2>
                                        <p class="leading-relaxed text-sm text-justify">
                                            Built and assessed UX and UI design for technical feasibility.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div class="pattern-dots-md gray-light">
                                <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                                    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                    </div>
                                    <div class="flex-grow">
                                        <h2 class=" text-xl title-font font-medium mb-3">Agile Methodology</h2>
                                        <p class="leading-relaxed text-sm text-justify">
                                            Collaborated with team members to implement new feature developments in projects using Agile Methodology, especially worked with scrum to acomplish different school projects successfully.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>



    );
}

export default About;