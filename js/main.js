/* ===== PRODUCT DATA (from PDF Catalog) ===== */
const PRODUCTS = [
    // Door Sets (Page 3)
    { id: "SS-001", name: "Casement Door South Set Completed Set", category: "Door Sets", image: "images/page3_img1.jpeg", description: "Complete casement door south set with all necessary hardware components for UPVC door installation. Premium quality fittings with dimensional accuracy and seamless finish." },
    { id: "SS-002", name: "D Handle Spring Loaded Completed Set", category: "Door Sets", image: "images/page3_img1.jpeg", description: "Spring loaded D handle complete set for UPVC doors. Features smooth spring mechanism for reliable door operation and long-lasting performance." },
    { id: "SS-003", name: "Casement Door Set Normal/Premium Completed Set", category: "Door Sets", image: "images/page3_img1.jpeg", description: "Available in Normal and Premium variants. Complete casement door hardware set designed for UPVC profiles with international standard quality." },

    // Rollers (Page 4)
    { id: "SS-004", name: "Roller SS-004", category: "Rollers", image: "images/page4_img1.jpeg", description: "High-quality UPVC sliding door/window roller for smooth and silent operation. Built with durable materials for extended service life." },
    { id: "SS-005", name: "Roller SS-005", category: "Rollers", image: "images/page4_img1.jpeg", description: "Premium grade roller mechanism designed for heavy-duty UPVC sliding systems. Ensures effortless movement and reduced friction." },
    { id: "SS-006", name: "Roller SS-006", category: "Rollers", image: "images/page4_img1.jpeg", description: "Compact roller unit for UPVC windows with precision-engineered bearings for smooth gliding operation." },
    { id: "SS-007", name: "Roller SS-007", category: "Rollers", image: "images/page4_img1.jpeg", description: "Versatile roller system compatible with multiple UPVC profile sizes. Offers excellent load-bearing capacity." },
    { id: "SS-008", name: "Roller SS-008", category: "Rollers", image: "images/page4_img1.jpeg", description: "Heavy-duty roller for large UPVC sliding doors. Engineered to handle substantial weight while maintaining smooth operation." },
    { id: "SS-009", name: "Roller SS-009", category: "Rollers", image: "images/page4_img1.jpeg", description: "Standard roller for UPVC sliding windows with anti-corrosion treatment for long-lasting durability." },
    { id: "SS-010", name: "Roller SS-010", category: "Rollers", image: "images/page4_img1.jpeg", description: "Adjustable roller mechanism allowing fine-tuning of door/window height alignment for perfect fit." },
    { id: "SS-011", name: "Roller SS-011", category: "Rollers", image: "images/page4_img1.jpeg", description: "Tandem roller design for enhanced load distribution and smoother sliding motion in UPVC systems." },
    { id: "SS-012", name: "Roller SS-012", category: "Rollers", image: "images/page4_img1.jpeg", description: "Nylon wheel roller for lightweight UPVC windows. Noise-free operation with excellent durability." },
    { id: "SS-013", name: "Roller SS-013", category: "Rollers", image: "images/page4_img1.jpeg", description: "Stainless steel bearing roller for premium UPVC installations. Superior corrosion resistance." },
    { id: "SS-014", name: "Roller SS-014", category: "Rollers", image: "images/page4_img1.jpeg", description: "Double-wheel roller system for balanced weight distribution in wide UPVC sliding panels." },
    { id: "SS-015", name: "Roller SS-015", category: "Rollers", image: "images/page4_img1.jpeg", description: "Spring-loaded adjustable roller for easy installation and maintenance in UPVC sliding systems." },

    // Sliding Handles (Pages 5-6)
    { id: "SS-016", name: "Touch Lock with Push-Up Lock", category: "Sliding Handles", image: "images/page5_img1.jpeg", description: "Innovative touch lock mechanism combined with push-up lock for enhanced security in UPVC sliding doors and windows." },
    { id: "SS-017", name: "Touch Lock Mini", category: "Sliding Handles", image: "images/page5_img1.jpeg", description: "Compact mini touch lock for UPVC sliding windows. Space-saving design with reliable locking mechanism." },
    { id: "SS-018", name: "Pop-Up Handle Aluminium", category: "Sliding Handles", image: "images/page5_img1.jpeg", description: "Aluminium pop-up handle for UPVC sliding systems. Flush-mount design that pops up when needed for clean aesthetics." },
    { id: "SS-019", name: "Pop-Up Handle Zinc", category: "Sliding Handles", image: "images/page5_img1.jpeg", description: "Zinc alloy pop-up handle offering superior strength and durability for UPVC sliding windows." },
    { id: "SS-020", name: "Crescent Lock", category: "Sliding Handles", image: "images/page5_img1.jpeg", description: "Classic crescent lock for UPVC sliding windows. Provides secure locking with smooth cam-action mechanism." },
    { id: "SS-021", name: "Short Neck Handle", category: "Sliding Handles", image: "images/page5_img1.jpeg", description: "Short neck handle designed for UPVC sliding windows with limited clearance. Ergonomic grip design." },
    { id: "SS-022", name: "Pop-Up Handle with Short Neck with Key L/R", category: "Sliding Handles", image: "images/page5_img1.jpeg", description: "Pop-up handle with short neck and key lock, available in left/right configurations for secure UPVC windows." },
    { id: "SS-024", name: "Window Short Neck Handle L/R", category: "Sliding Handles", image: "images/page5_img1.jpeg", description: "Window-specific short neck handle available in left and right hand variants for UPVC sliding windows." },
    { id: "SS-025", name: "Sliding Handle Heavy", category: "Sliding Handles", image: "images/page5_img1.jpeg", description: "Heavy-duty sliding handle for large UPVC doors. Robust construction for frequent commercial use." },
    { id: "SS-026", name: "Short Neck Door L/R", category: "Sliding Handles", image: "images/page5_img1.jpeg", description: "Short neck door handle in left/right configurations. Specifically designed for UPVC sliding door profiles." },
    { id: "SS-027", name: "Short Neck Handle SS-027", category: "Sliding Handles", image: "images/page5_img1.jpeg", description: "Premium short neck handle variant with enhanced finish for luxury UPVC installations." },
    { id: "SS-028", name: "Short Neck Handle SS-028", category: "Sliding Handles", image: "images/page5_img1.jpeg", description: "Standard short neck handle for UPVC sliding systems. Clean design with durable finish." },
    { id: "SS-029", name: "Sliding Handle", category: "Sliding Handles", image: "images/page6_img1.jpeg", description: "Standard sliding handle for UPVC doors and windows. Sleek profile with comfortable grip." },
    { id: "SS-030", name: "Sliding Handle with Key", category: "Sliding Handles", image: "images/page6_img1.jpeg", description: "Sliding handle with integrated key lock for added security in UPVC sliding systems." },
    { id: "SS-031", name: "C Handle Small", category: "Sliding Handles", image: "images/page6_img1.jpeg", description: "Compact C-shaped handle for UPVC sliding windows. Minimalist design for modern interiors." },
    { id: "SS-032", name: "D Handle Dummy", category: "Sliding Handles", image: "images/page6_img1.jpeg", description: "Dummy D handle for non-operating UPVC panels. Provides visual consistency across door/window sets." },
    { id: "SS-033", name: "D Handle Lockable Both Side", category: "Sliding Handles", image: "images/page6_img1.jpeg", description: "Double-sided lockable D handle for UPVC sliding doors. Key-operated locking from both sides for maximum security." },
    { id: "SS-034", name: "C Handle Big", category: "Sliding Handles", image: "images/page6_img1.jpeg", description: "Large C-shaped handle for UPVC sliding doors. Generous grip area for comfortable operation." },
    { id: "SS-035", name: "D Handle with Dummy Handle", category: "Sliding Handles", image: "images/page6_img1.jpeg", description: "D handle paired with a dummy handle for UPVC sliding door configurations." },
    { id: "SS-036", name: "Sliding Key + Knob Handle", category: "Sliding Handles", image: "images/page6_img1.jpeg", description: "Combination key and knob handle for UPVC sliding doors. Key lock on one side, knob on the other." },
    { id: "SS-037", name: "Sliding Key + Plain Handle", category: "Sliding Handles", image: "images/page6_img1.jpeg", description: "Key lock handle paired with plain handle for UPVC sliding door systems." },

    // Casement Handles (Pages 7 & 9)
    { id: "SS-038", name: "Casement Crank Handle", category: "Casement Handles", image: "images/page7_img1.jpeg", description: "Crank-operated casement handle for UPVC windows. Enables easy opening and closing of outward-opening casement windows." },
    { id: "SS-039", name: "Casement Thumb Handle", category: "Casement Handles", image: "images/page7_img1.jpeg", description: "Thumb-operated casement handle for quick and easy window operation in UPVC casement systems." },
    { id: "SS-040", name: "Casement Round Handle", category: "Casement Handles", image: "images/page7_img1.jpeg", description: "Round profile casement handle with smooth operating mechanism for UPVC windows." },
    { id: "SS-041", name: "Allen Key Handle", category: "Casement Handles", image: "images/page7_img1.jpeg", description: "Security handle operated by Allen key for restricted-access UPVC casement windows." },
    { id: "SS-042", name: "Casement Handle with Key-1", category: "Casement Handles", image: "images/page7_img1.jpeg", description: "Key-lockable casement handle (Type 1) for secure UPVC window operation." },
    { id: "SS-043", name: "Casement Handle Key-02", category: "Casement Handles", image: "images/page7_img1.jpeg", description: "Key-lockable casement handle (Type 2) with enhanced locking mechanism for UPVC windows." },
    { id: "SS-044", name: "Cockspur Handle L/R Premium-1", category: "Casement Handles", image: "images/page7_img1.jpeg", description: "Premium cockspur handle (Type 1) available in left/right configurations for UPVC casement windows." },
    { id: "SS-045", name: "Cockspur Handle L/R Normal", category: "Casement Handles", image: "images/page7_img1.jpeg", description: "Standard cockspur handle in left/right variants for budget-friendly UPVC casement installations." },
    { id: "SS-046", name: "Cockspur Handle L/R Premium-2", category: "Casement Handles", image: "images/page7_img1.jpeg", description: "Premium cockspur handle (Type 2) with superior finish for high-end UPVC casement windows." },
    { id: "SS-059", name: "Mesh Lock Handle", category: "Casement Handles", image: "images/page9_img1.jpeg", description: "Specialized mesh lock handle for UPVC casement windows with insect mesh panels." },
    { id: "SS-060", name: "Casement Door Handle Premium-02", category: "Casement Handles", image: "images/page9_img1.jpeg", description: "Premium casement door handle (Type 2) with elegant design for luxury UPVC door installations." },
    { id: "SS-061", name: "Casement Door Handle Premium-01", category: "Casement Handles", image: "images/page9_img1.jpeg", description: "Premium casement door handle (Type 1) crafted for superior aesthetics and durability." },
    { id: "SS-062", name: "Casement Door Handle Normal", category: "Casement Handles", image: "images/page9_img1.jpeg", description: "Standard casement door handle for UPVC doors. Reliable performance at value pricing." },
    { id: "SS-063", name: "Casement Handle with Key + Knob", category: "Casement Handles", image: "images/page9_img1.jpeg", description: "Casement handle with key lock on one side and knob on the other for UPVC doors." },
    { id: "SS-064", name: "T Lock", category: "Casement Handles", image: "images/page9_img1.jpeg", description: "T-shaped lock mechanism for UPVC casement doors and windows. Simple yet effective locking." },
    { id: "SS-065", name: "Casement Handle with Key + Plain", category: "Casement Handles", image: "images/page9_img1.jpeg", description: "Casement handle with key lock paired with plain handle for UPVC door systems." },
    { id: "SS-066", name: "Casement Short Neck Door Handle", category: "Casement Handles", image: "images/page9_img1.jpeg", description: "Short neck door handle designed specifically for UPVC casement door profiles with limited space." },
    { id: "SS-067", name: "Casement Door Handle Both Side / Twin Sash", category: "Casement Handles", image: "images/page9_img1.jpeg", description: "Double-sided casement door handle for twin sash UPVC doors. Handles on both sides for bi-directional operation." },

    // Hinges (Page 8)
    { id: "SS-047", name: "3D Hinge", category: "Hinges", image: "images/page8_img1.jpeg", description: "Three-dimensional adjustable hinge for UPVC doors. Allows fine adjustment in three axes for perfect alignment." },
    { id: "SS-048", name: "2D Hinge", category: "Hinges", image: "images/page8_img1.jpeg", description: "Two-dimensional adjustable hinge for UPVC windows. Horizontal and vertical adjustment capability." },
    { id: "SS-049", name: "Concealed Window Hinge-1", category: "Hinges", image: "images/page8_img1.jpeg", description: "Concealed hinge (Type 1) for UPVC windows. Hidden from view when window is closed for clean aesthetics." },
    { id: "SS-050", name: "L-Hinge", category: "Hinges", image: "images/page8_img1.jpeg", description: "L-shaped hinge for UPVC windows. Strong load-bearing capacity with simple installation." },
    { id: "SS-051", name: "Concealed Door Hinge-01", category: "Hinges", image: "images/page8_img1.jpeg", description: "Concealed door hinge (Type 1) for UPVC doors. Invisible mounting for premium door installations." },
    { id: "SS-052", name: "Concealed Window Hinge-2", category: "Hinges", image: "images/page8_img1.jpeg", description: "Concealed hinge (Type 2) for UPVC windows with enhanced weight capacity and durability." },
    { id: "SS-053", name: "Flat Hinge", category: "Hinges", image: "images/page8_img1.jpeg", description: "Flat profile hinge for UPVC applications. Low-profile design suitable for slim window frames." },
    { id: "SS-054", name: "3D Hinge Zinc", category: "Hinges", image: "images/page8_img1.jpeg", description: "Zinc alloy 3D adjustable hinge for UPVC doors. Corrosion-resistant with superior strength." },
    { id: "SS-055", name: "Concealed Door Hinge-02", category: "Hinges", image: "images/page8_img1.jpeg", description: "Concealed door hinge (Type 2) with heavy-duty capacity for large UPVC doors." },
    { id: "SS-056", name: "Concealed Door Hinge", category: "Hinges", image: "images/page8_img1.jpeg", description: "Standard concealed hinge for UPVC doors. Clean appearance with reliable performance." },
    { id: "SS-057", name: "Butt Hinge Window", category: "Hinges", image: "images/page8_img1.jpeg", description: "Traditional butt hinge adapted for UPVC window applications. Simple and effective." },
    { id: "SS-058", name: "Butt Hinge Door", category: "Hinges", image: "images/page8_img1.jpeg", description: "Heavy-duty butt hinge for UPVC doors. Robust construction for frequent use." },

    // Espags & Stay Arms (Page 10)
    { id: "SS-ESPAG-1", name: "Casement Door Espag 1800", category: "Espags", image: "images/page10_img1.jpeg", description: "1800mm espagnolette bolt system for UPVC casement doors. Multi-point locking for superior security." },
    { id: "SS-ESPAG-2", name: "Casement Door Espag 1800/35/85", category: "Espags", image: "images/page10_img1.jpeg", description: "Espagnolette bolt 1800mm with 35mm backset and 85mm centers for UPVC casement doors." },
    { id: "SS-ESPAG-3", name: "D Handle Door Espag 1800/92/15", category: "Espags", image: "images/page10_img1.jpeg", description: "D handle door espag 1800mm with 92mm centers and 15mm backset for UPVC door systems." },
    { id: "SS-ESPAG-4", name: "Casement Door Espag 1800/35 & 1600/35", category: "Espags", image: "images/page10_img1.jpeg", description: "Available in 1800mm and 1600mm lengths with 35mm backset for versatile UPVC door applications." },
    { id: "SS-FS-202", name: "Friction Stay SS/202", category: "Espags", image: "images/page10_img1.jpeg", description: "Stainless steel 202 grade friction stay for UPVC casement windows. Controls opening angle and holds window in position." },
    { id: "SS-FS-304", name: "Friction Stay SS/304", category: "Espags", image: "images/page10_img1.jpeg", description: "Premium stainless steel 304 grade friction stay for UPVC windows. Superior corrosion resistance for coastal areas." },
    { id: "SS-SA", name: "Stay Arms 10\" & 12\"", category: "Espags", image: "images/page10_img1.jpeg", description: "Stay arms available in 10-inch and 12-inch sizes for UPVC casement windows. Controls window opening extent." },

    // Door Lock Sets (Page 11)
    { id: "SS-BDS", name: "Bathroom Door Set", category: "Door Lock Sets", image: "images/page11_img1.jpeg", description: "Complete bathroom door lock set for UPVC doors. Privacy lock mechanism with emergency release feature." },
    { id: "SS-MDS-1", name: "Mortise Door Set / Single Point Door Set - Cylinder Key & Knob", category: "Door Lock Sets", image: "images/page11_img1.jpeg", description: "Mortise door lock set with cylinder key on one side and knob on the other for UPVC doors." },
    { id: "SS-MDS-2", name: "Mortise Door Set - Cylinder Both Side Key", category: "Door Lock Sets", image: "images/page11_img1.jpeg", description: "Mortise door lock set with cylinder key operation from both sides for maximum security UPVC doors." },

    // Systems (Page 12)
    { id: "SS-SFS", name: "Sliding & Folding System", category: "Systems", image: "images/page12_img1.jpeg", description: "Complete sliding and folding system for UPVC doors. Enables large openings with space-saving bi-fold operation." },
    { id: "SS-TTS", name: "Tilt & Turn System", category: "Systems", image: "images/page12_img1.jpeg", description: "Tilt and turn system for UPVC windows. Dual-function: tilts inward from top for ventilation, or turns inward for full opening." },

    // Plastic Items (Page 13)
    { id: "SS-GP", name: "Glass Packer 1/3/5mm", category: "Plastic Items", image: "images/page13_img1.jpeg", description: "Glass packers available in 1mm, 3mm, and 5mm thicknesses for proper glass positioning in UPVC frames." },
    { id: "SS-UP", name: "U Packer 54/105 (1, 3, 5mm)", category: "Plastic Items", image: "images/page13_img1.jpeg", description: "U-shaped packers in 54mm and 105mm sizes with 1mm, 3mm, and 5mm thickness options for UPVC profiles." },
    { id: "SS-FC", name: "Fastener Cap", category: "Plastic Items", image: "images/page13_img1.jpeg", description: "Decorative fastener caps to cover screw heads in UPVC profiles for clean finished appearance." },
    { id: "SS-ALB", name: "Anti-Lift Big", category: "Plastic Items", image: "images/page13_img1.jpeg", description: "Large anti-lift device to prevent UPVC sliding panels from being lifted off the track. Security feature." },
    { id: "SS-ALS", name: "Anti-Lift Small", category: "Plastic Items", image: "images/page13_img1.jpeg", description: "Compact anti-lift device for UPVC sliding windows. Prevents unauthorized panel removal." },
    { id: "SS-ALL", name: "Anti-Lift L Type", category: "Plastic Items", image: "images/page13_img1.jpeg", description: "L-shaped anti-lift device for UPVC sliding systems. Enhanced grip design for secure panel retention." },
    { id: "SS-SB", name: "Space Blocker", category: "Plastic Items", image: "images/page13_img1.jpeg", description: "Space blocker for UPVC window and door assemblies. Fills gaps and ensures proper component spacing." },
    { id: "SS-SBR", name: "Space Blocker Round", category: "Plastic Items", image: "images/page13_img1.jpeg", description: "Round-profile space blocker for cylindrical gap filling in UPVC assemblies." },
    { id: "SS-SS", name: "Sliding Stopper", category: "Plastic Items", image: "images/page13_img1.jpeg", description: "Sliding stopper to limit travel range of UPVC sliding panels. Prevents over-extension." },
    { id: "SS-DC", name: "Drainage Cap", category: "Plastic Items", image: "images/page13_img1.jpeg", description: "Drainage cap for UPVC window sill drainage slots. Allows water drainage while blocking debris entry." },
    { id: "SS-BSP", name: "Bump Stopper Premium PVC/Metal", category: "Plastic Items", image: "images/page13_img1.jpeg", description: "Premium bump stopper in PVC or metal finish. Cushions door/window impact to prevent damage." },
    { id: "SS-BFS", name: "Buffer Stopper", category: "Plastic Items", image: "images/page13_img1.jpeg", description: "Buffer stopper for UPVC doors and windows. Absorbs shock and reduces noise during operation." },

    // Accessories (Pages 14–15)
    { id: "SS-NFM", name: "Nylon/Fiber Mesh", category: "Accessories", image: "images/page14_img1.jpeg", description: "Nylon and fiber mesh for UPVC window insect screens. Durable and weather-resistant." },
    { id: "SS-SBM", name: "SS Black Mesh", category: "Accessories", image: "images/page14_img1.jpeg", description: "Stainless steel black powder-coated mesh for premium UPVC insect screen installations." },
    { id: "SS-SNM", name: "SS Natural Mesh", category: "Accessories", image: "images/page14_img1.jpeg", description: "Stainless steel natural finish mesh for UPVC window screens. High visibility and airflow." },
    { id: "SS-ATSS", name: "Aluminium Track Semi-Solid", category: "Accessories", image: "images/page14_img1.jpeg", description: "Semi-solid aluminium track for UPVC sliding systems. Lightweight yet strong for window applications." },
    { id: "SS-ATH", name: "Aluminium Track Hollow", category: "Accessories", image: "images/page14_img1.jpeg", description: "Hollow aluminium track for UPVC sliding doors and windows. Reduced weight with adequate strength." },
    { id: "SS-ATS", name: "Aluminium Track Solid", category: "Accessories", image: "images/page14_img1.jpeg", description: "Solid aluminium track for heavy-duty UPVC sliding door applications. Maximum load-bearing capacity." },
    { id: "SS-PSS", name: "PVC/Self Screw", category: "Accessories", image: "images/page14_img1.jpeg", description: "Self-tapping screws specifically designed for UPVC profile assembly and hardware mounting." },
    { id: "SS-F80", name: "Fastener 8×80/100", category: "Accessories", image: "images/page14_img1.jpeg", description: "Frame fasteners in 8×80mm and 8×100mm sizes for secure UPVC frame-to-wall anchoring." },
    { id: "SS-WP", name: "Wool Pile", category: "Accessories", image: "images/page14_img1.jpeg", description: "Wool pile weather stripping for UPVC sliding doors and windows. Seals gaps and reduces air infiltration." },
    { id: "SS-GK", name: "Gasket", category: "Accessories", image: "images/page14_img1.jpeg", description: "UPVC gasket for weather sealing and glass retention. Available in various profiles." },
    { id: "SS-MTW", name: "Mesh Tool Wooden", category: "Accessories", image: "images/page14_img1.jpeg", description: "Wooden mesh installation tool for pressing mesh spline into UPVC frame channels." },
    { id: "SS-MTP", name: "Mesh Tool PVC", category: "Accessories", image: "images/page14_img1.jpeg", description: "PVC mesh installation tool. Lightweight and durable for everyday mesh fitting work." },
    { id: "SS-SB4", name: "Shoot Bolt 4\" & 6\"", category: "Accessories", image: "images/page15_img1.jpeg", description: "Shoot bolts available in 4-inch and 6-inch sizes for UPVC French doors and casement windows." },
    { id: "SS-SB10", name: "Shoot Bolt 10\" & 17\" White Powder Coated", category: "Accessories", image: "images/page15_img1.jpeg", description: "Long shoot bolts in 10-inch and 17-inch lengths with white powder coating for UPVC door systems." },
    { id: "SS-LP16", name: "L Patti 16/60", category: "Accessories", image: "images/page15_img1.jpeg", description: "L-shaped patti 16×60mm for UPVC window and door frame reinforcement." },
    { id: "SS-LP30", name: "L Patti 30/30", category: "Accessories", image: "images/page15_img1.jpeg", description: "L-shaped patti 30×30mm for corner reinforcement in UPVC profile assemblies." },
    { id: "SS-WPAP", name: "Welding Paper", category: "Accessories", image: "images/page15_img1.jpeg", description: "Specialized welding paper for clean UPVC profile welding. Prevents material sticking." },
    { id: "SS-CWK", name: "Casement Window Keep", category: "Accessories", image: "images/page15_img1.jpeg", description: "Keep (strike plate) for UPVC casement window locking mechanisms." },
    { id: "SS-CDK", name: "Casement Door Keep", category: "Accessories", image: "images/page15_img1.jpeg", description: "Keep (strike plate) for UPVC casement door lock engagement." },
    { id: "SS-FDK", name: "French Door/Window Keep", category: "Accessories", image: "images/page15_img1.jpeg", description: "Specialized keep for French door and window configurations in UPVC systems." },
    { id: "SS-CR", name: "Casement Reinforcement Stricker", category: "Accessories", image: "images/page15_img1.jpeg", description: "Reinforcement striker plate for UPVC casement doors and windows. Strengthens lock engagement point." },
    { id: "SS-13AX1", name: "13mm Axis Casement (1)", category: "Accessories", image: "images/page15_img1.jpeg", description: "13mm axis casement hardware (Type 1) for UPVC casement window pivot points." },
    { id: "SS-13AX2", name: "13mm Axis Casement (2)", category: "Accessories", image: "images/page15_img1.jpeg", description: "13mm axis casement hardware (Type 2) — alternate design for UPVC casement pivot mechanisms." },
    { id: "SS-SK", name: "Sliding Keep", category: "Accessories", image: "images/page15_img1.jpeg", description: "Keep (strike plate) for UPVC sliding door and window locking points." }
];

