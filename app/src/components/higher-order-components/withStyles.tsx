import React, { Component, ReactComponentElement } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

export default function withStyles(Component) {
  return (props) => {
    const style = {
        padding: '0.2rem',
        margin: "1rem",
        //Merge props
        ...props.style
    }

    return <Component {...props} style={style} />;
  };
}
