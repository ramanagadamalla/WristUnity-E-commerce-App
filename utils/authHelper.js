import bcrypt from "bcrypt";
const hashPasswd = async (password) => {
  try {
    const saltRounds = 9;
    const hashed = await bcrypt.hash(password, saltRounds);
    return hashed;
  } catch (err) {
    console.log(err);
  }
};
const comparePaswd = async (password, hashed) => {
  return bcrypt.compare(password, hashed);
};
export { hashPasswd, comparePaswd };
