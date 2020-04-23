import Worker from "./worker";
import Storagify from "./storagify";
import getFrom from "../utils/get-from";
import getTime from "../utils/get-time";

export class WorkerProduction extends Worker {

    public get(instance: Storagify, key: string): any {

        const { calls, encoder, convertor } = getFrom(instance);

        const enckey = encoder.encodeDES(key);

        const encvalue = calls.getItem(enckey);

        const value = convertor.value(instance, encvalue);

        return value;
    }

    public set(instance: Storagify, key: string, value: any): void {

        const { calls, encoder, convertor } = getFrom(instance);

        const timestamp = getTime();

        const concatenated = convertor.concat(instance, value, timestamp);

        const enckey = encoder.encodeDES(key);

        calls.setItem(enckey, concatenated);

    }

    public delete(instance: Storagify, key: string): void {

        const { calls, encoder } = getFrom(instance);

        const enckey = encoder.encodeDES(key);

        calls.removeItem(enckey);

    }

    public list(instance: Storagify): string[] {

        const { calls, encoder } = getFrom(instance);

        const emptyArray = new Array(instance.length);

        const indexArray = emptyArray.map((v, i) => i);

        const encodedArray = indexArray.map(v => calls.key(v));

        const decodedArray = encodedArray.map(v => encoder.decodeDES(v || ''));

        return <string[]>decodedArray;

    }

    public when(instance: Storagify, key: string): Date | null {

        const { convertor } = getFrom(instance);

        return convertor.when(instance, key);

    }

    public clear(instance: Storagify): void {

        getFrom(instance).calls.clear();

    }

    public key(instance: Storagify, index: number): string | null {

        const { calls, encoder } = getFrom(instance);

        const key = calls.key(index);

        if (key) {

            return encoder.decodeDES(key);

        } else {

            return null;

        }

    }

    public start(instance: Storagify): void {

        // verificar se existe a __config

        // 

    }

}

export default WorkerProduction;