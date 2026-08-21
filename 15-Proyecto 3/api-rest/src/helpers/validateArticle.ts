import validator from "validator";

export const validateArticle = (parametros: any): void => {
  const titleToCheck = parametros.title
    ? parametros.title.trim()
    : "";

  const contentToCheck = parametros.content
    ? parametros.content.trim()
    : "";

  const validateTitle =
    !validator.isEmpty(titleToCheck) &&
    validator.isLength(titleToCheck, {
      min: 5,
      max: 150,
    });

  const validateContent =
    !validator.isEmpty(contentToCheck) &&
    validator.isLength(contentToCheck, {
      min: 20,
      max: 10000,
    });

  if (!validateTitle || !validateContent) {
    throw new Error("Validator failed");
  }
};