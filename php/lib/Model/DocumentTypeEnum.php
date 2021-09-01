<?php
/**
 * DocumentTypeEnum
 *
 * PHP version 7.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Nucoro API
 *
 * No description
 *
 * The version of the OpenAPI document: 4.175.0
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 5.3.0-SNAPSHOT
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model;
use \OpenAPI\Client\ObjectSerializer;

/**
 * DocumentTypeEnum Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class DocumentTypeEnum
{
    /**
     * Possible values of this enum
     */
    const PASSPORT = 'passport';
    const DRIVING_LICENCE = 'driving_licence';
    const NATIONAL_IDENTITY_CARD = 'national_identity_card';
    const UTILITY_BILL = 'utility_bill';
    const LOCAL_TAX_BILL = 'local_tax_bill';
    const BANK_STATEMENT = 'bank_statement';
    const LEASE_AGREEMENT = 'lease_agreement';
    const RENT_RECEIPT = 'rent_receipt';
    const LETTER = 'letter';
    const CERTIFICATE_MARRIAGE = 'certificate_marriage';
    const DECREE_ABSOLUTE = 'decree_absolute';
    const FINAL_ORDER = 'final_order';
    const CLIENT_PHOTO = 'client_photo';
    
    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::PASSPORT,
            self::DRIVING_LICENCE,
            self::NATIONAL_IDENTITY_CARD,
            self::UTILITY_BILL,
            self::LOCAL_TAX_BILL,
            self::BANK_STATEMENT,
            self::LEASE_AGREEMENT,
            self::RENT_RECEIPT,
            self::LETTER,
            self::CERTIFICATE_MARRIAGE,
            self::DECREE_ABSOLUTE,
            self::FINAL_ORDER,
            self::CLIENT_PHOTO,
        ];
    }
}

