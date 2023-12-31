import { EffectCallback, EffectDeps } from 'react-reconciler/src/fiberHooks';
import { Action, Ref } from 'shared/ReactTypes';

export type Dispatch<State> = (action: Action<State>) => void;

export interface Dispatcher {
	useState: <T>(initialState: T | (() => T)) => [T, Dispatch<T>];
	useEffect: (create: EffectCallback, deps: EffectDeps) => void;
	useTransition: () => [boolean, (callback: () => void) => void];
	useRef: <T>(initialState: T) => Ref<T>;
}

export const currentDispatcher: {
	current: Dispatcher | null;
} = {
	current: null
};

export function resolveDispatcher() {
	const dispatcher = currentDispatcher.current;

	if (dispatcher === null) {
		throw new Error('Hooks 只能在函数组件中使用');
	}

	return dispatcher;
}
