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
* Enum class VerifyTypeEnum.
* @enum {}
* @readonly
*/
export default class VerifyTypeEnum {
    
        /**
         * value: "IDENTITY"
         * @const
         */
        "IDENTITY" = "IDENTITY";

    
        /**
         * value: "BANKING"
         * @const
         */
        "BANKING" = "BANKING";

    

    /**
    * Returns a <code>VerifyTypeEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/VerifyTypeEnum} The enum <code>VerifyTypeEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

