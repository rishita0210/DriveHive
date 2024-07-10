"use client";

import React, { useState, Fragment } from 'react';
import { Combobox, Transition, ComboboxOption, ComboboxInput, ComboboxButton } from '@headlessui/react';
import Image from 'next/image';
import { manufacturers } from '@/Constant/Index';
import { SearchManufacturerProps } from '@/typees';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers = manufacturers.filter((item) =>
    item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
  );

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full'>
          <ComboboxButton className="absolute  left-4">
            <Image 
              src="/medical-sign.png"
              width={50}
              height={50}
              className='ml-3 mb-7'
              alt="Medical Sign"
            />
          </ComboboxButton>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder='Search manufacturer...'
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <ComboboxOption value="" className="search-manufacturer__options">
            {filteredManufacturers.map((item) => (
              <ComboboxOption
                key={item}
                value={item}
                className={({ active }) =>
                  `search-manufacturer__option ${active ? 'search-manufacturer__option--active' : ''}`
                }
              >
                {item}
              </ComboboxOption>
            ))}
          </ComboboxOption>
        </Transition>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;



