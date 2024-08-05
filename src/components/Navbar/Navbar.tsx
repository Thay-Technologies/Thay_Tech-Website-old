import React, { useEffect, useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { LiaGripfire } from "react-icons/lia";

const navigation = [
    { name: 'Services', href: '#', current: true },
    { name: 'Industry', href: '#', current: false },
    { name: 'Technology', href: '#', current: false },
    { name: 'Clients', href: '#', current: false },
    { name: 'About Us', href: '#', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Navbar: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(storedTheme === 'dark' || (!storedTheme && prefersDark));
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        console.log('Dark mode is', isDarkMode ? 'enabled' : 'disabled');
    }, [isDarkMode]);

    return (
        <Disclosure as="nav" className={classNames(
            isDarkMode ? 'navbar-dark' : 'navbar-light'
        )}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white dark:text-gray-300 dark:hover:bg-gray-700">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <LiaGripfire className="h-8 w-auto text-gray-800 dark:text-white" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white dark:bg-gray-700 dark:text-gray-300' : 'text-gray-800 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600',
                                            'rounded-md px-3 py-2 text-sm font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            onClick={() => setIsDarkMode(prev => !prev)}
                            className="relative rounded-full p-1 text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white"
                        >
                            <span className="sr-only">Toggle dark mode</span>
                            {isDarkMode ? (
                                <SunIcon className="h-6 w-6 text-yellow-500" aria-hidden="true" />
                            ) : (
                                <MoonIcon className="h-6 w-6 text-gray-900" aria-hidden="true" />
                            )}
                            <span className="absolute inset-0 rounded-full ring-2 ring-transparent hover:ring-gray-400 dark:hover:ring-white" />
                        </button>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white dark:bg-gray-700 dark:text-gray-300' : 'text-gray-800 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600',
                                'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}

export default Navbar;
