import React from 'react'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box, Toolbar, } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';


const icon=(name)=>`/assets/navbar/${name}.svg`
const links=[
    {
        icon:icon("ic_analytics"),
        title:"Dashboard",
        url:"/stock"
    },
    {
        icon:icon("purchase"),
        title:"Purchases",
        url:"/stock/purchases"
    },
    {
        icon:icon("sales"),
        title:"Sales",
        url:"/stock/sales"
    },
    {
        icon:icon("firms"),
        title:"Firms",
        url:"/stock/firms"
    },
    {
        icon:icon("brand"),
        title:"Brands",
        url:"/stock/brands"
    },
    {
        icon:icon("ic_cart"),
        title:"Products",
        url:"/stock/products"
    }
]

const MenuListItems = () => {
    const navigate=useNavigate();
    const {pathname}=useLocation();
    const iconStyle={
        color:"secondary.main",
        borderRadius:"1rem",
        "&:hover":{
            backgroundColor:"secondary.main",
            color:"white"
        },
    }
    const selectedStyle={
        backgroundColor:"secondary.second",
        borderRadius:"1rem",
        "&:hover":{
            backgroundColor:"secondary.main",
            color:"secondary.second",
        },
        color:"white"
    }
  return (
    <div>
      <Toolbar />
      <List>
        {links.map(
          (link, index) => (
            <ListItem key={link.title} disablePadding>
              <ListItemButton onClick={()=>navigate(link.url)} sx={link.url==pathname ? selectedStyle : iconStyle} >
                  <Box sx={{
                    // backgroundImage:`url(${link.icon})`,
                    width:24,
                    height:24,
                    mr:2,
                    // backgroundColor:"black",
                    bgcolor:"currentColor",
                    mask:`url(${link.icon}) no-repeat center / contain`,
                  }} />
                <ListItemText primary={link.title} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </div>
  )
}

export default MenuListItems