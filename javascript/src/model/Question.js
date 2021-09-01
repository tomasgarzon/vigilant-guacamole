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
import RiskChoice from './RiskChoice';

/**
 * The Question model module.
 * @module model/Question
 * @version 4.175.0
 */
class Question {
    /**
     * Constructs a new <code>Question</code>.
     * @alias module:model/Question
     * @param code {String} 
     * @param order {Number} 
     * @param description {String} 
     * @param choices {Array.<module:model/RiskChoice>} 
     * @param created {Date} 
     */
    constructor(code, order, description, choices, created) { 
        
        Question.initialize(this, code, order, description, choices, created);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, order, description, choices, created) { 
        obj['code'] = code;
        obj['order'] = order;
        obj['description'] = description;
        obj['choices'] = choices;
        obj['created'] = created;
    }

    /**
     * Constructs a <code>Question</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Question} obj Optional instance to populate.
     * @return {module:model/Question} The populated <code>Question</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Question();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('choices')) {
                obj['choices'] = ApiClient.convertToType(data['choices'], [RiskChoice]);
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
Question.prototype['code'] = undefined;

/**
 * @member {Number} order
 */
Question.prototype['order'] = undefined;

/**
 * @member {String} description
 */
Question.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/RiskChoice>} choices
 */
Question.prototype['choices'] = undefined;

/**
 * @member {Date} created
 */
Question.prototype['created'] = undefined;






export default Question;

