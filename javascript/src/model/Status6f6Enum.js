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
* Enum class Status6f6Enum.
* @enum {}
* @readonly
*/
export default class Status6f6Enum {
    
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
         * value: "DELETED"
         * @const
         */
        "DELETED" = "DELETED";

    

    /**
    * Returns a <code>Status6f6Enum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Status6f6Enum} The enum <code>Status6f6Enum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

