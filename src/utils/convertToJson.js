import yaml from "yaml";

function convertToJson(contentYAMLorJSON) {
  if (typeof contentYAMLorJSON !== "string") {
    return contentYAMLorJSON;
  }
  try {
    if (JSON.parse(contentYAMLorJSON)) return JSON.parse(contentYAMLorJSON);
    if (yaml.parse(contentYAMLorJSON)) return yaml.parse(contentYAMLorJSON);
  } catch (jsonError) {
    try {
    } catch (yamlError) {
      // If parsing as YAML also fails, return null or handle the error as needed
      console.error(
        "Error parsing content as JSON or YAML:",
        jsonError.message,
        yamlError.message
      );
      return null;
    }
  }
}

module.exports = { convertToJson };
