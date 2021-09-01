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
import Status14bEnum from './Status14bEnum';

/**
 * The InvestorWithdrawalList model module.
 * @module model/InvestorWithdrawalList
 * @version 4.175.0
 */
class InvestorWithdrawalList {
    /**
     * Constructs a new <code>InvestorWithdrawalList</code>.
     * @alias module:model/InvestorWithdrawalList
     * @param uuid {String} 
     * @param amount {Number} 
     * @param status {module:model/Status14bEnum} 
     * @param withdrawalType {String} 
     * @param extraData {Object.<String, Object>} Additional withdrawal attributes for the specific portal
     */
    constructor(uuid, amount, status, withdrawalType, extraData) { 
        
        InvestorWithdrawalList.initialize(this, uuid, amount, status, withdrawalType, extraData);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, amount, status, withdrawalType, extraData) { 
        obj['uuid'] = uuid;
        obj['amount'] = amount;
        obj['status'] = status;
        obj['withdrawal_type'] = withdrawalType;
        obj['extra_data'] = extraData;
    }

    /**
     * Constructs a <code>InvestorWithdrawalList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvestorWithdrawalList} obj Optional instance to populate.
     * @return {module:model/InvestorWithdrawalList} The populated <code>InvestorWithdrawalList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvestorWithdrawalList();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], Status14bEnum);
            }
            if (data.hasOwnProperty('withdrawal_type')) {
                obj['withdrawal_type'] = ApiClient.convertToType(data['withdrawal_type'], 'String');
            }
            if (data.hasOwnProperty('extra_data')) {
                obj['extra_data'] = ApiClient.convertToType(data['extra_data'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
InvestorWithdrawalList.prototype['uuid'] = undefined;

/**
 * @member {Number} amount
 */
InvestorWithdrawalList.prototype['amount'] = undefined;

/**
 * @member {module:model/Status14bEnum} status
 */
InvestorWithdrawalList.prototype['status'] = undefined;

/**
 * @member {String} withdrawal_type
 */
InvestorWithdrawalList.prototype['withdrawal_type'] = undefined;

/**
 * Additional withdrawal attributes for the specific portal
 * @member {Object.<String, Object>} extra_data
 */
InvestorWithdrawalList.prototype['extra_data'] = undefined;






export default InvestorWithdrawalList;

