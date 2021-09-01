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
import NationalityList from './NationalityList';

/**
 * The PaginatedNationalityListList model module.
 * @module model/PaginatedNationalityListList
 * @version 4.175.0
 */
class PaginatedNationalityListList {
    /**
     * Constructs a new <code>PaginatedNationalityListList</code>.
     * @alias module:model/PaginatedNationalityListList
     */
    constructor() { 
        
        PaginatedNationalityListList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginatedNationalityListList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedNationalityListList} obj Optional instance to populate.
     * @return {module:model/PaginatedNationalityListList} The populated <code>PaginatedNationalityListList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginatedNationalityListList();

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
                obj['results'] = ApiClient.convertToType(data['results'], [NationalityList]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 */
PaginatedNationalityListList.prototype['count'] = undefined;

/**
 * @member {String} next
 */
PaginatedNationalityListList.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
PaginatedNationalityListList.prototype['previous'] = undefined;

/**
 * @member {Array.<module:model/NationalityList>} results
 */
PaginatedNationalityListList.prototype['results'] = undefined;






export default PaginatedNationalityListList;

