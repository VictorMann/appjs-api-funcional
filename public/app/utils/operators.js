export const partialize = (fn, ...args) => fn.bind(null, ...args);

export const compose = (...fns) => {
    return value => 
        fns.reduceRight(
            (previosValue, fn) => fn(previosValue), 
            value
        );
};

export const pipe = (...fns) => {
    return value => 
        fns.reduce(
            (previosValue, fn) => fn(previosValue), 
            value
        );
};

export const takeUtil = (time, fn) => () => (time-- > 0) && fn(); 

export const debounce = (time, fn) => {
    let timer = 0;
    return () => (clearTimeout(timer), timer = setTimeout(fn, time));
};