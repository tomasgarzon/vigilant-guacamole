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
import Category from './Category';

/**
 * The CoreCategoryGroup model module.
 * @module model/CoreCategoryGroup
 * @version 4.175.0
 */
class CoreCategoryGroup {
    /**
     * Constructs a new <code>CoreCategoryGroup</code>.
     * @alias module:model/CoreCategoryGroup
     * @param uuid {String} 
     * @param code {String} 
     * @param riskLevel {Number} 
     * @param categories {Array.<module:model/Category>} 
     */
    constructor(uuid, code, riskLevel, categories) { 
        
        CoreCategoryGroup.initialize(this, uuid, code, riskLevel, categories);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, code, riskLevel, categories) { 
        obj['uuid'] = uuid;
        obj['code'] = code;
        obj['risk_level'] = riskLevel;
        obj['categories'] = categories;
    }

    /**
     * Constructs a <code>CoreCategoryGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoreCategoryGroup} obj Optional instance to populate.
     * @return {module:model/CoreCategoryGroup} The populated <code>CoreCategoryGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CoreCategoryGroup();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('risk_level')) {
                obj['risk_level'] = ApiClient.convertToType(data['risk_level'], 'Number');
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], [Category]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
CoreCategoryGroup.prototype['uuid'] = undefined;

/**
 * @member {String} code
 */
CoreCategoryGroup.prototype['code'] = undefined;

/**
 * @member {Number} risk_level
 */
CoreCategoryGroup.prototype['risk_level'] = undefined;

/**
 * @member {Array.<module:model/Category>} categories
 */
CoreCategoryGroup.prototype['categories'] = undefined;






export default CoreCategoryGroup;

