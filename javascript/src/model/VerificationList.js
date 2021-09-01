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
import ResultEnum from './ResultEnum';
import StatusBd7Enum from './StatusBd7Enum';
import VerifyTypeEnum from './VerifyTypeEnum';

/**
 * The VerificationList model module.
 * @module model/VerificationList
 * @version 4.175.0
 */
class VerificationList {
    /**
     * Constructs a new <code>VerificationList</code>.
     * A ModelSerializer that takes additional arguments for \&quot;fields\&quot;, \&quot;omit\&quot; and \&quot;expand\&quot; in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
     * @alias module:model/VerificationList
     * @param uuid {String} 
     * @param verifyType {module:model/VerifyTypeEnum} 
     * @param status {module:model/StatusBd7Enum} 
     * @param result {module:model/ResultEnum} 
     * @param created {Date} 
     * @param updated {Date} 
     * @param verificationDocuments {Array.<String>} 
     */
    constructor(uuid, verifyType, status, result, created, updated, verificationDocuments) { 
        
        VerificationList.initialize(this, uuid, verifyType, status, result, created, updated, verificationDocuments);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, verifyType, status, result, created, updated, verificationDocuments) { 
        obj['uuid'] = uuid;
        obj['verify_type'] = verifyType;
        obj['status'] = status;
        obj['result'] = result;
        obj['created'] = created;
        obj['updated'] = updated;
        obj['verification_documents'] = verificationDocuments;
    }

    /**
     * Constructs a <code>VerificationList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VerificationList} obj Optional instance to populate.
     * @return {module:model/VerificationList} The populated <code>VerificationList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VerificationList();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('verify_type')) {
                obj['verify_type'] = ApiClient.convertToType(data['verify_type'], VerifyTypeEnum);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], StatusBd7Enum);
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], ResultEnum);
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
            }
            if (data.hasOwnProperty('verification_documents')) {
                obj['verification_documents'] = ApiClient.convertToType(data['verification_documents'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
VerificationList.prototype['uuid'] = undefined;

/**
 * @member {module:model/VerifyTypeEnum} verify_type
 */
VerificationList.prototype['verify_type'] = undefined;

/**
 * @member {module:model/StatusBd7Enum} status
 */
VerificationList.prototype['status'] = undefined;

/**
 * @member {module:model/ResultEnum} result
 */
VerificationList.prototype['result'] = undefined;

/**
 * @member {Date} created
 */
VerificationList.prototype['created'] = undefined;

/**
 * @member {Date} updated
 */
VerificationList.prototype['updated'] = undefined;

/**
 * @member {Array.<String>} verification_documents
 */
VerificationList.prototype['verification_documents'] = undefined;






export default VerificationList;
