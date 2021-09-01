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

import { DepositTypeEnum } from './DepositTypeEnum';
import { StatusB6aEnum } from './StatusB6aEnum';
import { HttpFile } from '../http/http';

export class DepositCreate {
    'uuid': string;
    'amount': number;
    'provider': string;
    'reference': string;
    'status': StatusB6aEnum;
    /**
    * Cancelled reason
    */
    'reason': string;
    'completed': Date;
    'depositType'?: DepositTypeEnum;
    'transactedAt': Date;
    /**
    * Additional deposit attributes for the specific portal
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
            "name": "reference",
            "baseName": "reference",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "StatusB6aEnum",
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
            "name": "depositType",
            "baseName": "deposit_type",
            "type": "DepositTypeEnum",
            "format": ""
        },
        {
            "name": "transactedAt",
            "baseName": "transacted_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "extraData",
            "baseName": "extra_data",
            "type": "{ [key: string]: any; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DepositCreate.attributeTypeMap;
    }

    public constructor() {
    }
}

