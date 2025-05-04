const generalFieldsConfig = [
  {
    field: "name",
    registerTitle: "UserName",
    label: "UserName",
    type: "text",
    translationContext: "auth",
  },
  {
    field: "email",
    registerTitle: "Email",
    label: "Email",
    type: "text",
    translationContext: "auth",
  },
  {
    field: "gender",
    registerTitle: "Gender",
    label: "Gender",
    type: "text",
    translationContext: "personalization",
  },
  {
    field: "goal",
    registerTitle: "Goal",
    label: "Goal",
    type: "text",
    translationContext: "personalization",
  },
];

const metricsConfig = [
  { field: "age", registerTitle: "Age", label: "Age", type: "number" },
  {
    field: "height",
    registerTitle: "Height",
    label: "Height",
    type: "number",
  },
  {
    field: "weight",
    registerTitle: "Weight",
    label: "Weight",
    type: "number",
  },
  {
    field: "physicalActivityLevel",
    registerTitle: "ActivityLevel",
    label: "ActivityLevel",
    type: "number",
  },
];

export { generalFieldsConfig, metricsConfig };
