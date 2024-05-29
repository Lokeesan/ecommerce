import {PropsWithChildren, createContext, useContext} from 'react';
import {ScreenProps} from '../Screens/Type';

const routerContext = createContext<ScreenProps | null>(null);

export const useRouterContext = () => useContext(routerContext);

export default function RouterContextProvider(
  props: PropsWithChildren<ScreenProps>,
) {
  const {children, ...rest} = props;
  return (
    <routerContext.Provider value={{...rest}}>
      {children}
    </routerContext.Provider>
  );
}
