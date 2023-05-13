import { LuMail, LuMapPin, LuPhone, LuRocket } from '@qwikest/icons/lucide';
import { Slot, component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <nav class="fixed top-0 left-0 w-full bg-base-200 py-5 flex justify-center z-50">
        <main class="w-full max-w-5xl flex items-center justify-between px-5 lg:px-0">
          <LuRocket class="text-3xl" />
          <div class="flex gap-2">
            <a class="btn btn-ghost" href="/">Home</a>
            <a class="btn btn-ghost" href="/">About</a>
            <a class="btn btn-ghost" href="/">Contact</a>
            <a class="btn btn-ghost" href="/">Sign in</a>
          </div>
        </main>
      </nav>

      <section class="relative w-full max-w-5xl mx-auto min-h-screen py-28 px-5 lg:px-0">
        <Slot />
      </section>

      <footer class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-0 w-full max-w-5xl mx-auto pt-7 gap-5">
        <div class="divider col-span-full" />
        <div>
          <p class="font-bold text-lg">Search Serpent</p>
          <div class="divider my-0" />
          <p class="text-sm opacity-70">A cloud-integrated educational web search engine that specifically searches computer science-related resources and helps users navigate the educational information they are looking for.</p>
        </div>
        <div>
          <p class="font-bold text-lg">About the team</p>
          <div class="divider my-0" />
          <p class="text-sm opacity-70">At SearchSerpent, we understand the importance of having easy access to educational resources for computer science students. Our web search engine is designed to provide quick and accurate results, tailored specifically to the needs of computer science students</p>
        </div>
        <div>
          <p class="font-bold text-lg">Contact Us</p>
          <div class="divider my-0" />
          <div class="flex flex-col gap-4">
            <div class="flex flex-col">
              <LuMapPin class="text-lg" />
              <p>Congressional Rd Ext, Barangay 171, Caloocan, Metro Manila</p>
            </div>
            <div class="flex flex-col">
              <LuPhone class="text-lg" />
              <p>+63 920 303 3229</p>
            </div>
            <div class="flex flex-col">
              <LuMail class="text-lg" />
              <p>leitechcorp@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="col-span-full text-center bg-base-300 py-5 mt-2">
        © 2023 SearchSerpent All Rights Reserved
        </div>
      </footer>
    </>
  );
});