/* ===== CATEGORIES ===== */
const CATEGORIES = [
    { name: "Door Sets", icon: "🚪", description: "Complete hardware sets for UPVC casement doors with all fittings included.", count: 0 },
    { name: "Rollers", icon: "⚙️", description: "High-performance rollers for smooth UPVC sliding door and window operation.", count: 0 },
    { name: "Sliding Handles", icon: "🔒", description: "Handles, locks, and grips for UPVC sliding systems in multiple configurations.", count: 0 },
    { name: "Casement Handles", icon: "🪟", description: "Handles and locks for UPVC casement windows and doors — cranks, cockspur, keyed.", count: 0 },
    { name: "Hinges", icon: "🔩", description: "2D, 3D, concealed, butt, and flat hinges for all UPVC door and window types.", count: 0 },
    { name: "Espags", icon: "🔐", description: "Espagnolette bolts, friction stays, and stay arms for multi-point locking.", count: 0 },
    { name: "Door Lock Sets", icon: "🗝️", description: "Complete mortise and bathroom door lock sets for UPVC doors.", count: 0 },
    { name: "Systems", icon: "🏗️", description: "Sliding & folding systems, tilt & turn mechanisms for UPVC installations.", count: 0 },
    { name: "Plastic Items", icon: "🧱", description: "Packers, stoppers, anti-lift devices, and caps for UPVC assembly.", count: 0 },
    { name: "Accessories", icon: "🧰", description: "Mesh, tracks, screws, gaskets, keeps, and tools for complete UPVC fitting.", count: 0 }
];

