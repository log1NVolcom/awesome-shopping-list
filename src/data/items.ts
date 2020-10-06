export interface IItems {
  id: number;
  img: {
    src: string;
    alt: string;
  };
  title: string;
  price: number;
}

export function getItems(nItems: number): Promise<IItems[]> {
  return new Promise((resolve, _) =>
    setTimeout(() => {
      resolve(
        new Array(10).fill(null).map((_, index) => ({
          id: index,
          img: {
            src:
              'https://d3ieicw58ybon5.cloudfront.net/full/u/62fac972b7f54567b5d18c271dc47b14.jpg',
            alt: 'emilia figure',
          },
          title: 'Emilia',
          price: 100,
        })),
      );
    }, 1000),
  );
}
