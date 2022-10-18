import React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import {
  OtherHousesOutlined,
  ContactPhoneOutlined,
  BalanceOutlined,
} from "@mui/icons-material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Element, Link } from "react-scroll";
import { myPallete } from "../../utils/utils";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const pages = [
  { title: "Нүүр", id: "home", icon: <OtherHousesOutlined /> },
  { title: "Давуу тал", id: "advantage", icon: <BalanceOutlined /> },
  { title: "Холбоо барих", id: "footer", icon: <ContactPhoneOutlined /> },
];

const Header = ({ notFound }) => {
  const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);
  const [activeRoute, setActiveRoute] = React.useState("home");

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const renderLogo = () => {
    return (
      <Image
        src={"/assets/d-logo-white.svg"}
        height={40}
        width={40}
        alt="duudlagiin jolooch duud, дуудлагын жолооч дууд"
        title="duudlagiin jolooch duud, дуудлагын жолооч дууд"
      />
    );
  };
  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ justifyContent: matches ? "center" : "start" }}
          >
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Box sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }}>
              {renderLogo()}
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              DUUD
            </Typography>
            {notFound ? null : (
              <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={() => {
                    setIsOpenDrawer(true);
                  }}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <HeaderDrawer
                  isOpenDrawer={isOpenDrawer}
                  setIsOpenDrawer={setIsOpenDrawer}
                  activeRoute={activeRoute}
                  setActiveRoute={setActiveRoute}
                />
              </Box>
            )}

            <Box sx={{ display: { xs: "flex", sm: "none" }, mr: 1 }}>
              {renderLogo()}
            </Box>
            <Box
              sx={{
                width: 100,
              }}
            >
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                DUUD
              </Typography>
            </Box>
            {notFound ? null : (
              <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
                {pages.map((page, index) => (
                  <Link
                    to={page.id}
                    style={{
                      borderRadius: 4,
                      background:
                        page.id === activeRoute ? "#ffffff60" : "transparent",
                      margin: "0 8px",
                      padding: "4px 16px",
                      color: "white",
                      display: "block",
                    }}
                    smooth={true}
                    duration={500}
                    key={`${page.title}_${index}`}
                    onClick={() => {
                      setActiveRoute(page.id);
                    }}
                  >
                    {page.title}
                  </Link>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Element name="home" style={{ height: 70 }}></Element>
    </>
  );
};

const HeaderDrawer = (props) => {
  const list = () => (
    <Box sx={{ width: 250 }}>
      <List>
        {pages.map((page, index) => (
          <Link
            key={`${page.title}_${index}`}
            to={page.id}
            onClick={() => {
              props.setIsOpenDrawer(false);
              props.setActiveRoute(page.id);
            }}
            smooth={true}
            duration={500}
          >
            <ListItem>
              <ListItemButton
                style={{
                  color:
                    props.activeRoute === page.id
                      ? myPallete["500"]
                      : "#00000087",
                }}
              >
                <ListItemIcon
                  style={{
                    color:
                      props.activeRoute === page.id
                        ? myPallete["500"]
                        : "#00000087",
                  }}
                >
                  {page.icon}
                </ListItemIcon>
                <ListItemText primary={page.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
  return (
    <Drawer
      anchor="left"
      open={props.isOpenDrawer}
      onClose={() => {
        props.setIsOpenDrawer(false);
      }}
    >
      {list()}
    </Drawer>
  );
};
export default Header;