// Compute category counts
CATEGORIES.forEach(cat => {
    cat.count = PRODUCTS.filter(p => p.category === cat.name).length;
});

/* ===== BRAND INFO ===== */
const BRAND = {
    name: "Season System Solutions",
    tagline: "Premium UPVC Hardware Solutions",
    description: "An established brand approved by industry professionals, providing the finest quality high endurance hardware products and services for UPVC doors and windows.",
    warranty: "10 Years against manufacturing defect",
    address: "Khedki Daula, NH-8 Road Near Stella Industries, Gurgaon-122004, Haryana",
    phone: "8130729201",
    email: "seasonsystemsolution@gmail.com",
    standards: "International Standards & Quality Certified"
};

/* ===== HELPER FUNCTIONS ===== */

function getProductById(id) {
    return PRODUCTS.find(p => p.id === id);
}

function getProductsByCategory(category) {
    if (!category || category === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === category);
}

function searchProducts(query) {
    const q = query.toLowerCase().trim();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
}

/* ===== RENDERING FUNCTIONS ===== */

function createProductCard(product) {
    return `
    <a href="product.html?id=${encodeURIComponent(product.id)}" class="product-card" data-category="${product.category}">
      <div class="product-card-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect fill=%22%23111827%22 width=%22400%22 height=%22300%22/><text x=%2250%25%22 y=%2250%25%22 fill=%22%2364748b%22 font-family=%22sans-serif%22 font-size=%2214%22 text-anchor=%22middle%22 dy=%22.3em%22>Product Image</text></svg>'">
        <span class="product-card-badge">${product.category}</span>
      </div>
      <div class="product-card-body">
        <div class="product-card-category">${product.category}</div>
        <h3 class="product-card-title">${product.name}</h3>
        <p class="product-card-sku">SKU: ${product.id}</p>
      </div>
      <div class="product-card-footer">
        <span class="product-card-link">View Details →</span>
      </div>
    </a>
  `;
}

