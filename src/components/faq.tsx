import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { PlusCircleIcon } from '@heroicons/react/24/outline'


export default function FAQ() {
    const items = [
        { id: 1, name: 'Lorem ipsum dolor sit amet', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, name: 'Vestibulum ante ipsum', description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.' },
        { id: 3, name: 'Pellentesque habitant', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
        { id: 4, name: 'Sed do eiusmod', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: 5, name: 'Ut enim ad minim veniam', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 6, name: 'Duis aute irure dolor', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
        { id: 7, name: 'Excepteur sint occaecat', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { id: 8, name: 'Curabitur pretium tincidunt', description: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.' },
        { id: 9, name: 'Nulla facilisi', description: 'Nulla facilisi. Sed facilisis convallis metus, ut imperdiet augue auctor nec.' },
        { id: 10, name: 'Integer nec odio', description: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.' }
    ];
    return (
        <>
            <div id="faq" className="container mx-auto px-3 lg:px-0">
                <h3 className="font-bold text-3xl text-center pt-16">Часто задаваемые вопросы</h3>
                <div className="flex flex-col justify-center gap-y-3 py-16">
                    {items.map(item => (
                        <>
                            <Disclosure key={item.id}>
                                <DisclosureButton className="group flex items-center gap-2 justify-between">
                                    <h3 className="font-bold">{item.name}</h3>
                                    <PlusCircleIcon className="transition-all ease-in-out w-5 group-data-[open]:scale-125" />
                                </DisclosureButton>
                                <DisclosurePanel className="text-gray-500">
                                    {item.description}
                                </DisclosurePanel>
                                <hr></hr>
                            </Disclosure>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}