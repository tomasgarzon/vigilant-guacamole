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
* Enum class OrderListStatusEnum.
* @enum {}
* @readonly
*/
export default class OrderListStatusEnum {
    
        /**
         * value: "PENDING"
         * @const
         */
        "PENDING" = "PENDING";

    
        /**
         * value: "WAITING_FOR_PRICE"
         * @const
         */
        "WAITING_FOR_PRICE" = "WAITING_FOR_PRICE";

    
        /**
         * value: "PROCESSING"
         * @const
         */
        "PROCESSING" = "PROCESSING";

    
        /**
         * value: "QUOTED"
         * @const
         */
        "QUOTED" = "QUOTED";

    
        /**
         * value: "COMPLETED"
         * @const
         */
        "COMPLETED" = "COMPLETED";

    
        /**
         * value: "VERIFIED"
         * @const
         */
        "VERIFIED" = "VERIFIED";

    
        /**
         * value: "ERROR"
         * @const
         */
        "ERROR" = "ERROR";

    
        /**
         * value: "CANCELLED"
         * @const
         */
        "CANCELLED" = "CANCELLED";

    

    /**
    * Returns a <code>OrderListStatusEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/OrderListStatusEnum} The enum <code>OrderListStatusEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