function renderProductGrid(containerId, products, limit) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const items = limit ? products.slice(0, limit) : products;
    container.innerHTML = items.map(createProductCard).join('');
}

function renderFeaturedProducts() {
    const featured = [
        getProductById("SS-001"),
        getProductById("SS-016"),
        getProductById("SS-047"),
        getProductById("SS-038"),
        getProductById("SS-SFS"),
        getProductById("SS-BDS"),
        getProductById("SS-020"),
        getProductById("SS-ESPAG-1")
    ].filter(Boolean);
    renderProductGrid('featured-products', featured);
}

function renderCategoryGrid(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = CATEGORIES.map(cat => `
    <a href="products.html?category=${encodeURIComponent(cat.name)}" class="category-card">
      <div class="category-icon">${cat.icon}</div>
      <h3>${cat.name}</h3>
      <p>${cat.description}</p>
      <span class="category-count">${cat.count} Products</span>
    </a>
  `).join('');
}

/* ===== CATALOG PAGE ===== */

function initCatalogPage() {
    const params = new URLSearchParams(window.location.search);
    const activeCategory = params.get('category') || 'All';
    const searchQuery = params.get('q') || '';

    renderFilterSidebar(activeCategory);
    filterAndRenderProducts(activeCategory, searchQuery);
    initSearchBox(activeCategory);
}

