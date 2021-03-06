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
import CountryList from './CountryList';

/**
 * The PaginatedCountryListList model module.
 * @module model/PaginatedCountryListList
 * @version 4.175.0
 */
class PaginatedCountryListList {
    /**
     * Constructs a new <code>PaginatedCountryListList</code>.
     * @alias module:model/PaginatedCountryListList
     */
    constructor() { 
        
        PaginatedCountryListList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginatedCountryListList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedCountryListList} obj Optional instance to populate.
     * @return {module:model/PaginatedCountryListList} The populated <code>PaginatedCountryListList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginatedCountryListList();

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
                obj['results'] = ApiClient.convertToType(data['results'], [CountryList]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 */
PaginatedCountryListList.prototype['count'] = undefined;

/**
 * @member {String} next
 */
PaginatedCountryListList.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
PaginatedCountryListList.prototype['previous'] = undefined;

/**
 * @member {Array.<module:model/CountryList>} results
 */
PaginatedCountryListList.prototype['results'] = undefined;






export default PaginatedCountryListList;

