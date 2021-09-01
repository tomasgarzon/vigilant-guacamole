//
// ApplicationClientUpdateGenderOneOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public enum ApplicationClientUpdateGenderOneOf: Codable {
    case typeBlankEnum(BlankEnum)
    case typeGenderEnum(GenderEnum)
    case typeNullEnum(NullEnum)

    public func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        switch self {
        case .typeBlankEnum(let value):
            try container.encode(value)
        case .typeGenderEnum(let value):
            try container.encode(value)
        case .typeNullEnum(let value):
            try container.encode(value)
        }
    }

    public init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        if let value = try? container.decode(BlankEnum.self) {
            self = .typeBlankEnum(value)
        } else if let value = try? container.decode(GenderEnum.self) {
            self = .typeGenderEnum(value)
        } else if let value = try? container.decode(NullEnum.self) {
            self = .typeNullEnum(value)
        } else {
            throw DecodingError.typeMismatch(Self.Type.self, .init(codingPath: decoder.codingPath, debugDescription: "Unable to decode instance of ApplicationClientUpdateGenderOneOf"))
        }
    }
}

