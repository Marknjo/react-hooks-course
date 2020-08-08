import React from "react";

const Context = React.createContext();
const { Consumer, Provider } = Context;

/* export const ThemeConsumer = Consumer;
export const ThemeProvider = Provider; */

export {
	Consumer as ThemeConsumer,
	Provider as ThemeProvider,
	Context as default,
};
