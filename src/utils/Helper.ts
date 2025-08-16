export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const splitStringByCase = (string: string) => {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ");
  // return string.split(/(?=[A-Z][a-z])/);
  // return string.match(/[A-Z]*[^A-Z]+/g) || [];
};

export const composeInitialState = <T extends object>(modelArray: { [P in keyof T]: (T[P] | [T[P], string]) }) => {

  const initialState = {} as T;
  const names = {} as { [Property in keyof T]: keyof T };
  const labels = {} as { [Property in keyof T]: string };
  // const PropertyNames = composePropertyNameObject(initialState);

  Object.entries(modelArray).forEach(model => {
    // console.log({ model });
    const property = model[0] as keyof T;
    let defaultValue: T[typeof property];
    let label = "";
    const name = property.toString() as keyof T;

    // if (checkIsArray(model[1]) && model[1] && model[1].length == 2) {
    if (Array.isArray(model[1]) && model[1].length == 2) {
      [defaultValue, label] = model[1] as [T[typeof property], string];
    } else {
      defaultValue = model[1] as T[typeof property];
      label = splitStringByCase(capitalize(name.toString())).join(" ");

      if (label.startsWith("Is ")) {
        label = label.substring("Is ".length);
      }

      if (label.startsWith("Has ")) {
        label = label.substring("Has ".length);
      }

      if (label.endsWith(" Id")) {
        label = label.replaceAll(" Id", "");
      }

      if (label.endsWith(" Ids")) {
        label = label.replaceAll(" Ids", "s");
      }
    }

    names[property] = name;
    initialState[property] = defaultValue;
    labels[property] = label;
  });

  return {
    initialState,
    names,
    labels
  };
};