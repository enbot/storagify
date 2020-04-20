import ConfigurationStorage from "../models/configuration-storage";
import * as defaults from '../models/configuration-defaults';

export function getConfiguration(

    config: ConfigurationStorage,

    index: number,

): {

    name: defaults.ItemName,

    timestamp: defaults.ItemTimestamp,

    index: number

} {

    return {

        name: config.its[index].n,

        timestamp: config.its[index].t,

        index: index

    };

}

export default getConfiguration;