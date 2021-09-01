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
* Enum class CreateOrderMethodEnum.
* @enum {}
* @readonly
*/
export default class CreateOrderMethodEnum {
    
        /**
         * value: "MARKET"
         * @const
         */
        "MARKET" = "MARKET";

    
        /**
         * value: "STOP"
         * @const
         */
        "STOP" = "STOP";

    
        /**
         * value: "LIMIT"
         * @const
         */
        "LIMIT" = "LIMIT";

    

    /**
    * Returns a <code>CreateOrderMethodEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CreateOrderMethodEnum} The enum <code>CreateOrderMethodEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

