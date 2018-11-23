export const partialize = (fn, ...args) => fn.bind(null, ...args);

export const compose = (...fns) => {
    return value => 
        fns.reduceRight(
            (previosValue, fn) => fn(previosValue), 
            value
        );
};