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
 * The CountryList model module.
 * @module model/CountryList
 * @version 4.175.0
 */
class CountryList {
    /**
     * Constructs a new <code>CountryList</code>.
     * @alias module:model/CountryList
     * @param code {String} 
     * @param iso3 {String} 
     * @param name {String} 
     * @param longName {String} 
     * @param eeaCountry {Boolean} 
     */
    constructor(code, iso3, name, longName, eeaCountry) { 
        
        CountryList.initialize(this, code, iso3, name, longName, eeaCountry);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, iso3, name, longName, eeaCountry) { 
        obj['code'] = code;
        obj['iso3'] = iso3;
        obj['name'] = name;
        obj['long_name'] = longName;
        obj['eea_country'] = eeaCountry;
    }

    /**
     * Constructs a <code>CountryList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CountryList} obj Optional instance to populate.
     * @return {module:model/CountryList} The populated <code>CountryList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CountryList();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('iso3')) {
                obj['iso3'] = ApiClient.convertToType(data['iso3'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('long_name')) {
                obj['long_name'] = ApiClient.convertToType(data['long_name'], 'String');
            }
            if (data.hasOwnProperty('eea_country')) {
                obj['eea_country'] = ApiClient.convertToType(data['eea_country'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
CountryList.prototype['code'] = undefined;

/**
 * @member {String} iso3
 */
CountryList.prototype['iso3'] = undefined;

/**
 * @member {String} name
 */
CountryList.prototype['name'] = undefined;

/**
 * @member {String} long_name
 */
CountryList.prototype['long_name'] = undefined;

/**
 * @member {Boolean} eea_country
 */
CountryList.prototype['eea_country'] = undefined;






export default CountryList;
