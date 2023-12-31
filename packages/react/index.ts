import {
	type Dispatcher,
	resolveDispatcher,
	currentDispatcher
} from './src/currentDispatcher';
import { reactCurrentBatchConfig } from './src/currentTransition';
import {
	jsx,
	jsxDEV,
	isValidElement as isValidElementFn,
	Fragment
} from './src/jsx';

export { jsxDEV };
export { Fragment };

export const useState: Dispatcher['useState'] = (initialState) => {
	const dispatcher = resolveDispatcher();
	return dispatcher.useState(initialState);
};

export const useEffect: Dispatcher['useEffect'] = (create, deps) => {
	const dispatcher = resolveDispatcher();
	return dispatcher.useEffect(create, deps);
};

export const useTransition: Dispatcher['useTransition'] = () => {
	const dispatcher = resolveDispatcher();
	return dispatcher.useTransition();
};

export const useRef: Dispatcher['useRef'] = (initialState) => {
	const dispatcher = resolveDispatcher();
	return dispatcher.useRef(initialState);
};

// 数据共享层
export const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRE = {
	currentDispatcher,
	reactCurrentBatchConfig
};

export const version = '0.0.0';
export const createElement = jsx;
export const isValidElement = isValidElementFn;
