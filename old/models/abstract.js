export class Abstract {

    constructor(options) {
        this.key = options.key
        this.devkey = options.key
        this.dev = options.dev
        this.debug = options.debug

        if (this.dev)
            console.warn('Running storagify in development mode')

        if (this.debug)
            console.warn('Running storagify in debug mode') 

    }

    list() {
        throw new Error('Function list must be implemented.')
    }

    when(key) {
        throw new Error('Function when must be implemented.')
    }

    getItem(key) {
        throw new Error('Function getItem must be implemented.')
    }

    setItem(key, value) {
        throw new Error('Function setItem must be implemented.')
    }

    removeItem(key) {
        throw new Error('Function removeItem must be implemented.')
    }

    clear() {
        throw new Error('Function clear must be implemented.')
    }

    encode() {
        throw new Error('Function parseAll must be implemented.')
    }

}