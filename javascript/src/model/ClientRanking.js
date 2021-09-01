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
import ClientEmbedRanking from './ClientEmbedRanking';

/**
 * The ClientRanking model module.
 * @module model/ClientRanking
 * @version 4.175.0
 */
class ClientRanking {
    /**
     * Constructs a new <code>ClientRanking</code>.
     * @alias module:model/ClientRanking
     * @param topPerforming {Array.<module:model/ClientEmbedRanking>} 
     * @param bottomPerforming {Array.<module:model/ClientEmbedRanking>} 
     */
    constructor(topPerforming, bottomPerforming) { 
        
        ClientRanking.initialize(this, topPerforming, bottomPerforming);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, topPerforming, bottomPerforming) { 
        obj['top_performing'] = topPerforming;
        obj['bottom_performing'] = bottomPerforming;
    }

    /**
     * Constructs a <code>ClientRanking</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientRanking} obj Optional instance to populate.
     * @return {module:model/ClientRanking} The populated <code>ClientRanking</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientRanking();

            if (data.hasOwnProperty('top_performing')) {
                obj['top_performing'] = ApiClient.convertToType(data['top_performing'], [ClientEmbedRanking]);
            }
            if (data.hasOwnProperty('bottom_performing')) {
                obj['bottom_performing'] = ApiClient.convertToType(data['bottom_performing'], [ClientEmbedRanking]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ClientEmbedRanking>} top_performing
 */
ClientRanking.prototype['top_performing'] = undefined;

/**
 * @member {Array.<module:model/ClientEmbedRanking>} bottom_performing
 */
ClientRanking.prototype['bottom_performing'] = undefined;






export default ClientRanking;
