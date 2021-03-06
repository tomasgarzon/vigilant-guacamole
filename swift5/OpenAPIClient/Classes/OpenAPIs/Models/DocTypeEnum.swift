//
// DocTypeEnum.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public enum DocTypeEnum: String, Codable, CaseIterable {
    case idPersonal = "ID_PERSONAL"
    case bankDetails = "BANK_DETAILS"
    case employment = "EMPLOYMENT"
    case maritalStatus = "MARITAL_STATUS"
    case pension = "PENSION"
    case legal = "LEGAL"
    case transfers = "TRANSFERS"
    case medical = "MEDICAL"
    case contract = "CONTRACT"
    case others = "OTHERS"
}
