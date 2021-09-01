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
* Enum class CategoryStatusEnum.
* @enum {}
* @readonly
*/
export default class CategoryStatusEnum {
    
        /**
         * value: "ACTIVE"
         * @const
         */
        "ACTIVE" = "ACTIVE";

    
        /**
         * value: "INACTIVE"
         * @const
         */
        "INACTIVE" = "INACTIVE";

    

    /**
    * Returns a <code>CategoryStatusEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CategoryStatusEnum} The enum <code>CategoryStatusEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

