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
/**
* Enum class ActivityTypeEnum.
* @enum {}
* @readonly
*/
export default class ActivityTypeEnum {
    
        /**
         * value: "CREATED"
         * @const
         */
        "CREATED" = "CREATED";

    
        /**
         * value: "UPDATED"
         * @const
         */
        "UPDATED" = "UPDATED";

    
        /**
         * value: "DELETED"
         * @const
         */
        "DELETED" = "DELETED";

    

    /**
    * Returns a <code>ActivityTypeEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ActivityTypeEnum} The enum <code>ActivityTypeEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

