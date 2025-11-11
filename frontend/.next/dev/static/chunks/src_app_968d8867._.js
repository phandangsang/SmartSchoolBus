(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/sidebar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Nav$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Nav.js [app-client] (ecmascript) <export default as Nav>");
'use client';
;
;
;
;
;
function Sidebar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "46893ea0ff320618decb5b4eb6279bbfcc3be5ccc5aad5079ed81141d7458344") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "46893ea0ff320618decb5b4eb6279bbfcc3be5ccc5aad5079ed81141d7458344";
    }
    const { activeTab, onTabChange, userRole: t1 } = t0;
    const userRole = t1 === undefined ? "admin" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            {
                id: "students",
                label: "Qu\u1EA3n l\xFD h\u1ECDc sinh"
            },
            {
                id: "drivers",
                label: "Qu\u1EA3n l\xFD t\xE0i x\u1EBF"
            },
            {
                id: "buses",
                label: "Qu\u1EA3n l\xFD xe bu\xFDt"
            },
            {
                id: "routes",
                label: "Qu\u1EA3n l\xFD tuy\u1EBFn \u0111\u01B0\u1EDDng"
            },
            {
                id: "assignments",
                label: "Ph\xE2n c\xF4ng"
            },
            {
                id: "schedule",
                label: "L\u1ECBch tr\xECnh"
            },
            {
                id: "tracking",
                label: "Theo d\xF5i GPS"
            }
        ];
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    const adminMenuItems = t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            {
                id: "student",
                label: "Th\xF4ng tin"
            },
            {
                id: "tracking",
                label: "Theo d\xF5i xe bu\xFDt"
            },
            {
                id: "notifications",
                label: "Th\xF4ng b\xE1o & C\u1EA3nh b\xE1o"
            },
            {
                id: "schedule",
                label: "L\u1ECBch tr\xECnh tu\u1EA7n"
            },
            {
                id: "history",
                label: "L\u1ECBch s\u1EED di chuy\u1EC3n"
            }
        ];
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const parentMenuItems = t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [
            {
                id: "routes",
                label: "Tuy\u1EBFn \u0111\u01B0\u1EDDng"
            },
            {
                id: "students",
                label: "Qu\u1EA3n l\xFD h\u1ECDc sinh"
            },
            {
                id: "schedule",
                label: "L\u1ECBch ch\u1EA1y"
            },
            {
                id: "notifications",
                label: "Th\xF4ng b\xE1o"
            }
        ];
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    const driverMenuItems = t4;
    const menuItems = userRole === "parent" ? parentMenuItems : userRole === "driver" ? driverMenuItems : adminMenuItems;
    let t5;
    if ($[4] !== activeTab || $[5] !== menuItems || $[6] !== onTabChange) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sidebar",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Nav$3e$__["Nav"], {
                className: "sidebar-nav flex-column",
                children: menuItems.map({
                    "Sidebar[menuItems.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Nav$3e$__["Nav"].Link, {
                            className: `sidebar-nav-item ${activeTab === item.id ? "active" : ""}`,
                            onClick: {
                                "Sidebar[menuItems.map() > <Nav.Link>.onClick]": ()=>onTabChange(item.id)
                            }["Sidebar[menuItems.map() > <Nav.Link>.onClick]"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sidebar-nav-icon",
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/sidebar.js",
                                    lineNumber: 99,
                                    columnNumber: 63
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sidebar-nav-label",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/sidebar.js",
                                    lineNumber: 99,
                                    columnNumber: 116
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/app/components/sidebar.js",
                            lineNumber: 97,
                            columnNumber: 47
                        }, this)
                }["Sidebar[menuItems.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/app/components/sidebar.js",
                lineNumber: 96,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/sidebar.js",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[4] = activeTab;
        $[5] = menuItems;
        $[6] = onTabChange;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    return t5;
}
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/parent/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParentPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Badge.js [app-client] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Alert.js [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroup$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ListGroup.js [app-client] (ecmascript) <export default as ListGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/sidebar.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ParentPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "99c788b08afa75b1481e860e2f3e8426c4c131b9a0ff05dbf4c2dd8a66bd0326") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "99c788b08afa75b1481e860e2f3e8426c4c131b9a0ff05dbf4c2dd8a66bd0326";
    }
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("tracking");
    const [studentName, setStudentName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [, setShowNotificationModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [, setSelectedNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            id: "HS001",
            name: "Nguy\u1EC5n V\u0103n An",
            class: "10A1",
            school: "THPT L\xEA Qu\xFD \u0110\xF4n",
            dateOfBirth: "15/05/2008",
            address: "123 Nguy\u1EC5n V\u0103n Linh, Qu\u1EADn 7, TP.HCM",
            phone: "0123456789",
            pickupPoint: "Ng\xE3 t\u01B0 B\xECnh Ph\u01B0\u1EDBc",
            dropoffPoint: "C\u1ED5ng tr\u01B0\u1EDDng THPT L\xEA Qu\xFD \u0110\xF4n",
            parentName: "Nguy\u1EC5n V\u0103n Ba",
            parentPhone: "0987654321"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [studentInfo, setStudentInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            busNumber: "Xe 01",
            plateNumber: "29A-12345",
            driverName: "Ho\xE0ng V\u0103n M\u1EA1nh",
            driverPhone: "0912345678",
            currentLocation: "\u0110ang \u1EDF g\u1EA7n Ng\xE3 t\u01B0 B\xECnh Ph\u01B0\u1EDBc",
            estimatedArrival: "5 ph\xFAt n\u1EEFa",
            status: "on-route",
            distance: "2.3 km",
            route: "SGU - HCMUTE",
            scheduledTime: "07:30"
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [busInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            {
                day: "Th\u1EE9 2",
                route: "SGU - HCMUTE",
                pickupTime: "06:30",
                dropoffTime: "07:30"
            },
            {
                day: "Th\u1EE9 3",
                route: "SGU - HCMUTE",
                pickupTime: "06:30",
                dropoffTime: "07:30"
            },
            {
                day: "Th\u1EE9 4",
                route: "SGU - HCMUTE",
                pickupTime: "06:30",
                dropoffTime: "07:30"
            },
            {
                day: "Th\u1EE9 5",
                route: "SGU - HCMUTE",
                pickupTime: "06:30",
                dropoffTime: "07:30"
            },
            {
                day: "Th\u1EE9 6",
                route: "SGU - HCMUTE",
                pickupTime: "06:30",
                dropoffTime: "07:30"
            }
        ];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [weeklySchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            {
                id: 1,
                type: "arrival",
                title: "Xe s\u1EAFp \u0111\u1EBFn!",
                message: "Xe bu\xFDt s\u1EBD \u0111\u1EBFn \u0111i\u1EC3m \u0111\xF3n trong 5 ph\xFAt. Con b\u1EA1n n\xEAn chu\u1EA9n b\u1ECB ra \u0111i\u1EC3m \u0111\xF3n.",
                time: "2 ph\xFAt tr\u01B0\u1EDBc",
                read: false,
                severity: "info"
            },
            {
                id: 2,
                type: "delay",
                title: "C\u1EA3nh b\xE1o: Xe tr\u1EC5",
                message: "Xe bu\xFDt \u0111ang b\u1ECB ch\u1EADm 10 ph\xFAt do t\u1EAFc \u0111\u01B0\u1EDDng tr\xEAn \u0111\u01B0\u1EDDng \u0110i\u1EC7n Bi\xEAn Ph\u1EE7. D\u1EF1 ki\u1EBFn \u0111\u1EBFn l\xFAc 07:40.",
                time: "15 ph\xFAt tr\u01B0\u1EDBc",
                read: false,
                severity: "warning"
            },
            {
                id: 3,
                type: "info",
                title: "Xe \u0111\xE3 xu\u1EA5t ph\xE1t",
                message: "Xe bu\xFDt \u0111\xE3 r\u1EDDi b\u1EBFn l\xFAc 06:30. \u0110ang tr\xEAn \u0111\u01B0\u1EDDng \u0111\u1EBFn \u0111i\u1EC3m \u0111\xF3n c\u1EE7a con b\u1EA1n.",
                time: "1 gi\u1EDD tr\u01B0\u1EDBc",
                read: true,
                severity: "success"
            },
            {
                id: 4,
                type: "arrived",
                title: "\u0110\xE3 \u0111\u1EBFn \u0111i\u1EC3m \u0111\xF3n",
                message: "Xe bu\xFDt \u0111\xE3 \u0111\u1EBFn \u0111i\u1EC3m \u0111\xF3n c\u1EE7a con b\u1EA1n. Con \u0111\xE3 l\xEAn xe an to\xE0n.",
                time: "H\xF4m qua",
                read: true,
                severity: "success"
            }
        ];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [
            {
                id: 1,
                date: "08/11/2025",
                route: "SGU - HCMUTE",
                pickupTime: "06:35",
                dropoffTime: "07:28",
                status: "completed",
                onTime: true
            },
            {
                id: 2,
                date: "07/11/2025",
                route: "SGU - HCMUTE",
                pickupTime: "06:32",
                dropoffTime: "07:45",
                status: "completed",
                onTime: false
            },
            {
                id: 3,
                date: "06/11/2025",
                route: "SGU - HCMUTE",
                pickupTime: "06:30",
                dropoffTime: "07:30",
                status: "completed",
                onTime: true
            },
            {
                id: 4,
                date: "05/11/2025",
                route: "SGU - HCMUTE",
                pickupTime: "06:28",
                dropoffTime: "07:25",
                status: "completed",
                onTime: true
            }
        ];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const [tripHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "ParentPage[useEffect()]": ()=>{
                const userRole = localStorage.getItem("userRole");
                localStorage.getItem("userName");
                const studentNameStored = localStorage.getItem("studentName");
                if (userRole === "parent") {
                    setIsAuthenticated(true);
                    if (studentNameStored) {
                        setStudentName(studentNameStored);
                        setStudentInfo({
                            "ParentPage[useEffect() > setStudentInfo()]": (prev)=>({
                                    ...prev,
                                    name: studentNameStored
                                })
                        }["ParentPage[useEffect() > setStudentInfo()]"]);
                    }
                } else {
                    window.location.href = "/login";
                }
            }
        })["ParentPage[useEffect()]"];
        t6 = [];
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    const getStatusBadge = _ParentPageGetStatusBadge;
    let t7;
    if ($[8] !== notifications) {
        t7 = ({
            "ParentPage[handleNotificationClick]": (notification)=>{
                setSelectedNotification(notification);
                setShowNotificationModal(true);
                setNotifications(notifications.map({
                    "ParentPage[handleNotificationClick > notifications.map()]": (n)=>n.id === notification.id ? {
                            ...n,
                            read: true
                        } : n
                }["ParentPage[handleNotificationClick > notifications.map()]"]));
            }
        })["ParentPage[handleNotificationClick]"];
        $[8] = notifications;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const handleNotificationClick = t7;
    notifications.filter(_ParentPageNotificationsFilter);
    let t8;
    if ($[10] !== activeTab || $[11] !== busInfo || $[12] !== handleNotificationClick || $[13] !== notifications || $[14] !== studentInfo || $[15] !== studentName || $[16] !== tripHistory || $[17] !== weeklySchedule) {
        t8 = ({
            "ParentPage[renderContent]": ()=>{
                switch(activeTab){
                    case "tracking":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "parent-header mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "parent-title",
                                                children: " Theo dõi xe buýt"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/parent/page.js",
                                                lineNumber: 234,
                                                columnNumber: 60
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "parent-subtitle",
                                                children: "Vị trí thời gian thực của xe đưa đón"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/parent/page.js",
                                                lineNumber: 234,
                                                columnNumber: 111
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/parent/page.js",
                                        lineNumber: 234,
                                        columnNumber: 24
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                                        className: "mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                            lg: 10,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                                className: "bus-tracking-card shadow-sm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Body, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "d-flex justify-content-between align-items-start mb-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "mb-2",
                                                                        children: [
                                                                            " ",
                                                                            busInfo.busNumber,
                                                                            " - ",
                                                                            busInfo.plateNumber
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 234,
                                                                        columnNumber: 356
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-muted mb-1",
                                                                        children: [
                                                                            "Tài xế: ",
                                                                            busInfo.driverName,
                                                                            " - ",
                                                                            busInfo.driverPhone
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 234,
                                                                        columnNumber: 426
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-muted mb-0",
                                                                        children: [
                                                                            "Tuyến: ",
                                                                            busInfo.route
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 234,
                                                                        columnNumber: 513
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/parent/page.js",
                                                                lineNumber: 234,
                                                                columnNumber: 351
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/parent/page.js",
                                                            lineNumber: 234,
                                                            columnNumber: 280
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "map-placeholder mb-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "map-content",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: "3rem"
                                                                        },
                                                                        children: "🗺️"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 234,
                                                                        columnNumber: 649
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-2 mb-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "Vị trí hiện tại:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 236,
                                                                                columnNumber: 67
                                                                            }, this),
                                                                            " ",
                                                                            busInfo.currentLocation
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 236,
                                                                        columnNumber: 42
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-muted",
                                                                        children: [
                                                                            "Khoảng cách: ",
                                                                            busInfo.distance
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 236,
                                                                        columnNumber: 130
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/parent/page.js",
                                                                lineNumber: 234,
                                                                columnNumber: 620
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/parent/page.js",
                                                            lineNumber: 234,
                                                            columnNumber: 582
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                                                            variant: "info",
                                                            className: "mb-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "d-flex align-items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: "2rem"
                                                                        },
                                                                        className: "me-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 236,
                                                                        columnNumber: 285
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: [
                                                                                    "Dự kiến đến điểm đón: ",
                                                                                    busInfo.estimatedArrival
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 238,
                                                                                columnNumber: 56
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 238,
                                                                                columnNumber: 121
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                children: [
                                                                                    "Giờ lên lịch: ",
                                                                                    busInfo.scheduledTime
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 238,
                                                                                columnNumber: 127
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 238,
                                                                        columnNumber: 51
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/parent/page.js",
                                                                lineNumber: 236,
                                                                columnNumber: 242
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/parent/page.js",
                                                            lineNumber: 236,
                                                            columnNumber: 203
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/parent/page.js",
                                                    lineNumber: 234,
                                                    columnNumber: 269
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/parent/page.js",
                                                lineNumber: 234,
                                                columnNumber: 223
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/parent/page.js",
                                            lineNumber: 234,
                                            columnNumber: 210
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/parent/page.js",
                                        lineNumber: 234,
                                        columnNumber: 188
                                    }, this)
                                ]
                            }, void 0, true);
                        }
                    case "notifications":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "parent-header mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "parent-title",
                                                children: " Th\xF4ng b\xE1o & C\u1EA3nh b\xE1o"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/parent/page.js",
                                                lineNumber: 242,
                                                columnNumber: 60
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "parent-subtitle",
                                                children: [
                                                    "Nhận cập nhật về xe buýt và lịch trình của ",
                                                    studentName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/parent/page.js",
                                                lineNumber: 242,
                                                columnNumber: 133
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/parent/page.js",
                                        lineNumber: 242,
                                        columnNumber: 24
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                            lg: 10,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                                className: "shadow-sm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Body, {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroup$3e$__["ListGroup"], {
                                                        variant: "flush",
                                                        children: notifications.map({
                                                            "ParentPage[renderContent > notifications.map()]": (notif)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroup$3e$__["ListGroup"].Item, {
                                                                    className: `notification-item ${!notif.read ? "unread" : ""}`,
                                                                    onClick: {
                                                                        "ParentPage[renderContent > notifications.map() > <ListGroup.Item>.onClick]": ()=>handleNotificationClick(notif)
                                                                    }["ParentPage[renderContent > notifications.map() > <ListGroup.Item>.onClick]"],
                                                                    style: {
                                                                        cursor: "pointer"
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "d-flex align-items-start",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontSize: "2rem"
                                                                                },
                                                                                className: "me-3",
                                                                                children: notif.icon
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 247,
                                                                                columnNumber: 74
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-grow-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "d-flex justify-content-between align-items-start",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                className: "mb-1",
                                                                                                children: notif.title
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                                lineNumber: 249,
                                                                                                columnNumber: 172
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "mb-1 text-muted",
                                                                                                children: notif.message
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                                lineNumber: 249,
                                                                                                columnNumber: 211
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                                className: "text-muted",
                                                                                                children: notif.time
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                                lineNumber: 249,
                                                                                                columnNumber: 261
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                                        lineNumber: 249,
                                                                                        columnNumber: 167
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/parent/page.js",
                                                                                    lineNumber: 249,
                                                                                    columnNumber: 101
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 249,
                                                                                columnNumber: 72
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 247,
                                                                        columnNumber: 32
                                                                    }, this)
                                                                }, notif.id, false, {
                                                                    fileName: "[project]/src/app/parent/page.js",
                                                                    lineNumber: 243,
                                                                    columnNumber: 89
                                                                }, this)
                                                        }["ParentPage[renderContent > notifications.map()]"])
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/parent/page.js",
                                                        lineNumber: 242,
                                                        columnNumber: 287
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/parent/page.js",
                                                    lineNumber: 242,
                                                    columnNumber: 276
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/parent/page.js",
                                                lineNumber: 242,
                                                columnNumber: 248
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/parent/page.js",
                                            lineNumber: 242,
                                            columnNumber: 235
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/parent/page.js",
                                        lineNumber: 242,
                                        columnNumber: 230
                                    }, this)
                                ]
                            }, void 0, true);
                        }
                    case "schedule":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "parent-header mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "parent-title",
                                                children: " Lịch trình tuần"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/parent/page.js",
                                                lineNumber: 254,
                                                columnNumber: 60
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "parent-subtitle",
                                                children: [
                                                    "Lịch trình tuyến cố định của ",
                                                    studentName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/parent/page.js",
                                                lineNumber: 254,
                                                columnNumber: 110
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/parent/page.js",
                                        lineNumber: 254,
                                        columnNumber: 24
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                            lg: 10,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                                className: "shadow-sm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Body, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "mb-3",
                                                            children: "Tuần này (06/11 - 10/11/2025)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/parent/page.js",
                                                            lineNumber: 254,
                                                            columnNumber: 250
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "schedule-list",
                                                            children: weeklySchedule.map({
                                                                "ParentPage[renderContent > weeklySchedule.map()]": (schedule, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `schedule-item ${schedule.status}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "schedule-header",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                    className: "mb-0",
                                                                                    children: [
                                                                                        schedule.day,
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                                                                            bg: getStatusBadge(schedule.status).variant,
                                                                                            className: "ms-2",
                                                                                            children: getStatusBadge(schedule.status).text
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/parent/page.js",
                                                                                            lineNumber: 255,
                                                                                            columnNumber: 230
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/parent/page.js",
                                                                                    lineNumber: 255,
                                                                                    columnNumber: 195
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 255,
                                                                                columnNumber: 162
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "schedule-body mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                                                                            md: 6,
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "mb-1",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                        children: " Tuyến:"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                                                        lineNumber: 255,
                                                                                                        columnNumber: 429
                                                                                                    }, this),
                                                                                                    " ",
                                                                                                    schedule.route
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                                lineNumber: 255,
                                                                                                columnNumber: 409
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/parent/page.js",
                                                                                            lineNumber: 255,
                                                                                            columnNumber: 397
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                                                                            md: 3,
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "mb-1",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                        children: " Đón:"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                                                        lineNumber: 255,
                                                                                                        columnNumber: 512
                                                                                                    }, this),
                                                                                                    " ",
                                                                                                    schedule.pickupTime
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                                lineNumber: 255,
                                                                                                columnNumber: 492
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/parent/page.js",
                                                                                            lineNumber: 255,
                                                                                            columnNumber: 480
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                                                                            md: 3,
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "mb-1",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                        children: " Trả:"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                                                        lineNumber: 255,
                                                                                                        columnNumber: 598
                                                                                                    }, this),
                                                                                                    " ",
                                                                                                    schedule.dropoffTime
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                                lineNumber: 255,
                                                                                                columnNumber: 578
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/parent/page.js",
                                                                                            lineNumber: 255,
                                                                                            columnNumber: 566
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/parent/page.js",
                                                                                    lineNumber: 255,
                                                                                    columnNumber: 392
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 255,
                                                                                columnNumber: 356
                                                                            }, this)
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 255,
                                                                        columnNumber: 100
                                                                    }, this)
                                                            }["ParentPage[renderContent > weeklySchedule.map()]"])
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/parent/page.js",
                                                            lineNumber: 254,
                                                            columnNumber: 305
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/parent/page.js",
                                                    lineNumber: 254,
                                                    columnNumber: 239
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/parent/page.js",
                                                lineNumber: 254,
                                                columnNumber: 211
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/parent/page.js",
                                            lineNumber: 254,
                                            columnNumber: 198
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/parent/page.js",
                                        lineNumber: 254,
                                        columnNumber: 193
                                    }, this)
                                ]
                            }, void 0, true);
                        }
                    case "history":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "parent-header mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "parent-title",
                                                children: " Lịch sử di chuyển"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/parent/page.js",
                                                lineNumber: 260,
                                                columnNumber: 60
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "parent-subtitle",
                                                children: [
                                                    "Các chuyến xe đã hoàn thành của ",
                                                    studentName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/parent/page.js",
                                                lineNumber: 260,
                                                columnNumber: 112
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/parent/page.js",
                                        lineNumber: 260,
                                        columnNumber: 24
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                        className: "shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Body, {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "table-responsive",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    className: "table table-hover",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: "Ngày"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 260,
                                                                        columnNumber: 319
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: "Tuyến"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 260,
                                                                        columnNumber: 332
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: "Giờ đón"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 260,
                                                                        columnNumber: 346
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: "Giờ trả"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 260,
                                                                        columnNumber: 362
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: "Trạng thái"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 260,
                                                                        columnNumber: 378
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: "Ghi chú"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 260,
                                                                        columnNumber: 397
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/parent/page.js",
                                                                lineNumber: 260,
                                                                columnNumber: 315
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/parent/page.js",
                                                            lineNumber: 260,
                                                            columnNumber: 308
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: tripHistory.map(_ParentPageRenderContentTripHistoryMap)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/parent/page.js",
                                                            lineNumber: 260,
                                                            columnNumber: 426
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/parent/page.js",
                                                    lineNumber: 260,
                                                    columnNumber: 271
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/parent/page.js",
                                                lineNumber: 260,
                                                columnNumber: 237
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/parent/page.js",
                                            lineNumber: 260,
                                            columnNumber: 226
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/parent/page.js",
                                        lineNumber: 260,
                                        columnNumber: 198
                                    }, this)
                                ]
                            }, void 0, true);
                        }
                    case "student":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "parent-header mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "parent-title",
                                                children: " Thông tin học sinh"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/parent/page.js",
                                                lineNumber: 264,
                                                columnNumber: 60
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "parent-subtitle",
                                                children: "Thông tin chi tiết "
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/parent/page.js",
                                                lineNumber: 264,
                                                columnNumber: 113
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/parent/page.js",
                                        lineNumber: 264,
                                        columnNumber: 24
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                            lg: 10,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                                    className: "shadow-sm mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Header, {
                                                            className: "bg-white text-dark",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                className: "mb-0",
                                                                children: " Thông tin cá nhân"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/parent/page.js",
                                                                lineNumber: 264,
                                                                columnNumber: 268
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/parent/page.js",
                                                            lineNumber: 264,
                                                            columnNumber: 224
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Body, {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                                                                className: "mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                                                        md: 6,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Mã học sinh:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                                        lineNumber: 264,
                                                                                        columnNumber: 391
                                                                                    }, this),
                                                                                    " ",
                                                                                    studentInfo.id
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 264,
                                                                                columnNumber: 371
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Họ và tên:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                                        lineNumber: 264,
                                                                                        columnNumber: 461
                                                                                    }, this),
                                                                                    " ",
                                                                                    studentInfo.name
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 264,
                                                                                columnNumber: 441
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Ngày sinh:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                                        lineNumber: 264,
                                                                                        columnNumber: 531
                                                                                    }, this),
                                                                                    " ",
                                                                                    studentInfo.dateOfBirth
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 264,
                                                                                columnNumber: 511
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mb-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Số điện thoại:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                                        lineNumber: 264,
                                                                                        columnNumber: 608
                                                                                    }, this),
                                                                                    " ",
                                                                                    studentInfo.phone
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 264,
                                                                                columnNumber: 588
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 264,
                                                                        columnNumber: 359
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                                                        md: 6,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Lớp:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                                        lineNumber: 264,
                                                                                        columnNumber: 701
                                                                                    }, this),
                                                                                    " ",
                                                                                    studentInfo.class
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 264,
                                                                                columnNumber: 681
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Trường:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                                        lineNumber: 264,
                                                                                        columnNumber: 766
                                                                                    }, this),
                                                                                    " ",
                                                                                    studentInfo.school
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 264,
                                                                                columnNumber: 746
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mb-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Địa chỉ:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                                        lineNumber: 264,
                                                                                        columnNumber: 835
                                                                                    }, this),
                                                                                    " ",
                                                                                    studentInfo.address
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 264,
                                                                                columnNumber: 815
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 264,
                                                                        columnNumber: 669
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/parent/page.js",
                                                                lineNumber: 264,
                                                                columnNumber: 337
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/parent/page.js",
                                                            lineNumber: 264,
                                                            columnNumber: 326
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/parent/page.js",
                                                    lineNumber: 264,
                                                    columnNumber: 191
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                                    className: "shadow-sm mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Header, {
                                                            className: "bg-white text-dark",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                className: "mb-0",
                                                                children: " Thông tin đưa đón"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/parent/page.js",
                                                                lineNumber: 264,
                                                                columnNumber: 994
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/parent/page.js",
                                                            lineNumber: 264,
                                                            columnNumber: 950
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Body, {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                                                        md: 6,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Điểm đón:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                                        lineNumber: 264,
                                                                                        columnNumber: 1100
                                                                                    }, this),
                                                                                    " ",
                                                                                    studentInfo.pickupPoint
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 264,
                                                                                columnNumber: 1080
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mb-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Tuyến xe:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                                        lineNumber: 264,
                                                                                        columnNumber: 1176
                                                                                    }, this),
                                                                                    " ",
                                                                                    busInfo.route
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 264,
                                                                                columnNumber: 1156
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 264,
                                                                        columnNumber: 1068
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                                                        md: 6,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Điểm trả:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                                        lineNumber: 264,
                                                                                        columnNumber: 1260
                                                                                    }, this),
                                                                                    " ",
                                                                                    studentInfo.dropoffPoint
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 264,
                                                                                columnNumber: 1240
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mb-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Xe buýt:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                                        lineNumber: 264,
                                                                                        columnNumber: 1337
                                                                                    }, this),
                                                                                    " ",
                                                                                    busInfo.busNumber,
                                                                                    " (",
                                                                                    busInfo.plateNumber,
                                                                                    ")"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 264,
                                                                                columnNumber: 1317
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 264,
                                                                        columnNumber: 1228
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/parent/page.js",
                                                                lineNumber: 264,
                                                                columnNumber: 1063
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/parent/page.js",
                                                            lineNumber: 264,
                                                            columnNumber: 1052
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/parent/page.js",
                                                    lineNumber: 264,
                                                    columnNumber: 917
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                                    className: "shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Header, {
                                                            className: "bg-white text-dark",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                className: "mb-0",
                                                                children: " Thông tin phụ huynh"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/parent/page.js",
                                                                lineNumber: 264,
                                                                columnNumber: 1513
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/parent/page.js",
                                                            lineNumber: 264,
                                                            columnNumber: 1469
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Body, {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                                                        md: 6,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Họ tên phụ huynh:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                                        lineNumber: 264,
                                                                                        columnNumber: 1621
                                                                                    }, this),
                                                                                    " ",
                                                                                    studentInfo.parentName
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 264,
                                                                                columnNumber: 1601
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mb-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Số điện thoại:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                                        lineNumber: 264,
                                                                                        columnNumber: 1704
                                                                                    }, this),
                                                                                    " ",
                                                                                    studentInfo.parentPhone
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/parent/page.js",
                                                                                lineNumber: 264,
                                                                                columnNumber: 1684
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 264,
                                                                        columnNumber: 1589
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                                                        md: 6,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    children: "Địa chỉ:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/parent/page.js",
                                                                                    lineNumber: 264,
                                                                                    columnNumber: 1803
                                                                                }, this),
                                                                                " ",
                                                                                studentInfo.address
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/parent/page.js",
                                                                            lineNumber: 264,
                                                                            columnNumber: 1783
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/parent/page.js",
                                                                        lineNumber: 264,
                                                                        columnNumber: 1771
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/parent/page.js",
                                                                lineNumber: 264,
                                                                columnNumber: 1584
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/parent/page.js",
                                                            lineNumber: 264,
                                                            columnNumber: 1573
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/parent/page.js",
                                                    lineNumber: 264,
                                                    columnNumber: 1441
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/parent/page.js",
                                            lineNumber: 264,
                                            columnNumber: 178
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/parent/page.js",
                                        lineNumber: 264,
                                        columnNumber: 173
                                    }, this)
                                ]
                            }, void 0, true);
                        }
                    default:
                        {
                            return null;
                        }
                }
            }
        })["ParentPage[renderContent]"];
        $[10] = activeTab;
        $[11] = busInfo;
        $[12] = handleNotificationClick;
        $[13] = notifications;
        $[14] = studentInfo;
        $[15] = studentName;
        $[16] = tripHistory;
        $[17] = weeklySchedule;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    const renderContent = t8;
    if (!isAuthenticated) {
        let t9;
        if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/parent/page.js",
                lineNumber: 289,
                columnNumber: 12
            }, this);
            $[19] = t9;
        } else {
            t9 = $[19];
        }
        return t9;
    }
    let t9;
    if ($[20] !== activeTab) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            activeTab: activeTab,
            onTabChange: setActiveTab,
            userRole: "parent"
        }, void 0, false, {
            fileName: "[project]/src/app/parent/page.js",
            lineNumber: 298,
            columnNumber: 10
        }, this);
        $[20] = activeTab;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== renderContent) {
        t10 = renderContent();
        $[22] = renderContent;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "parent-content",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                fluid: true,
                children: t10
            }, void 0, false, {
                fileName: "[project]/src/app/parent/page.js",
                lineNumber: 314,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/parent/page.js",
            lineNumber: 314,
            columnNumber: 11
        }, this);
        $[24] = t10;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== t11 || $[27] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t9,
                t11
            ]
        }, void 0, true);
        $[26] = t11;
        $[27] = t9;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    return t12;
}
_s(ParentPage, "iCGNPh7+0tJ5mdjn3dUgeWgKlFs=");
_c = ParentPage;
function _ParentPageRenderContentTripHistoryMap(trip) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: trip.date
            }, void 0, false, {
                fileName: "[project]/src/app/parent/page.js",
                lineNumber: 332,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: trip.route
            }, void 0, false, {
                fileName: "[project]/src/app/parent/page.js",
                lineNumber: 332,
                columnNumber: 48
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: trip.pickupTime
            }, void 0, false, {
                fileName: "[project]/src/app/parent/page.js",
                lineNumber: 332,
                columnNumber: 69
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: trip.dropoffTime
            }, void 0, false, {
                fileName: "[project]/src/app/parent/page.js",
                lineNumber: 332,
                columnNumber: 95
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                    bg: trip.onTime ? "success" : "warning",
                    children: trip.onTime ? " \u0110\xFAng gi\u1EDD" : " Tr\u1EC5"
                }, void 0, false, {
                    fileName: "[project]/src/app/parent/page.js",
                    lineNumber: 332,
                    columnNumber: 126
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/parent/page.js",
                lineNumber: 332,
                columnNumber: 122
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: !trip.onTime && trip.delay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                    className: "text-muted",
                    children: [
                        "Trễ ",
                        trip.delay
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/parent/page.js",
                    lineNumber: 332,
                    columnNumber: 276
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/parent/page.js",
                lineNumber: 332,
                columnNumber: 241
            }, this)
        ]
    }, trip.id, true, {
        fileName: "[project]/src/app/parent/page.js",
        lineNumber: 332,
        columnNumber: 10
    }, this);
}
function _ParentPageNotificationsFilter(n_0) {
    return !n_0.read;
}
function _ParentPageGetStatusBadge(status) {
    const statusMap = {
        "on-route": {
            variant: "primary"
        },
        "delayed": {
            variant: "warning"
        },
        "arrived": {
            variant: "success"
        },
        "completed": {
            variant: "secondary"
        },
        "today": {
            variant: "info"
        },
        "upcoming": {
            variant: "light"
        }
    };
    return statusMap[status] || {
        variant: "secondary",
        text: status,
        icon: "\u2022"
    };
}
var _c;
__turbopack_context__.k.register(_c, "ParentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_968d8867._.js.map