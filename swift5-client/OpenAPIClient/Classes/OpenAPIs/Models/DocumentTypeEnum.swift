//
// DocumentTypeEnum.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public enum DocumentTypeEnum: String, Codable, CaseIterable {
    case passport = "passport"
    case drivingLicence = "driving_licence"
    case nationalIdentityCard = "national_identity_card"
    case utilityBill = "utility_bill"
    case localTaxBill = "local_tax_bill"
    case bankStatement = "bank_statement"
    case leaseAgreement = "lease_agreement"
    case rentReceipt = "rent_receipt"
    case letter = "letter"
    case certificateMarriage = "certificate_marriage"
    case decreeAbsolute = "decree_absolute"
    case finalOrder = "final_order"
    case clientPhoto = "client_photo"
}
