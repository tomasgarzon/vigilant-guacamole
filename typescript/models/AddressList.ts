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

/**
* A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
*/
export class AddressList {
    'uuid': string;
    'line1': string;
    'line2': string;
    'postcode': string;
    'locality': string;
    'country': string;
    'region': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string",
            "format": ""
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string",
            "format": ""
        },
        {
            "name": "postcode",
            "baseName": "postcode",
            "type": "string",
            "format": ""
        },
        {
            "name": "locality",
            "baseName": "locality",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddressList.attributeTypeMap;
    }

    public constructor() {
    }
}

