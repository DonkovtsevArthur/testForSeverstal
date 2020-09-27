export const getStateDefault = (keys: string[]) => (state: any): { [id: string]: string } => {
  return keys.reduce((acc, key) => {
    return { ...acc, [key]: state[key].value || undefined };
  }, {});
};
