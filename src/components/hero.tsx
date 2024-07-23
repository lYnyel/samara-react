import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
    <div className="bg-cover bg-center bg-img">
      <div className="h-[100vh]  relative w-full bg-blue-600 bg-opacity-70 text-white">
        <div className="container m-auto h-full flex flex-col justify-between">
          <header className="flex justify-between w-full items-center py-7">
            <div className="logo">
              <img src="Group 75.svg" alt="Logo" />
            </div>

            {/* Desktop */}
            <nav className="hidden lg:block">
              <ul className="flex gap-x-6">
                <li className="hover:underline">
                  <a href="#work">Как это работает</a>
                </li>
                <li className="hover:underline">
                  <a href="#block3">3-й блок</a>
                </li>
                <li className="hover:underline">
                  <a href="#faq">Вопросы и ответы</a>
                </li>
                <li className="hover:underline">
                  <a href="#form">Форма</a>
                </li>
              </ul>
            </nav>

            {/* mobile */}
            <nav
              aria-label="Global"
              className="flex max-w-7xl items-center justify-between p-6 lg:px-8 lg:hidden"
            >
              <div className="flex lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
            </nav>
            <Dialog
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
              className="lg:hidden"
            >
              <div className="fixed inset-0 z-10" />
              <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt=""
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      className="h-8 w-auto"
                    />
                  </a>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <a
                        href="#work"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Как это работает
                      </a>
                      <a
                        href="#block3"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        3-й блок
                      </a>
                      <a
                        href="#faq"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Вопросы и ответы
                      </a>
                      <a
                      href="#form"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Форма
                    </a>
                    </div>
                    
                  </div>
                </div>
              </DialogPanel>
            </Dialog>
          </header>
          <div className="flex-grow flex items-center justify-center">
            <div id="hero-text" className="text-center">
              <div className="text-4xl font-bold">
                Говорят, никогда не поздно <p></p>сменить профессию
              </div>
              <div className="pt-5">
                Сделай круто тестовое задание и у тебя получится
              </div>
              <button className="mt-10 bg-white rounded text-black px-6 py-3 font-bold">
                Проще простого!
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
