/*
 * Nucoro API
 * No description
 *
 * The version of the OpenAPI document: 4.175.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.annotations.SerializedName;

import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * Gets or Sets AssetTypeEnum
 */
@JsonAdapter(AssetTypeEnum.Adapter.class)
public enum AssetTypeEnum {
  
  ETF("ETF"),
  
  MUTUAL_FUND("MUTUAL_FUND"),
  
  STOCK("STOCK");

  private String value;

  AssetTypeEnum(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static AssetTypeEnum fromValue(String value) {
    for (AssetTypeEnum b : AssetTypeEnum.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<AssetTypeEnum> {
    @Override
    public void write(final JsonWriter jsonWriter, final AssetTypeEnum enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public AssetTypeEnum read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return AssetTypeEnum.fromValue(value);
    }
  }
}

