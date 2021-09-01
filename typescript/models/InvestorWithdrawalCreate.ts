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

import { Status14bEnum } from './Status14bEnum';
import { HttpFile } from '../http/http';

export class InvestorWithdrawalCreate {
    'uuid': string;
    'amount': number;
    'provider': string;
    'status': Status14bEnum;
    /**
    * Cancelled reason
    */
    'reason': string;
    'completed': Date;
    /**
    * Withdrawal reason
    */
    'purpose'?: string;
    'withdrawalType': string;
    /**
    * Additional withdrawal attributes for the specific portal
    */
    'extraData'?: { [key: string]: any; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Status14bEnum",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "completed",
            "baseName": "completed",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "purpose",
            "baseName": "purpose",
            "type": "string",
            "format": ""
        },
        {
            "name": "withdrawalType",
            "baseName": "withdrawal_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "extraData",
            "baseName": "extra_data",
            "type": "{ [key: string]: any; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InvestorWithdrawalCreate.attributeTypeMap;
    }

    public constructor() {
    }
}

