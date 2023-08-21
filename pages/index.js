import Layout from '@/components/Layout';
import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Index() {
  const [dropIcon, setDropIcon] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDropIconClick = () => {
    setDropIcon((prev) => !prev);
    if (dropIcon) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <Layout>
      {/* Header section */}
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div className="flex flex-col gap-2 items-start">
                <div className="flex-shrink-0">
                  Track order:{' '}
                  <a href="" className="text-orange-400">
                    click here
                  </a>
                </div>
                <div>
                  Call to order:{' '}
                  <div className="text-orange-400">+254743145612</div>{' '}
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className="text-orange-400">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="bg-black pl-5 pr-5 text-white h-10 flex items-center">
        <div className="flex flex-row justify-between content-center w-full">
          <div className="block sm:hidden">
            <div
              className="border rounded-sm pl-1 pr-1"
              onClick={handleDropIconClick}
            >
              Customer care{' '}
              {dropIcon ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="flex-shrink-0 hidden sm:block">Track order</div>
            <div className="hidden sm:block">Call to order: +254743145612</div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-1 gap-4  items-center">
            <div className="hidden sm:block">Sell</div>
            <div>Help & Contact</div>
          </div>
        </div>
      </div>
      <div className="bg-orange-400">
        <div>Test</div>
      </div>
    </Layout>
  );
}
