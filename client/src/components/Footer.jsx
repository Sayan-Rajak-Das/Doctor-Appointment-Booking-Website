import React from 'react'

const Footer = () => {
    return (
        <section class="relative overflow-hidden py-10">
            <div class="relative z-10 mx-auto max-w-7xl px-4">
                <div class="-m-6 flex flex-wrap">
                    <div class="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div class="flex h-full flex-col justify-between">
                            <div class="mb-4 inline-flex gap-2 items-center">
                            <img className='h-7 w-8' src="./logo.png" alt="" />
                            <span className='text-lg font-semibold'>Medicare</span>
                                
                            </div>
                            <div>
                                <p class="mb-4  text-base font-medium">
                                    The Tailwind CSS Component library
                                </p>
                                <p class="text-sm text-gray-600">
                                    © Copyright 2022. All Rights Reserved by Medicare.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div class="h-full">
                            <h3 class="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Company
                            </h3>
                            <ul>
                                <li class="mb-4">
                                    <a
                                        class=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        href="#"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li class="mb-4">
                                    <a
                                        class=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        href="#"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li class="mb-4">
                                    <a
                                        class=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        href="#"
                                    >
                                        Affiliate Program
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        href="#"
                                    >
                                        Press Kit
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div class="h-full">
                            <h3 class="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Support
                            </h3>
                            <ul>
                                <li class="mb-4">
                                    <a
                                        class=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        href="#"
                                    >
                                        Account
                                    </a>
                                </li>
                                <li class="mb-4">
                                    <a
                                        class=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        href="#"
                                    >
                                        Help
                                    </a>
                                </li>
                                <li class="mb-4">
                                    <a
                                        class=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        href="#"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        href="#"
                                    >
                                        Customer Support
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div class="h-full">
                            <h3 class="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Legals
                            </h3>
                            <ul>
                                <li class="mb-4">
                                    <a
                                        class=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        href="#"
                                    >
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                                <li class="mb-4">
                                    <a
                                        class=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        href="#"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        href="#"
                                    >
                                        Licensing
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer
