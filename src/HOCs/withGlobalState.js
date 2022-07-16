import React, { useContext } from 'react';
import { GlobalContext } from '../App';

// eslint-disable-next-line react/display-name
export const withGlobalState = (Component) => (props) => {
  const { state } = useContext(GlobalContext);
  return <Component {...{ ...props, state }} />;
};
