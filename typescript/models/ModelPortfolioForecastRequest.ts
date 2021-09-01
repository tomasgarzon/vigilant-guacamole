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

export class ModelPortfolioForecastRequest {
    'timeHorizon': number;
    'initialAmount': number;
    'recurringAmount'?: number;
    'recurringPeriod'?: number;
    'modelPortfolio': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "timeHorizon",
            "baseName": "time_horizon",
            "type": "number",
            "format": ""
        },
        {
            "name": "initialAmount",
            "baseName": "initial_amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "recurringAmount",
            "baseName": "recurring_amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "recurringPeriod",
            "baseName": "recurring_period",
            "type": "number",
            "format": ""
        },
        {
            "name": "modelPortfolio",
            "baseName": "model_portfolio",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ModelPortfolioForecastRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

