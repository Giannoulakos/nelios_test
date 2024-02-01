'use client';

import { createContext, useContext, useState } from 'react';

const AppContext = createContext<any>({
  sort: 'popularity',
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [sort, setSort] = useState('popularity');
  const [listCount, setListCount] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(6);
  const [city, setCity] = useState<string>();
  const [search, setSearch] = useState<boolean>(false);
  const [otherFilters, setOtherFilters] = useState<string[]>([]);

  return (
    <AppContext.Provider
      value={{
        sort,
        setSort,
        listCount,
        setListCount,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        openDialog,
        setOpenDialog,
        limit,
        setLimit,
        city,
        setCity,
        search,
        setSearch,
        otherFilters,
        setOtherFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
