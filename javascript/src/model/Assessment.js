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
 *
 */

import ApiClient from '../ApiClient';
import AssessmentStatusEnum from './AssessmentStatusEnum';
import RiskChoiceQuestionCode from './RiskChoiceQuestionCode';

/**
 * The Assessment model module.
 * @module model/Assessment
 * @version 4.175.0
 */
class Assessment {
    /**
     * Constructs a new <code>Assessment</code>.
     * @alias module:model/Assessment
     * @param uuid {String} 
     * @param choices {Array.<module:model/RiskChoiceQuestionCode>} 
     * @param riskLevel {Number} 
     * @param created {Date} 
     */
    constructor(uuid, choices, riskLevel, created) { 
        
        Assessment.initialize(this, uuid, choices, riskLevel, created);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, choices, riskLevel, created) { 
        obj['uuid'] = uuid;
        obj['choices'] = choices;
        obj['risk_level'] = riskLevel;
        obj['created'] = created;
    }

    /**
     * Constructs a <code>Assessment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Assessment} obj Optional instance to populate.
     * @return {module:model/Assessment} The populated <code>Assessment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Assessment();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('completed')) {
                obj['completed'] = ApiClient.convertToType(data['completed'], 'Date');
            }
            if (data.hasOwnProperty('choices')) {
                obj['choices'] = ApiClient.convertToType(data['choices'], [RiskChoiceQuestionCode]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = AssessmentStatusEnum.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('risk_level')) {
                obj['risk_level'] = ApiClient.convertToType(data['risk_level'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
Assessment.prototype['uuid'] = undefined;

/**
 * @member {Date} completed
 */
Assessment.prototype['completed'] = undefined;

/**
 * @member {Array.<module:model/RiskChoiceQuestionCode>} choices
 */
Assessment.prototype['choices'] = undefined;

/**
 * @member {module:model/AssessmentStatusEnum} status
 */
Assessment.prototype['status'] = undefined;

/**
 * @member {Number} risk_level
 */
Assessment.prototype['risk_level'] = undefined;

/**
 * @member {Date} created
 */
Assessment.prototype['created'] = undefined;






export default Assessment;

