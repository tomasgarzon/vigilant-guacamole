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

import { AssetModelPortfolio } from './AssetModelPortfolio';
import { HttpFile } from '../http/http';

export class InvestorModelPortfolio {
    'uuid': string;
    'name': string;
    /**
    * Percentage on the interval 0-1.
    */
    'cashWeight': number;
    'riskLevel': number;
    'allocation': Array<AssetModelPortfolio>;
    /**
    * Additional ModelPortfolio attributes
    */
    'extraData': { [key: string]: any; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "cashWeight",
            "baseName": "cash_weight",
            "type": "number",
            "format": "double"
        },
        {
            "name": "riskLevel",
            "baseName": "risk_level",
            "type": "number",
            "format": ""
        },
        {
            "name": "allocation",
            "baseName": "allocation",
            "type": "Array<AssetModelPortfolio>",
            "format": ""
        },
        {
            "name": "extraData",
            "baseName": "extra_data",
            "type": "{ [key: string]: any; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InvestorModelPortfolio.attributeTypeMap;
    }

    public constructor() {
    }
}

