import { encode } from './encoder.js'
import { decode } from './decoder.js'
import utils from './utils.js'

utils()

export class AV64X4 {

    constructor(key) {
        this.key = key
    }

    encode(str) {
        return encode(this.key, str)
    }

    decode(str) {
        return decode(this.key, str)
    }

    hash(str) {

    }

}