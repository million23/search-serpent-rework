import { LuRocket, LuSearch } from "@qwikest/icons/lucide";

import type { DocumentHead } from '@builder.io/qwik-city';
// import {scroll as ScrollMotion, animate} from 'motion'
import { component$, } from '@builder.io/qwik';

export default component$(() => {
  const features = [
    {
      title: 'Responsive',
      description: 'It is designed to be accessible and easy to use on desktop, tablet, and mobile devices by being optimized for various devices and screen sizes.',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      title: 'Reliable',
      description: 'We use algorithms and filters to ensure that the most relevant and trustworthy information is presented to the user',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      title: 'Relevant',
      description: 'We provide quick and easy access to vast amounts of information on computer science topics',
      image: 'https://images.unsplash.com/photo-1525789351284-e1e7de240152?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
    }
  ]

  // useVisibleTask$(() => {
  //   ScrollMotion(({y}) => {
  //     animate('#imageBG', {
  //       opacity: 1 - y.current / 400
  //     }, {
  //       easing: 'linear'
  //     })
  //   })
  // })

  return (
    <>
    {/* bg image */}
    {/* <img id='imageBG' class="fixed top-0 left-0 w-full h-screen object-cover object-center" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt='' /> */}
    
    {/* search landing */}
    <form class="pt-24 pb-44 flex gap-2 flex-col items-center">
      <LuRocket class="text-7xl" />
      <p class="text-xl md:text-2xl font-bold text-center">Explore the world of computer science with ease</p>
      <div class="input-group w-full max-w-md my-5">
        <input class="input input-primary flex-1" type="text" placeholder="Search..." />
        <button type='submit' class="btn btn-primary btn-square">
          <LuSearch class="text-lg text-center" />
        </button>
      </div>
      <p>Unlock your coding potential with us</p>
    </form>

    {/* features */}
    <main class="pb-32 flex flex-col gap-7">
      <div class="flex flex-col gap-1 items-center">
        <p class="text-2xl">SearchSerpent is a [relevant] educational web search engine</p>
        <p>It is designed to help students find reliable and relevant information on a wide range of computer science topics.</p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {features.map(feat => (
          <div class="bg-base-200 rounded-btn" key={feat.title}>
            <img class="h-[200px] w-full object-cover object-center" src={feat.image}  alt="" />

            <div class="p-3 flex flex-col gap-2 mt-2">
              <p class="text-lg lg:text-xl font-bold">{feat.title}</p>
              <p>{feat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>

    {/* why us */}
    <main class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div class="flex flex-col text-center">
        <p class="text-3xl font-semibold">Why Choose Us</p>
        <div class="divider" />
        <p>SearchSerpent is a search engine designed specifically for computer science students. We understand that the field of computer science can be vast and complex, and finding reliable and relevant information can be a daunting task. Our search engine is built to help you navigate this complexity and find the information you need quickly and efficiently</p>
      </div>
      <div class="flex flex-col text-center">
        <p class="text-3xl font-semibold">What We Will Do</p>
        <div class="divider" />
        <p>Our team has worked tirelessly to build a database of high-quality resources that are specifically tailored to computer science students' needs. We believe that every student should have access to the best resources available to help them succeed academically, which is why we are dedicated to providing a search engine that is dependable, relevant, and responsive.</p>
      </div>
    </main>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
