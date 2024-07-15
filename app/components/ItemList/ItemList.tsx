'use client'

import { Item } from '@/app/interfaces/Item'
import ItemListProps from './ItemListProps'
import { useEffect, useState } from 'react'

export const ItemList = ({
    items,
    onItemClick
}: ItemListProps<Item>) => {

    const [searchFilter, setSearchFilter] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<Item[]>(items);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchFilter(event.target.value.toLowerCase().trim());
    };

    // update filtered items when search filter changes
    useEffect(() => {
        setFilteredItems(items.filter((item) => {
            return item.title.toLowerCase().includes(searchFilter);
        }));
    }, [searchFilter]);

  return (
    <div className='flex h-full w-full flex-col gap-4 border-gray-800 border-4 border-solid overflow-auto'>
        <input id='search-bar' type='text' placeholder='Search...'
        onChange={handleSearchChange}
        value={searchFilter}
        className='flex px-8 rounded-lg w-full h-fit text-black absolute'/>
        {
            filteredItems.map((item) => {
                return (
                    <div key={item.id} onClick={() => onItemClick(item)}
                    className='flex flex-row justify-between px-8 py-4 bg-gray-200 hover:bg-gray-300'>
                        <p>{item.title}</p>
                    </div>
                )
            })
        }
    </div>
  )
}


