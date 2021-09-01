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
 * The PatchedAddressUpdate model module.
 * @module model/PatchedAddressUpdate
 * @version 4.175.0
 */
class PatchedAddressUpdate {
    /**
     * Constructs a new <code>PatchedAddressUpdate</code>.
     * @alias module:model/PatchedAddressUpdate
     */
    constructor() { 
        
        PatchedAddressUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedAddressUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedAddressUpdate} obj Optional instance to populate.
     * @return {module:model/PatchedAddressUpdate} The populated <code>PatchedAddressUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedAddressUpdate();

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
PatchedAddressUpdate.prototype['uuid'] = undefined;

/**
 * @member {String} line1
 */
PatchedAddressUpdate.prototype['line1'] = undefined;

/**
 * @member {String} line2
 */
PatchedAddressUpdate.prototype['line2'] = undefined;

/**
 * @member {String} postcode
 */
PatchedAddressUpdate.prototype['postcode'] = undefined;

/**
 * @member {String} locality
 */
PatchedAddressUpdate.prototype['locality'] = undefined;

/**
 * @member {String} country
 */
PatchedAddressUpdate.prototype['country'] = undefined;

/**
 * @member {String} region
 */
PatchedAddressUpdate.prototype['region'] = undefined;






export default PatchedAddressUpdate;
