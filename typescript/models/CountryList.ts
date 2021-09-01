/**
 * Nucoro API
 * No description
 *
 * OpenAPI spec version: 4.175.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class CountryList {
    'code': string;
    'iso3': string;
    'name': string;
    'longName': string;
    'eeaCountry': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "iso3",
            "baseName": "iso3",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "longName",
            "baseName": "long_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "eeaCountry",
            "baseName": "eea_country",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CountryList.attributeTypeMap;
    }

    public constructor() {
    }
}
