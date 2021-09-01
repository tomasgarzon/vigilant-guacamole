/**
 * Nucoro API
 * No description
 *
 * The version of the OpenAPI document: 4.175.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 */
export interface OrderList {
    asset: models.models.RelatedAssetSerializerWithAssetCategories;

    trade: string;

    order_type: models.models.OrderTypeEnum;

    method: models.models.OrderListMethodEnum;

    status: models.models.OrderListStatusEnum;

    reason: string;

    completed: string;

    rebalance: string;

    portfolio: string;

    shares: number;

    amount: number;

    price_avg: number;

    currency: models.Currency;

    withdrawal: string;

    created: string;

    stop_price: number;

    limit_price: number;

    duration: string;

}
