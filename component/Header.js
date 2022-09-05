import React from "react";
  import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
 
import { Avatar, Button } from "@mui/material";
import  Link  from "next/link";

function Header() {
  return (
    <div className="header">
      <Link href="/registerhost">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>

 

      <Link href="/registerhost">
      <div className="header__right">
        <Button>
        <p>Become a host</p>
        </Button>
     
 
        <Avatar />
      </div>
      </Link>
    </div>
  );
}

export default Header;
