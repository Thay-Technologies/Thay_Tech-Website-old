import React, { useCallback, useMemo } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { LiaGripfire } from 'react-icons/lia';

const navigation = [
    { name: 'Services', href: '#', current: true },
    { name: 'Industry', href: '#', current: false },
    { name: 'Technology', href: '#', current: false },
    { name: 'Clients', href: '#', current: false },
    { name: 'About Us', href: '#', current: false },
];

const Navbar: React.FC = React.memo(() => {
    const classNames = useCallback((...classes: string[]) => {
        return classes.filter(Boolean).join(' ');
    }, []);

    const commonButtonClasses = 'text-gray-600 hover:text-gray-900 transition-colors duration-300';

    const navigationItems = useMemo(() => navigation.map((item) => (
        <a
            key={item.name}
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
            className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-200 hover:text-gray-900',
                'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300'
            )}
        >
            {item.name}
        </a>
    )), []);

    return (
        <Disclosure as="nav" className={classNames(
            'bg-gray-100',
            'text-gray-800'
        )}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className={`group relative inline-flex items-center justify-center rounded-md p-2 ${commonButtonClasses}`}>
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <LiaGripfire className="h-8 w-auto text-gray-800 transition-colors duration-300" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigationItems}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Light theme button removed */}
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigationItems.map((item) => (
                        <DisclosureButton
                            key={item.key}
                            as="a"
                            href={item.props.href}
                            aria-current={item.props['aria-current']}
                            className={classNames(
                                item.props['aria-current'] === 'page' ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-200 hover:text-gray-900',
                                'block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300'
                            )}
                        >
                            {item.props.children}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
});

export default Navbar;
