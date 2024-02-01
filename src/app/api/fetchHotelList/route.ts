import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  let listData;
  await fetch('https://aio.server9.nelios.com/ ', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      listData = data;
      return NextResponse.json({ data }, { status: 200 });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  if (listData) {
    return NextResponse.json({ listData }, { status: 500 });
  } else {
    return NextResponse.json({ error: 'shit' }, { status: 500 });
  }
}
