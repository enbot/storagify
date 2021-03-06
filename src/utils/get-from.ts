import Storagify from "../models/storagify";
import getType from "./get-type";
import getConfigurator from "./get-configurator";

export function getFrom(instance: Storagify) {

    const native = instance["[[native]]"];

    return {

        type: getType(instance),

        configurator: getConfigurator(instance),

        encoder: instance["[[encoder]]"],

        parser: instance["[[parser]]"],

        convertor: instance["[[convertor]]"],

        environment: instance["[[environment]]"],

        calls: {

            setItem: function (key: string, value: any) {
                return native.setItem.call(instance, key, value);
            },

            getItem: function (key: string) {
                return native.getItem.call(instance, key);
            },

            removeItem: function (key: string) {
                return native.removeItem.call(instance, key);
            },

            clear: function () {
                return native.clear.call(instance);
            },

            key: function (index: number) {
                return native.key.call(instance, index);
            },

        }
    };

}

export default getFrom;