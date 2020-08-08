import React from "react";

<<<<<<< HEAD
const Context = React.createContext();
const { Consumer, Provider } = Context;

/* export const ThemeConsumer = Consumer;
export const ThemeProvider = Provider; */

export {
	Consumer as ThemeConsumer,
	Provider as ThemeProvider,
	Context as default,
};
=======
const ThemeContext = React.createContext()

export default ThemeContext
export const ThemeConsumer = ThemeContext.Consumer
export const ThemeProvider = ThemeContext.Provider
>>>>>>> fcf29e3eb0410469512c76251f92e77d11b127e5
