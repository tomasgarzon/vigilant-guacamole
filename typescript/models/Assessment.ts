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

import { AssessmentStatusEnum } from './AssessmentStatusEnum';
import { RiskChoiceQuestionCode } from './RiskChoiceQuestionCode';
import { HttpFile } from '../http/http';

export class Assessment {
    'uuid': string;
    'completed'?: Date;
    'choices': Array<RiskChoiceQuestionCode>;
    'status'?: AssessmentStatusEnum;
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
            "name": "completed",
            "baseName": "completed",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "choices",
            "baseName": "choices",
            "type": "Array<RiskChoiceQuestionCode>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AssessmentStatusEnum",
            "format": ""
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
        return Assessment.attributeTypeMap;
    }

    public constructor() {
    }
}

