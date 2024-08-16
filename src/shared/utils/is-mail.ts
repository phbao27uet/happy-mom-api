export const isMail = (value: string): boolean => {
  const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return mailRegex.test(value);
};
