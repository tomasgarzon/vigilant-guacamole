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
* Enum class OrderListMethodEnum.
* @enum {}
* @readonly
*/
export default class OrderListMethodEnum {
    
        /**
         * value: "MARKET"
         * @const
         */
        "MARKET" = "MARKET";

    
        /**
         * value: "QUOTE"
         * @const
         */
        "QUOTE" = "QUOTE";

    
        /**
         * value: "INTERNAL"
         * @const
         */
        "INTERNAL" = "INTERNAL";

    
        /**
         * value: "LIMIT"
         * @const
         */
        "LIMIT" = "LIMIT";

    
        /**
         * value: "STOP"
         * @const
         */
        "STOP" = "STOP";

    

    /**
    * Returns a <code>OrderListMethodEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/OrderListMethodEnum} The enum <code>OrderListMethodEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

