'use client';
import Card from './card';
import { useEffect, useState } from 'react';
import { useAppContext } from '@/context';

const HotelList = () => {
  const [listData, setListData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const {
    sort,
    setListCount,
    minPrice,
    maxPrice,
    limit,
    otherFilters,
    city,
    search,
  } = useAppContext();

  useEffect(() => {
    fetch('/api/fetchHotelList/')
      .then((res) => res.json())
      .then((data) => {
        let processedData;
        switch (sort) {
          case 'popularity':
            processedData = data.listData.data.sort((a: any, b: any) =>
              a.rating > b.rating ? -1 : 1
            );
            break;
          case 'price-cheaper':
            processedData = data.listData.data.sort((a: any, b: any) =>
              a.price > b.price ? 1 : -1
            );
            break;
          case 'price-expensive':
            processedData = data.listData.data.sort((a: any, b: any) =>
              a.price > b.price ? -1 : 1
            );
            break;
          default:
            processedData = data.listData.data.sort((a: any, b: any) =>
              a.rating > b.rating ? -1 : 1
            );
            break;
        }

        if (minPrice > 0 || maxPrice != undefined) {
          processedData = processedData.filter((el: any) => {
            return (
              el.price >= minPrice &&
              (maxPrice === undefined || el.price <= maxPrice)
            );
          });
        }
        if (otherFilters.length > 0) {
          processedData = processedData.filter((el: any) => {
            return otherFilters.includes(el.meal_plan);
          });
        }

        if (city !== undefined) {
          processedData = processedData.filter((el: any) => {
            return city.toLowerCase() == el.city.toLowerCase();
          });
        }
        console.log('hotel');
        setListCount(processedData.length);
        processedData = processedData.slice(0, limit);
        setListData(processedData);
        setIsLoading(false);
        return;
      });
  }, [sort, minPrice, maxPrice, limit, otherFilters, search]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className='flex justify-center'>
      <div className=' md:grid md:gap-4 md:grid-cols-3  '>
        {listData.map((el: any, index: number) => {
          return (
            <Card
              photo={el.photo}
              name={el.name}
              city={el.city}
              price={el.price}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HotelList;
