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
import AddressList from './AddressList';

/**
 * The PaginatedAddressListList model module.
 * @module model/PaginatedAddressListList
 * @version 4.175.0
 */
class PaginatedAddressListList {
    /**
     * Constructs a new <code>PaginatedAddressListList</code>.
     * @alias module:model/PaginatedAddressListList
     */
    constructor() { 
        
        PaginatedAddressListList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginatedAddressListList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedAddressListList} obj Optional instance to populate.
     * @return {module:model/PaginatedAddressListList} The populated <code>PaginatedAddressListList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginatedAddressListList();

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
                obj['results'] = ApiClient.convertToType(data['results'], [AddressList]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 */
PaginatedAddressListList.prototype['count'] = undefined;

/**
 * @member {String} next
 */
PaginatedAddressListList.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
PaginatedAddressListList.prototype['previous'] = undefined;

/**
 * @member {Array.<module:model/AddressList>} results
 */
PaginatedAddressListList.prototype['results'] = undefined;






export default PaginatedAddressListList;

