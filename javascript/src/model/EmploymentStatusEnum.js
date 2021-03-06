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
* Enum class EmploymentStatusEnum.
* @enum {}
* @readonly
*/
export default class EmploymentStatusEnum {
    
        /**
         * value: "EMPLOYED"
         * @const
         */
        "EMPLOYED" = "EMPLOYED";

    
        /**
         * value: "SELF_EMPLOYED"
         * @const
         */
        "SELF_EMPLOYED" = "SELF_EMPLOYED";

    
        /**
         * value: "RETIRED"
         * @const
         */
        "RETIRED" = "RETIRED";

    
        /**
         * value: "UNEMPLOYED"
         * @const
         */
        "UNEMPLOYED" = "UNEMPLOYED";

    

    /**
    * Returns a <code>EmploymentStatusEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EmploymentStatusEnum} The enum <code>EmploymentStatusEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

