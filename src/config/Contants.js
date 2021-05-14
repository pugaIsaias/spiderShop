const dev = {
  apiURL: "http://localhost:2500/api/",
  mysqlURL: "https://localhost:8080/",
};

const prod = {
  apiURL: "https://rotaract-metropoli-gt.uc.r.appspot.com/api/",
  mysqlURL: "https://checkout-dot-rotaract-metropoli-gt.uc.r.appspot.com/",
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
