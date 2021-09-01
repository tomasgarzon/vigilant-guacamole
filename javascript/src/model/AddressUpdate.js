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
 * The AddressUpdate model module.
 * @module model/AddressUpdate
 * @version 4.175.0
 */
class AddressUpdate {
    /**
     * Constructs a new <code>AddressUpdate</code>.
     * @alias module:model/AddressUpdate
     * @param uuid {String} 
     * @param line1 {String} 
     * @param postcode {String} 
     * @param locality {String} 
     * @param country {String} 
     */
    constructor(uuid, line1, postcode, locality, country) { 
        
        AddressUpdate.initialize(this, uuid, line1, postcode, locality, country);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, line1, postcode, locality, country) { 
        obj['uuid'] = uuid;
        obj['line1'] = line1;
        obj['postcode'] = postcode;
        obj['locality'] = locality;
        obj['country'] = country;
    }

    /**
     * Constructs a <code>AddressUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressUpdate} obj Optional instance to populate.
     * @return {module:model/AddressUpdate} The populated <code>AddressUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressUpdate();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('line1')) {
                obj['line1'] = ApiClient.convertToType(data['line1'], 'String');
            }
            if (data.hasOwnProperty('line2')) {
                obj['line2'] = ApiClient.convertToType(data['line2'], 'String');
            }
            if (data.hasOwnProperty('postcode')) {
                obj['postcode'] = ApiClient.convertToType(data['postcode'], 'String');
            }
            if (data.hasOwnProperty('locality')) {
                obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
AddressUpdate.prototype['uuid'] = undefined;

/**
 * @member {String} line1
 */
AddressUpdate.prototype['line1'] = undefined;

/**
 * @member {String} line2
 */
AddressUpdate.prototype['line2'] = undefined;

/**
 * @member {String} postcode
 */
AddressUpdate.prototype['postcode'] = undefined;

/**
 * @member {String} locality
 */
AddressUpdate.prototype['locality'] = undefined;

/**
 * @member {String} country
 */
AddressUpdate.prototype['country'] = undefined;

/**
 * @member {String} region
 */
AddressUpdate.prototype['region'] = undefined;






export default AddressUpdate;

