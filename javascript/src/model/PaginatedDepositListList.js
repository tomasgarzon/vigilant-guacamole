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
import DepositList from './DepositList';

/**
 * The PaginatedDepositListList model module.
 * @module model/PaginatedDepositListList
 * @version 4.175.0
 */
class PaginatedDepositListList {
    /**
     * Constructs a new <code>PaginatedDepositListList</code>.
     * @alias module:model/PaginatedDepositListList
     */
    constructor() { 
        
        PaginatedDepositListList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginatedDepositListList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedDepositListList} obj Optional instance to populate.
     * @return {module:model/PaginatedDepositListList} The populated <code>PaginatedDepositListList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginatedDepositListList();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [DepositList]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 */
PaginatedDepositListList.prototype['count'] = undefined;

/**
 * @member {String} next
 */
PaginatedDepositListList.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
PaginatedDepositListList.prototype['previous'] = undefined;

/**
 * @member {Array.<module:model/DepositList>} results
 */
PaginatedDepositListList.prototype['results'] = undefined;






export default PaginatedDepositListList;

