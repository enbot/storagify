import StorageEnvironment from "./storage-environment";
import StorageOptions from "./storage-options";
import PrototypeInstace from "./prototype-instance";
import PrototypeFunction from "./prototype-function";
import Storagify from "./storagify";
import checkInstance from "../utils/check-instance";
import checkKey from "../utils/check-key";

export class Storage {

    private _env: StorageEnvironment;

    constructor(key: string, options: StorageOptions) {
        checkInstance();
        checkKey(key);
        const development = options.development || false;
        const stringify = options.stringify || false;
        const debug = options.debug || false;
        this._env = new StorageEnvironment(key, development, debug, stringify);
    }

    public create() {
        const env = this._env;
        const prototypeInstace = new PrototypeInstace();
        const prototypeFunction = new PrototypeFunction();
        prototypeInstace.start(env);
        prototypeFunction.start(env);
    }

    public start() {
        <Storagify>localStorage.start();
        <Storagify>sessionStorage.start();
    }

}

export default Storage;