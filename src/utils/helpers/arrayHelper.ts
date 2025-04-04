export const toggleArrayItem = <T>(array: T[], item: T): T[] => {
  if (array.includes(item)) {
    return array.filter((el) => el !== item);
  } else {
    return [...array, item];
  }
};

export const checkInProgress = (array: string[], id: string) =>
  array.some((e) => e === id);
