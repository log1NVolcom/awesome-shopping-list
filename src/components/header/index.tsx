import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const list = useSelector((state: RootState) => state.shopList.data);

  const handleOpenPopup = (event: any) => {
    setAnchorEl(event?.currentTarget);
  };

  const handleClosePopup = () => {
    setAnchorEl(null);
  };

  return (
    <div className="h-16 bg-blue-500 flex place-items-center justify-between p-4">
      <div className="text-2xl font-bold">Welcome</div>
      <div>
        <button
          onClick={handleOpenPopup}
          className="p-1 rounded-full bg-blue-600 hover:bg-blue-700"
        >
          <AddShoppingCartIcon />
        </button>
        <Popover
          id={!!anchorEl ? 'simple-popover' : undefined}
          open={!!anchorEl}
          anchorEl={anchorEl}
          onClose={handleClosePopup}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <div className="flex flex-col w-84 p-3 max-h-72">
            <div className="max-h-64 overflow-y-auto">
              {list?.map((item) => (
                <div className="mb-2">
                  {item.id} : {item.title} : {item.price}
                </div>
              ))}
            </div>
            <Button variant="contained" color="primary" className="h-8">
              Checkout
            </Button>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
