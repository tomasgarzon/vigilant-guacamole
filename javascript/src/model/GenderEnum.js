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
* Enum class GenderEnum.
* @enum {}
* @readonly
*/
export default class GenderEnum {
    
        /**
         * value: "M"
         * @const
         */
        "M" = "M";

    
        /**
         * value: "F"
         * @const
         */
        "F" = "F";

    
        /**
         * value: "U"
         * @const
         */
        "U" = "U";

    

    /**
    * Returns a <code>GenderEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/GenderEnum} The enum <code>GenderEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

