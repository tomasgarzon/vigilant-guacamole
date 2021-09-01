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
* Enum class StatusBd7Enum.
* @enum {}
* @readonly
*/
export default class StatusBd7Enum {
    
        /**
         * value: "PENDING"
         * @const
         */
        "PENDING" = "PENDING";

    
        /**
         * value: "PROCESSING"
         * @const
         */
        "PROCESSING" = "PROCESSING";

    
        /**
         * value: "COMPLETED"
         * @const
         */
        "COMPLETED" = "COMPLETED";

    
        /**
         * value: "PAUSED"
         * @const
         */
        "PAUSED" = "PAUSED";

    
        /**
         * value: "REOPENED"
         * @const
         */
        "REOPENED" = "REOPENED";

    
        /**
         * value: "OTHER"
         * @const
         */
        "OTHER" = "OTHER";

    
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
         * value: "OUTDATED"
         * @const
         */
        "OUTDATED" = "OUTDATED";

    

    /**
    * Returns a <code>StatusBd7Enum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/StatusBd7Enum} The enum <code>StatusBd7Enum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