function renderFilterSidebar(activeCategory) {
    const sidebar = document.getElementById('filter-sidebar');
    if (!sidebar) return;

    const allBtn = `<button class="filter-btn ${activeCategory === 'All' ? 'active' : ''}" data-category="All">All Products <span class="filter-count">${PRODUCTS.length}</span></button>`;
    const catBtns = CATEGORIES.map(cat => `
    <button class="filter-btn ${activeCategory === cat.name ? 'active' : ''}" data-category="${cat.name}">
      ${cat.icon} ${cat.name} <span class="filter-count">${cat.count}</span>
    </button>
  `).join('');

    sidebar.innerHTML = `
    <h3 class="filter-title">Categories</h3>
    <div class="filter-group">
      <h4>Browse by Type</h4>
      ${allBtn}
      ${catBtns}
    </div>
  `;

    sidebar.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const url = new URL(window.location);
            if (category === 'All') {
                url.searchParams.delete('category');
            } else {
                url.searchParams.set('category', category);
            }
            window.history.pushState({}, '', url);
            sidebar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterAndRenderProducts(category, document.getElementById('search-input')?.value || '');
        });
    });
}

function filterAndRenderProducts(category, query) {
    let products = getProductsByCategory(category);
    if (query) {
        const q = query.toLowerCase();
        products = products.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.id.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        );
    }
    renderProductGrid('catalog-grid', products);
    const rc = document.getElementById('results-count');
    if (rc) rc.innerHTML = `Showing <strong>${products.length}</strong> of <strong>${PRODUCTS.length}</strong> products`;
}

