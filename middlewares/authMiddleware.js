import JWT from "jsonwebroken";
//Routes protecting using jwt token
export const signinProtecter = async (req, res, next) => {
  try {
    const decode = JWT.verify(req.headers.authorization, process.env.JWT_KEY);
    next();
  } catch (err) {
    console.log(err);
  }
};
