import createMiddleware from "next-intl/middleware";
import { i18nConfig } from "./config/i18n";

export default createMiddleware(i18nConfig);

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
