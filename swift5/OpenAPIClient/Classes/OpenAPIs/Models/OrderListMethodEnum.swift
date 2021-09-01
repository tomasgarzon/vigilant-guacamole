//
// OrderListMethodEnum.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public enum OrderListMethodEnum: String, Codable, CaseIterable {
    case market = "MARKET"
    case quote = "QUOTE"
    case _internal = "INTERNAL"
    case limit = "LIMIT"
    case stop = "STOP"
}