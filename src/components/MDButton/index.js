import { forwardRef } from 'react';

import { PropTypes } from 'prop-types';

import MDButtonRoot from './MDButtonRoot';

import { CircularProgress } from '@mui/material';

const MDButton = forwardRef(
  (
    {
      color,
      variant,
      size,
      isLoading,
      circular,
      loaderColor,
      iconOnly,
      children,
      fontFamily,
      fontSize,
      ...rest
    },
    ref
  ) => {
    return (
      <MDButtonRoot
        {...rest}
        ref={ref}
        color="primary"
        variant={variant === 'gradient' ? 'contained' : variant}
        size={size}
        ownerState={{
          color,
          variant,
          size,
          circular,
          iconOnly,
        //   darkMode,
          fontFamily,
          fontSize,
        }}
      >
        {isLoading === 'pending' ? (
          <CircularProgress size={19} color={loaderColor} />
        ) : (
          children
        )}
      </MDButtonRoot>
    );
  }
);

// Setting default values for the props of MDButton
MDButton.defaultProps = {
    size: "medium",
    variant: "contained",
    color: "white",
    circular: false,
    iconOnly: false,
    loaderColor: "white",
  };
  
  // Typechecking props for the MDButton
  MDButton.propTypes = {
    size: PropTypes.oneOf(["small", "medium", "large"]),
    variant: PropTypes.oneOf(["text", "contained", "outlined", "gradient"]),
    loaderColor: PropTypes.oneOf([
      "white",
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ]),
    color: PropTypes.oneOf([
      "white",
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "lighDark",
      "black",
    ]),
    circular: PropTypes.bool,
    iconOnly: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };
  
  export default MDButton;