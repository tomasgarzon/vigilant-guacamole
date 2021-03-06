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

export class Goal {
    'uuid': string;
    'name': string;
    'portfolio'?: string;
    /**
    * Desired amount needed to fulfill the goal
    */
    'goalAmount': number;
    /**
    * Due date to reach the goal.
    */
    'deadline': string;
    /**
    * Initial deposit amount to start from. No sense to start by 0
    */
    'initialAmount': number;
    'recurringAmount'?: number;
    'riskLevel': number;
    'created': Date;

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
            "name": "portfolio",
            "baseName": "portfolio",
            "type": "string",
            "format": ""
        },
        {
            "name": "goalAmount",
            "baseName": "goal_amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "deadline",
            "baseName": "deadline",
            "type": "string",
            "format": "date"
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
            "name": "riskLevel",
            "baseName": "risk_level",
            "type": "number",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return Goal.attributeTypeMap;
    }

    public constructor() {
    }
}

