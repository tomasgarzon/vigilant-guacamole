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
import org.threeten.bp.LocalDate;

/**
 * Tos
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-09-01T11:21:17.898459Z[Etc/UTC]")
public class Tos {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private UUID uuid;

  public static final String SERIALIZED_NAME_VERSION = "version";
  @SerializedName(SERIALIZED_NAME_VERSION)
  private String version;

  public static final String SERIALIZED_NAME_CONTENT = "content";
  @SerializedName(SERIALIZED_NAME_CONTENT)
  private String content;

  public static final String SERIALIZED_NAME_PUBLISHED = "published";
  @SerializedName(SERIALIZED_NAME_PUBLISHED)
  private LocalDate published;

  public static final String SERIALIZED_NAME_PREVIOUS_TOS_UUID = "previous_tos_uuid";
  @SerializedName(SERIALIZED_NAME_PREVIOUS_TOS_UUID)
  private String previousTosUuid;

  public static final String SERIALIZED_NAME_NEXT_TOS_UUID = "next_tos_uuid";
  @SerializedName(SERIALIZED_NAME_NEXT_TOS_UUID)
  private String nextTosUuid;


   /**
   * Get uuid
   * @return uuid
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public UUID getUuid() {
    return uuid;
  }




  public Tos version(String version) {
    
    this.version = version;
    return this;
  }

   /**
   * Get version
   * @return version
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getVersion() {
    return version;
  }


  public void setVersion(String version) {
    this.version = version;
  }


  public Tos content(String content) {
    
    this.content = content;
    return this;
  }

   /**
   * Get content
   * @return content
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getContent() {
    return content;
  }


  public void setContent(String content) {
    this.content = content;
  }


  public Tos published(LocalDate published) {
    
    this.published = published;
    return this;
  }

   /**
   * Get published
   * @return published
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public LocalDate getPublished() {
    return published;
  }


  public void setPublished(LocalDate published) {
    this.published = published;
  }


   /**
   * Get previousTosUuid
   * @return previousTosUuid
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getPreviousTosUuid() {
    return previousTosUuid;
  }




   /**
   * Get nextTosUuid
   * @return nextTosUuid
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getNextTosUuid() {
    return nextTosUuid;
  }




  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Tos tos = (Tos) o;
    return Objects.equals(this.uuid, tos.uuid) &&
        Objects.equals(this.version, tos.version) &&
        Objects.equals(this.content, tos.content) &&
        Objects.equals(this.published, tos.published) &&
        Objects.equals(this.previousTosUuid, tos.previousTosUuid) &&
        Objects.equals(this.nextTosUuid, tos.nextTosUuid);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, version, content, published, previousTosUuid, nextTosUuid);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Tos {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
    sb.append("    published: ").append(toIndentedString(published)).append("\n");
    sb.append("    previousTosUuid: ").append(toIndentedString(previousTosUuid)).append("\n");
    sb.append("    nextTosUuid: ").append(toIndentedString(nextTosUuid)).append("\n");
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
