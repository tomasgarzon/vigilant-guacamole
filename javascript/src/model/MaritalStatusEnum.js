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
* Enum class MaritalStatusEnum.
* @enum {}
* @readonly
*/
export default class MaritalStatusEnum {
    
        /**
         * value: "NOT_DISCLOSED"
         * @const
         */
        "NOT_DISCLOSED" = "NOT_DISCLOSED";

    
        /**
         * value: "SINGLE"
         * @const
         */
        "SINGLE" = "SINGLE";

    
        /**
         * value: "MARRIED_CIVIL_PARTNER"
         * @const
         */
        "MARRIED_CIVIL_PARTNER" = "MARRIED_CIVIL_PARTNER";

    
        /**
         * value: "CIVIL_PARTNER"
         * @const
         */
        "CIVIL_PARTNER" = "CIVIL_PARTNER";

    
        /**
         * value: "DIVORCED_DISSOLVED_CIVIL_PARTNERSHIP"
         * @const
         */
        "DIVORCED_DISSOLVED_CIVIL_PARTNERSHIP" = "DIVORCED_DISSOLVED_CIVIL_PARTNERSHIP";

    
        /**
         * value: "WIDOWED_SURVIVING_CIVIL_PARTNER"
         * @const
         */
        "WIDOWED_SURVIVING_CIVIL_PARTNER" = "WIDOWED_SURVIVING_CIVIL_PARTNER";

    
        /**
         * value: "SEPARATED"
         * @const
         */
        "SEPARATED" = "SEPARATED";

    

    /**
    * Returns a <code>MaritalStatusEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/MaritalStatusEnum} The enum <code>MaritalStatusEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

