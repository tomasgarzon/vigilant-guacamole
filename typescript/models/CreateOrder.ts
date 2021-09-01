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

import { CreateOrderMethodEnum } from './CreateOrderMethodEnum';
import { DurationEnum } from './DurationEnum';
import { NullEnum } from './NullEnum';
import { OrderTypeEnum } from './OrderTypeEnum';
import { RelatedAssetSerializerWithAssetCategories } from './RelatedAssetSerializerWithAssetCategories';
import { HttpFile } from '../http/http';

/**
* A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
*/
export class CreateOrder {
    'shares': number;
    'asset': RelatedAssetSerializerWithAssetCategories;
    'portfolio'?: string;
    'orderType': OrderTypeEnum;
    'method': CreateOrderMethodEnum;
    'limitPrice'?: number;
    'stopPrice'?: number;
    'duration'?: DurationEnum | NullEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "shares",
            "baseName": "shares",
            "type": "number",
            "format": ""
        },
        {
            "name": "asset",
            "baseName": "asset",
            "type": "RelatedAssetSerializerWithAssetCategories",
            "format": ""
        },
        {
            "name": "portfolio",
            "baseName": "portfolio",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderType",
            "baseName": "order_type",
            "type": "OrderTypeEnum",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "CreateOrderMethodEnum",
            "format": ""
        },
        {
            "name": "limitPrice",
            "baseName": "limit_price",
            "type": "number",
            "format": "double"
        },
        {
            "name": "stopPrice",
            "baseName": "stop_price",
            "type": "number",
            "format": "double"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "DurationEnum | NullEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateOrder.attributeTypeMap;
    }

    public constructor() {
    }
}
