import { forwardRef } from 'react';

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';

// Custom styles for MDInput
import MDInputRoot from './MDInputRoot';

const MDInput = forwardRef(
  (
    {
      error,
      success,
      disabled,
      width,
      color,
      textAlign,
      disabledColor,
      borderColor,
      borderColorForExpand,
      fontFamily,
      fontSize,
      InputProps,
      ...rest
    },
    ref
  ) => (
    <MDInputRoot
      {...rest}
      InputProps={{ ...InputProps }}
      ref={ref}
      color={color}
      ownerState={{
        error,
        success,
        borderColor,
        width,
        textAlign,
        disabledColor,
        disabled,
        borderColorForExpand,
        fontFamily,
        fontSize,
      }}
    />
  )
);

// Setting default values for the props of MDInput
MDInput.defaultProps = {
  error: false,
  success: false,
  disabled: false,
  width: 0,
  borderColorForExpand: '',
};

// Typechecking props for the MDInput
MDInput.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  width: PropTypes.number,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  disabledColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderColorForExpand: PropTypes.string,
};

export default MDInput;
