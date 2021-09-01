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
export class NationalityCreate {
    'country': string;
    'documentNumber'?: string;
    'documentType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentNumber",
            "baseName": "document_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentType",
            "baseName": "document_type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NationalityCreate.attributeTypeMap;
    }

    public constructor() {
    }
}

