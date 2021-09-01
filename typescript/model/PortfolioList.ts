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
export interface PortfolioList {
    uuid: string;

    client?: string;

    name: string;

    portfolio_type: string;

    risk_level: number;

    time_horizon: number;

    status: models.models.Status2efEnum;

    balance: number;

    invested: number;

    currency?: string;

    created: string;

    advisor?: string;

    advice_engine?: string;

}
