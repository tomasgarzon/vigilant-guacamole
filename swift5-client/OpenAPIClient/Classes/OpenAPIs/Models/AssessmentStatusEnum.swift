//
// AssessmentStatusEnum.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public enum AssessmentStatusEnum: String, Codable, CaseIterable {
    case pending = "PENDING"
    case completed = "COMPLETED"
    case outdated = "OUTDATED"
}
