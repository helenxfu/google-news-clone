import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import styled from 'styled-components/macro';

const NavbarStyles = styled.div`
  .root {
    flex-grow: 1;
  }
  .menuButton {
    margin-right: ${16}px;
  }
  .title {
    flex-grow: 1;
    text-align: left;
  }
`;

export default () => {
  return (
    <NavbarStyles className={'root'}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={'menuButton'}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={'title'}>
            News
          </Typography>
          <IconButton
            edge="start"
            className={'searchButton'}
            color="inherit"
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </NavbarStyles>
  );
};
