export class Maybe
{
    constructor(value)
    {
        this._value = value;
    }

    static of(value)
    {
        return new Maybe(value);
    }

    isNothing()
    {
        return this._value == null;
    }

    map(fn)
    {
        if (this.isNothing()) return new Maybe(null);
        return new Maybe(fn(this._value));
    }

    getOrElse(value)
    {
        if (this.isNothing()) return value;
        return this._value;
    }
}