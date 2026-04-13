export const route = {
  dashboard: "/dashboard",
  signin: "/signin",
  home: "/",
  forgotPassword: "/forgotPassword",
  transferhistory: "/dashboard/user/history/transfer",
  topuphistory: "/dashboard/user/history/topup",
  transfer: "/dashboard/transfer",
  topup: "/dashboard/topup",
  signup: "/signup",
  help: "/dashboard/user/help",
  user: "/dashboard/user",
  maintenance: "/maintenance",
  passwordReset: "/passwordReset*",
  chartTransaction: "/dashboard/user/chart-transaction",
  settings: "/dashboard/user/settings"
};

export const excludeRedirectRouteWhenUnauth = [
  route["signin"],
  route["forgotPassword"],
  route["signup"],
  route["home"],
  route["passwordReset"]
];
