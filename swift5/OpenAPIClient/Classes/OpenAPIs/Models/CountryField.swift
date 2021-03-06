//
// CountryField.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct CountryField: Codable, Hashable {

    public var id: Int
    public var code: String
    public var iso3: String
    public var name: String
    public var nameEnGb: String?
    public var nameEnCh: String?
    public var nameFrCh: String?
    public var nameDeCh: String?
    public var nameEsEs: String?
    public var nameItCh: String?
    public var longName: String
    public var longNameEnGb: String?
    public var longNameEnCh: String?
    public var longNameFrCh: String?
    public var longNameDeCh: String?
    public var longNameEsEs: String?
    public var longNameItCh: String?
    public var eeaCountry: Bool?

    public init(id: Int, code: String, iso3: String, name: String, nameEnGb: String? = nil, nameEnCh: String? = nil, nameFrCh: String? = nil, nameDeCh: String? = nil, nameEsEs: String? = nil, nameItCh: String? = nil, longName: String, longNameEnGb: String? = nil, longNameEnCh: String? = nil, longNameFrCh: String? = nil, longNameDeCh: String? = nil, longNameEsEs: String? = nil, longNameItCh: String? = nil, eeaCountry: Bool? = nil) {
        self.id = id
        self.code = code
        self.iso3 = iso3
        self.name = name
        self.nameEnGb = nameEnGb
        self.nameEnCh = nameEnCh
        self.nameFrCh = nameFrCh
        self.nameDeCh = nameDeCh
        self.nameEsEs = nameEsEs
        self.nameItCh = nameItCh
        self.longName = longName
        self.longNameEnGb = longNameEnGb
        self.longNameEnCh = longNameEnCh
        self.longNameFrCh = longNameFrCh
        self.longNameDeCh = longNameDeCh
        self.longNameEsEs = longNameEsEs
        self.longNameItCh = longNameItCh
        self.eeaCountry = eeaCountry
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case code
        case iso3
        case name
        case nameEnGb = "name_en_gb"
        case nameEnCh = "name_en_ch"
        case nameFrCh = "name_fr_ch"
        case nameDeCh = "name_de_ch"
        case nameEsEs = "name_es_es"
        case nameItCh = "name_it_ch"
        case longName = "long_name"
        case longNameEnGb = "long_name_en_gb"
        case longNameEnCh = "long_name_en_ch"
        case longNameFrCh = "long_name_fr_ch"
        case longNameDeCh = "long_name_de_ch"
        case longNameEsEs = "long_name_es_es"
        case longNameItCh = "long_name_it_ch"
        case eeaCountry = "eea_country"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encode(code, forKey: .code)
        try container.encode(iso3, forKey: .iso3)
        try container.encode(name, forKey: .name)
        try container.encodeIfPresent(nameEnGb, forKey: .nameEnGb)
        try container.encodeIfPresent(nameEnCh, forKey: .nameEnCh)
        try container.encodeIfPresent(nameFrCh, forKey: .nameFrCh)
        try container.encodeIfPresent(nameDeCh, forKey: .nameDeCh)
        try container.encodeIfPresent(nameEsEs, forKey: .nameEsEs)
        try container.encodeIfPresent(nameItCh, forKey: .nameItCh)
        try container.encode(longName, forKey: .longName)
        try container.encodeIfPresent(longNameEnGb, forKey: .longNameEnGb)
        try container.encodeIfPresent(longNameEnCh, forKey: .longNameEnCh)
        try container.encodeIfPresent(longNameFrCh, forKey: .longNameFrCh)
        try container.encodeIfPresent(longNameDeCh, forKey: .longNameDeCh)
        try container.encodeIfPresent(longNameEsEs, forKey: .longNameEsEs)
        try container.encodeIfPresent(longNameItCh, forKey: .longNameItCh)
        try container.encodeIfPresent(eeaCountry, forKey: .eeaCountry)
    }
}

