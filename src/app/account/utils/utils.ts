const generalFieldsConfig = [
  {
    field: "name", // for reciving data from store
    registerTitle: "username", // for registering field and translation key
    type: "text",
    translationContext: "auth",
  },
  {
    field: "email",
    registerTitle: "email",
    type: "text",
    translationContext: "auth",
  },
  {
    field: "gender",
    registerTitle: "gender",
    type: "text",
    translationContext: "personalization",
  },
  {
    field: "goal",
    registerTitle: "goal",
    type: "text",
    translationContext: "personalization",
  },
];

const metricsConfig = [
  { field: "age", registerTitle: "age", type: "number" },
  {
    field: "height",
    registerTitle: "height",
    type: "number",
  },
  {
    field: "weight",
    registerTitle: "weight",
    type: "number",
  },
  {
    field: "physicalActivityLevel",
    registerTitle: "physicalActivityLevel",
    type: "number",
  },
];

export { generalFieldsConfig, metricsConfig };
