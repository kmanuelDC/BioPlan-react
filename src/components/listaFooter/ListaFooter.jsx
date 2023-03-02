import { Box, Typography } from "@mui/material";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import "./listaFooter.css";
const ListaFooter = ({ title, itemList }) => {
  return (
    <>
      <Box className="container-lista-footer">
        <Typography variant="h4" color="" className="">
          {title}
        </Typography>
        <ul className="container-li">
          {itemList.map((item) => (
            <li className="" key={item.text}>
              <Link
                component={RouterLink}
                to={item.url}
                className="link-footer"
              >
                {item.icon && item.icon}
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    </>
  );
};
export default ListaFooter;