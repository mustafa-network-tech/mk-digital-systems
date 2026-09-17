import createMiddleware from "next-intl/middleware";
import { routing } from "./config/i18n";
export default createMiddleware(routing);
export const config = { matcher: ["/((?!api|og|_next|.*\\..*).*)"] };
