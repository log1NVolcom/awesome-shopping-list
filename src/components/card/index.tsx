import React from 'react';
import Button from '@material-ui/core/Button';

import { IItems } from '../../data/items';
import { useDispatch } from 'react-redux';
import { actions } from '../../features/shopping/shopList';

interface Props {
  item: IItems;
}
const Card = ({ item }: Props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actions.add(item));
  };

  return (
    <div id={item.id.toFixed()} className="w-56 bg-white shadow-lg mb-8 p-4 ">
      <img className="w-full" src={item.img.src} alt={item.img.alt} />
      <div className=" p-4 flex flex-col">
        <div className="font-bold text-lg text-center mb-2">{item.title}</div>
        <div className="flex">
          <div className="font-bold mr-2 mb-4">Price: </div>
          <div>{item.price}€</div>
        </div>
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          className=""
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Card;