function initSearchBox(activeCategory) {
    const input = document.getElementById('search-input');
    if (!input) return;
    let timeout;
    input.addEventListener('input', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const activeBtn = document.querySelector('.filter-btn.active');
            const cat = activeBtn ? activeBtn.dataset.category : 'All';
            filterAndRenderProducts(cat, input.value);
        }, 300);
    });
}

/* ===== PRODUCT DETAIL PAGE ===== */

function initProductDetailPage() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id) {
        window.location.href = 'products.html';
        return;
    }

    const product = getProductById(id);
    if (!product) {
        document.getElementById('product-detail-container').innerHTML = `
      <div style="text-align:center;padding:80px 20px;">
        <h2>Product Not Found</h2>
        <p style="color:var(--text-secondary);margin:16px 0 24px;">The product you're looking for doesn't exist.</p>
        <a href="products.html" class="btn btn-primary">Browse All Products</a>
      </div>
    `;
        return;
    }

    document.title = `${product.name} — Season System Solutions`;

    const detailHTML = `
    <div class="product-detail-grid">
      <div class="product-detail-image">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 500 400%22><rect fill=%22%23111827%22 width=%22500%22 height=%22400%22/><text x=%2250%25%22 y=%2250%25%22 fill=%22%2364748b%22 font-family=%22sans-serif%22 font-size=%2216%22 text-anchor=%22middle%22 dy=%22.3em%22>Product Image</text></svg>'">
      </div>
      <div class="product-detail-info">
        <div class="product-detail-breadcrumb">
          <a href="index.html">Home</a>
          <span class="sep">›</span>
          <a href="products.html">Products</a>
          <span class="sep">›</span>
          <a href="products.html?category=${encodeURIComponent(product.category)}">${product.category}</a>
          <span class="sep">›</span>
          <span>${product.name}</span>
        </div>
        <div class="product-detail-category">${product.category}</div>
        <h1 class="product-detail-title">${product.name}</h1>
        <p class="product-detail-sku">SKU: ${product.id}</p>
        <p class="product-detail-desc">${product.description}</p>
        <div class="product-specs">
          <h3>Specifications</h3>
          <div class="spec-row"><span class="spec-label">SKU</span><span class="spec-value">${product.id}</span></div>
          <div class="spec-row"><span class="spec-label">Category</span><span class="spec-value">${product.category}</span></div>
          <div class="spec-row"><span class="spec-label">Material</span><span class="spec-value">UPVC Compatible</span></div>
          <div class="spec-row"><span class="spec-label">Warranty</span><span class="spec-value">10 Years</span></div>
          <div class="spec-row"><span class="spec-label">Standard</span><span class="spec-value">International Quality</span></div>
        </div>
        <div class="product-detail-actions">
          <a href="contact.html" class="btn btn-primary">Request Quote</a>
          <a href="products.html?category=${encodeURIComponent(product.category)}" class="btn btn-secondary">More in ${product.category}</a>
        </div>
      </div>
    </div>
    <div class="related-section">
      <h2>Related Products</h2>
      <div class="product-grid" id="related-products"></div>
    </div>
  `;

    document.getElementById('product-detail-container').innerHTML = detailHTML;

    // Render related products
    const related = getProductsByCategory(product.category)
        .filter(p => p.id !== product.id)
        .slice(0, 4);
    renderProductGrid('related-products', related);
}

