// @ts-nocheck
// Recovered from build cache after src files were lost.
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
const ITEMS = [
    {
        name: "John Smith",
        role: "CEO, Innovate Solutions",
        img: "img_012.png",
        quote: "They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence."
    },
    {
        name: "Emily Davis",
        role: "Product Manager, Nexus Digital",
        img: "img_015.png",
        quote: "The team understood our complex requirements and provided a user-friendly, high-performing website that stands out in the market."
    },
    {
        name: "David Lee",
        role: "Founder, GreenLeaf Enterprises",
        img: "img_014.png",
        quote: "Their innovative solutions helped streamline our operations, and the design and development is both functional and visually stunning."
    },
    {
        name: "Mark Thompson",
        role: "Creative Director, PixelWorks Studio",
        img: "img_016.png",
        quote: "We were blown away by the creative approach and attention to detail. The team took our ideas and turned them into a stunning website."
    },
    {
        name: "Brian Clark",
        role: "Team Lead, Mandro Designs",
        img: "img_018.png",
        quote: "They delivered a customized solution that addressed all of our business needs. The website is sleek, functional, and improved our customer experience."
    },
    {
        name: "Daniel Carter",
        role: "Founder, Fusion Studios",
        img: "img_019.png",
        quote: "Their dedication and attention to detail are unmatched. They delivered a beautifully designed website that perfectly reflects our brand."
    }
];
const LOGOS = [
    "img_001.png",
    "img_002.png",
    "img_003.png",
    "img_004.png"
];
export function TestimonialsSection({ locale }) {
    void locale;
    return /*#__PURE__*/ jsxDEV("section", {
        className: "relative py-28",
        children: /*#__PURE__*/ jsxDEV("div", {
            className: "max-w-[1200px] mx-auto px-6",
            children: [
                /*#__PURE__*/ jsxDEV("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ jsxDEV(Badge, {
                            label: "Testimonial"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TestimonialsSection.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ jsxDEV("h2", {
                            className: "display mt-7 text-[34px] sm:text-[54px]",
                            children: [
                                "What Our Clients Say",
                                /*#__PURE__*/ jsxDEV("br", {}, void 0, false, {
                                    fileName: "[project]/src/components/TestimonialsSection.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ jsxDEV("span", {
                                    className: "text-white/55",
                                    children: "About imfsys's Excellence"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TestimonialsSection.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TestimonialsSection.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ jsxDEV("p", {
                            className: "mx-auto mt-5 max-w-[560px] text-[15px] text-white/55",
                            children: "Hear from our happy clients! See how we've helped them achieve their goals and create lasting impact."
                        }, void 0, false, {
                            fileName: "[project]/src/components/TestimonialsSection.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ jsxDEV("div", {
                            className: "mt-8",
                            children: /*#__PURE__*/ jsxDEV(Link, {
                                href: "#contact",
                                className: "btn-violet",
                                children: "Book An Appointment"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestimonialsSection.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TestimonialsSection.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TestimonialsSection.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ jsxDEV("div", {
                    className: "mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
                    children: ITEMS.map((t)=>/*#__PURE__*/ jsxDEV("article", {
                            className: "card flex flex-col p-7",
                            children: [
                                /*#__PURE__*/ jsxDEV("div", {
                                    className: "text-[15px] text-yellow-400",
                                    children: "★★★★★"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TestimonialsSection.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ jsxDEV("p", {
                                    className: "mt-4 flex-1 text-[14px] leading-relaxed text-white/70",
                                    children: [
                                        "“",
                                        t.quote,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TestimonialsSection.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ jsxDEV("div", {
                                    className: "mt-6 flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ jsxDEV(Image, {
                                            src: `/assets/${t.img}`,
                                            alt: t.name,
                                            width: 44,
                                            height: 44,
                                            className: "h-11 w-11 rounded-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TestimonialsSection.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ jsxDEV("div", {
                                            children: [
                                                /*#__PURE__*/ jsxDEV("p", {
                                                    className: "text-[14px] font-medium",
                                                    children: t.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TestimonialsSection.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ jsxDEV("p", {
                                                    className: "text-[12px] text-white/50",
                                                    children: t.role
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TestimonialsSection.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TestimonialsSection.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TestimonialsSection.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, t.name, true, {
                            fileName: "[project]/src/components/TestimonialsSection.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/TestimonialsSection.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ jsxDEV("div", {
                    className: "mt-16 flex items-center justify-center gap-12 opacity-40",
                    children: LOGOS.map((logo)=>/*#__PURE__*/ jsxDEV(Image, {
                            src: `/assets/${logo}`,
                            alt: "",
                            width: 56,
                            height: 56,
                            className: "h-10 w-auto object-contain grayscale"
                        }, logo, false, {
                            fileName: "[project]/src/components/TestimonialsSection.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/TestimonialsSection.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TestimonialsSection.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/TestimonialsSection.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
