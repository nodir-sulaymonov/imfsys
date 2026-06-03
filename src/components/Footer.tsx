// @ts-nocheck
// Recovered from build cache after src files were lost.
import Image from "next/image";
import Link from "next/link";
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
const PAGES = [
    "Home",
    "About",
    "Portfolio",
    "Contact",
    "FAQ"
];
const SOCIAL = [
    "Twitter (X)",
    "Instagram",
    "Youtube",
    "Framer"
];
export function Footer({ locale }) {
    void locale;
    return /*#__PURE__*/ jsxDEV("footer", {
        className: "relative border-t border-white/8 py-16",
        children: [
            /*#__PURE__*/ jsxDEV("div", {
                className: "max-w-[1200px] mx-auto grid gap-12 px-6 md:grid-cols-[1.4fr_1fr_1fr_1.4fr]",
                children: [
                    /*#__PURE__*/ jsxDEV("div", {
                        children: [
                            /*#__PURE__*/ jsxDEV(Link, {
                                href: "#home",
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ jsxDEV(Image, {
                                        src: "/assets/imfsys-logo.svg",
                                        alt: "imfsys",
                                        width: 28,
                                        height: 28
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 15,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ jsxDEV("span", {
                                        className: "text-[20px] font-medium",
                                        children: "imfsys"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 16,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ jsxDEV("p", {
                                className: "mt-4 max-w-[260px] text-[14px] text-white/50",
                                children: "Technology-driven solutions crafted for teams building the future."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ jsxDEV("div", {
                        children: [
                            /*#__PURE__*/ jsxDEV("h4", {
                                className: "mb-4 text-[14px] font-medium text-white/50",
                                children: "Template Pages"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ jsxDEV("ul", {
                                className: "space-y-3",
                                children: PAGES.map((p)=>/*#__PURE__*/ jsxDEV("li", {
                                        children: /*#__PURE__*/ jsxDEV(Link, {
                                            href: "#home",
                                            className: "text-[14px] text-white/70 hover:text-white",
                                            children: p
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this)
                                    }, p, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ jsxDEV("div", {
                        children: [
                            /*#__PURE__*/ jsxDEV("h4", {
                                className: "mb-4 text-[14px] font-medium text-white/50",
                                children: "Social"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ jsxDEV("ul", {
                                className: "space-y-3",
                                children: SOCIAL.map((s)=>/*#__PURE__*/ jsxDEV("li", {
                                        children: /*#__PURE__*/ jsxDEV("a", {
                                            href: "#",
                                            className: "text-[14px] text-white/70 hover:text-white",
                                            children: s
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this)
                                    }, s, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ jsxDEV("div", {
                        children: [
                            /*#__PURE__*/ jsxDEV("h4", {
                                className: "mb-4 text-[14px] font-medium text-white/50",
                                children: "Subscribe Form"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ jsxDEV("form", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ jsxDEV("input", {
                                        type: "email",
                                        placeholder: "Enter Your Email...",
                                        className: "min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-violet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ jsxDEV("button", {
                                        type: "submit",
                                        className: "btn-violet !px-5 !py-2.5",
                                        children: "Subscribe Us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ jsxDEV("div", {
                className: "mx-auto mt-12 flex max-w-[1200px] flex-col items-center justify-between gap-4 border-t border-white/8 px-6 pt-8 text-[13px] text-white/45 sm:flex-row",
                children: [
                    /*#__PURE__*/ jsxDEV("p", {
                        children: "© 2025 copyright imfsys"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ jsxDEV("p", {
                        children: "Terms & Conditions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