/* ===== CONTACT FORM ===== */

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const success = document.getElementById('form-success');
        if (success) {
            success.classList.add('show');
            form.reset();
            setTimeout(() => success.classList.remove('show'), 5000);
        }
    });
}

/* ===== MOBILE NAV ===== */

function initMobileNav() {
    const toggle = document.getElementById('menu-toggle');
    const overlay = document.getElementById('mobile-nav');
    if (!toggle || !overlay) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        overlay.classList.toggle('show');
        document.body.style.overflow = overlay.classList.contains('show') ? 'hidden' : '';
    });

    overlay.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            toggle.classList.remove('active');
            overlay.classList.remove('show');
            document.body.style.overflow = '';
        });
    });
}

/* ===== HEADER SCROLL ===== */

function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
}

/* ===== SCROLL ANIMATIONS ===== */

function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });

    document.querySelectorAll('.animate-in').forEach(el => {
        // If element is already in viewport, show it immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            el.classList.add('visible');
        } else {
            observer.observe(el);
        }
    });
}

/* ===== PAGE LOADER ===== */

function initLoader() {
    window.addEventListener('load', () => {
        const loader = document.getElementById('page-loader');
        if (loader) {
            setTimeout(() => loader.classList.add('hide'), 300);
        }
    });
}

/* ===== SET ACTIVE NAV LINK ===== */

function setActiveNav() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-nav-overlay a').forEach(a => {
        const href = a.getAttribute('href');
        if (href === page || (page === '' && href === 'index.html')) {
            a.classList.add('active');
        }
    });
}

/* ===== INIT ===== */

document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initHeaderScroll();
    initMobileNav();
    setActiveNav();

    // Page-specific init
    if (document.getElementById('featured-products')) renderFeaturedProducts();
    if (document.getElementById('category-grid')) renderCategoryGrid('category-grid');
    if (document.getElementById('catalog-grid')) initCatalogPage();
    if (document.getElementById('product-detail-container')) initProductDetailPage();
    if (document.getElementById('contact-form')) initContactForm();

    // Init animations after content is rendered so observer can see populated elements
    initAnimations();
});
