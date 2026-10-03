export const getStorage = (key, initialValue) => {
  try {
    const item = localStorage.getItem(`me_school_${key}`);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.error(error);
    return initialValue;
  }
};

export const setStorage = (key, value) => {
  try {
    localStorage.setItem(`me_school_${key}`, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};
