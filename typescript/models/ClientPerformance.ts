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

export class ClientPerformance {
    'valuationDate': string;
    'performance': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "valuationDate",
            "baseName": "valuation_date",
            "type": "string",
            "format": "date"
        },
        {
            "name": "performance",
            "baseName": "performance",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return ClientPerformance.attributeTypeMap;
    }

    public constructor() {
    }
}

