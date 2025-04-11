module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/quiz-app/" // Укажи название твоего репозитория
      : "/",
};
