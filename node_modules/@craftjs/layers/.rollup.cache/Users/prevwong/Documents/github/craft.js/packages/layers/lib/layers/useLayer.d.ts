import { LayerContext } from './LayerContext';
import { Layer } from '../interfaces';
declare type internalActions = LayerContext & {
    children: string[];
    actions: {
        toggleLayer: () => void;
    };
};
export declare type useLayer<S = null> = S extends null ? internalActions : S & internalActions;
export declare function useLayer(): useLayer;
export declare function useLayer<S = null>(collect?: (node: Layer) => S): useLayer<S>;
export {};
