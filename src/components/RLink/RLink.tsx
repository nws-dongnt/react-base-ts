import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

type LinkProps = {
  to: string;
  replace?: boolean;
} & MuiLinkProps;

function RLink({ to, replace, sx, ...rest }: LinkProps) {
  return (
    <MuiLink
      component={RouterLink}
      underline="none"
      color="inherit"
      to={to}
      replace={replace}
      sx={{
        "&.MuiLink-root:hover": { color: "primary.main" },
        ...sx,
      }}
      {...rest}
    />
  );
}

export default RLink;
