import type from '../utils/type';

export function describer(instance: Storage, action: string, callback?: Function): any {

    let recall = undefined;

    if (instance.env().debug) {

        const flag: string = '{{instance}}';
        const name: string = type(instance);
        const message: string = action.replace(flag, name);

        console.warn(message);
    }

    if (callback) {

        try {

            recall = callback();

            if (recall) {

                const stringify = instance.env().stringify;

                const isString = typeof recall === 'string';

                if (stringify && !isString) {
                    recall = JSON.stringify(recall);
                }

            }

        } catch (error) {

            console.warn(error);

        }

    }

    return recall;
}

export default describer;