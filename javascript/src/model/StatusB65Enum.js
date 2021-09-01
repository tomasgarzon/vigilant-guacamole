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
* Enum class StatusB65Enum.
* @enum {}
* @readonly
*/
export default class StatusB65Enum {
    
        /**
         * value: "ONBOARDING"
         * @const
         */
        "ONBOARDING" = "ONBOARDING";

    
        /**
         * value: "PENDING"
         * @const
         */
        "PENDING" = "PENDING";

    
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
         * value: "CUSTODIAN_PENDING"
         * @const
         */
        "CUSTODIAN_PENDING" = "CUSTODIAN_PENDING";

    
        /**
         * value: "KYC_PENDING"
         * @const
         */
        "KYC_PENDING" = "KYC_PENDING";

    

    /**
    * Returns a <code>StatusB65Enum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/StatusB65Enum} The enum <code>StatusB65Enum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

