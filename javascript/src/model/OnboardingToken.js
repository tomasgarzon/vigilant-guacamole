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
 * The OnboardingToken model module.
 * @module model/OnboardingToken
 * @version 4.175.0
 */
class OnboardingToken {
    /**
     * Constructs a new <code>OnboardingToken</code>.
     * @alias module:model/OnboardingToken
     * @param email {String} 
     * @param token {String} 
     */
    constructor(email, token) { 
        
        OnboardingToken.initialize(this, email, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, token) { 
        obj['email'] = email;
        obj['token'] = token;
    }

    /**
     * Constructs a <code>OnboardingToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OnboardingToken} obj Optional instance to populate.
     * @return {module:model/OnboardingToken} The populated <code>OnboardingToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OnboardingToken();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
OnboardingToken.prototype['email'] = undefined;

/**
 * @member {String} token
 */
OnboardingToken.prototype['token'] = undefined;






export default OnboardingToken;

