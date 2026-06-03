// @ts-nocheck
// Recovered from build cache after src files were lost.
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
export function CTASection({ locale }) {
    void locale;
    return /*#__PURE__*/ jsxDEV("section", {
        id: "contact",
        className: "relative overflow-hidden py-32",
        children: [
            /*#__PURE__*/ jsxDEV("div", {
                className: "pointer-events-none absolute inset-x-0 bottom-0 h-[420px] opacity-70",
                children: /*#__PURE__*/ jsxDEV(Image, {
                    src: "/assets/rays.png",
                    alt: "",
                    fill: true,
                    className: "object-cover [mask-image:linear-gradient(to_top,black,transparent)]"
                }, void 0, false, {
                    fileName: "[project]/src/components/CTASection.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CTASection.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ jsxDEV("div", {
                className: "relative mx-auto max-w-[760px] px-6 text-center",
                children: [
                    /*#__PURE__*/ jsxDEV(Badge, {
                        label: "Become a Part of Us"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CTASection.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ jsxDEV("h2", {
                        className: "display mt-7 text-[34px] sm:text-[54px]",
                        children: [
                            "Ready to Elevate Your Brand",
                            /*#__PURE__*/ jsxDEV("br", {}, void 0, false, {
                                fileName: "[project]/src/components/CTASection.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ jsxDEV("span", {
                                className: "text-white/55",
                                children: "with Next-Gen Innovation?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CTASection.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CTASection.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ jsxDEV("p", {
                        className: "mx-auto mt-5 max-w-[480px] text-[15px] text-white/55",
                        children: "Ready to take the next step? Join us now and start transforming your vision into reality with expert support."
                    }, void 0, false, {
                        fileName: "[project]/src/components/CTASection.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ jsxDEV("div", {
                        className: "mt-8",
                        children: /*#__PURE__*/ jsxDEV(Link, {
                            href: "#contact",
                            className: "btn-violet",
                            children: "Book an Appointment"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CTASection.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CTASection.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CTASection.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CTASection.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
