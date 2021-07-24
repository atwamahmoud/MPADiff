declare type URLObject = {
    didFetch: boolean;
    html?: string;
    promise?: Promise<string>;
    errored: boolean;
};
export declare function fetchURL(url: string, cache?: Record<string, URLObject>): void;
export declare function getURLContent(url: string, cache?: Record<string, URLObject>): Promise<string | undefined>;
export {};
