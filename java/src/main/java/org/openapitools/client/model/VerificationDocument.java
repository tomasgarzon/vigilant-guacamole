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
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.UUID;
import org.openapitools.client.model.DocumentTypeEnum;

/**
 * A ModelSerializer that takes additional arguments for \&quot;fields\&quot;, \&quot;omit\&quot; and \&quot;expand\&quot; in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 */
@ApiModel(description = "A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-09-01T11:21:17.898459Z[Etc/UTC]")
public class VerificationDocument {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private UUID uuid;

  public static final String SERIALIZED_NAME_DOCUMENT_TYPE = "document_type";
  @SerializedName(SERIALIZED_NAME_DOCUMENT_TYPE)
  private DocumentTypeEnum documentType;

  public static final String SERIALIZED_NAME_DOCUMENT_FRONT = "document_front";
  @SerializedName(SERIALIZED_NAME_DOCUMENT_FRONT)
  private String documentFront;

  public static final String SERIALIZED_NAME_DOCUMENT_BACK = "document_back";
  @SerializedName(SERIALIZED_NAME_DOCUMENT_BACK)
  private String documentBack;


   /**
   * Get uuid
   * @return uuid
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public UUID getUuid() {
    return uuid;
  }




  public VerificationDocument documentType(DocumentTypeEnum documentType) {
    
    this.documentType = documentType;
    return this;
  }

   /**
   * Get documentType
   * @return documentType
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public DocumentTypeEnum getDocumentType() {
    return documentType;
  }


  public void setDocumentType(DocumentTypeEnum documentType) {
    this.documentType = documentType;
  }


  public VerificationDocument documentFront(String documentFront) {
    
    this.documentFront = documentFront;
    return this;
  }

   /**
   * Get documentFront
   * @return documentFront
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getDocumentFront() {
    return documentFront;
  }


  public void setDocumentFront(String documentFront) {
    this.documentFront = documentFront;
  }


  public VerificationDocument documentBack(String documentBack) {
    
    this.documentBack = documentBack;
    return this;
  }

   /**
   * Get documentBack
   * @return documentBack
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getDocumentBack() {
    return documentBack;
  }


  public void setDocumentBack(String documentBack) {
    this.documentBack = documentBack;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    VerificationDocument verificationDocument = (VerificationDocument) o;
    return Objects.equals(this.uuid, verificationDocument.uuid) &&
        Objects.equals(this.documentType, verificationDocument.documentType) &&
        Objects.equals(this.documentFront, verificationDocument.documentFront) &&
        Objects.equals(this.documentBack, verificationDocument.documentBack);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, documentType, documentFront, documentBack);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class VerificationDocument {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    documentType: ").append(toIndentedString(documentType)).append("\n");
    sb.append("    documentFront: ").append(toIndentedString(documentFront)).append("\n");
    sb.append("    documentBack: ").append(toIndentedString(documentBack)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

