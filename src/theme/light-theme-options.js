const neutral = {
	90: "#FFFFFF1A",
	100: "#FFFFFF",
	200: "#E5E7EB",
	300: "#F6F7FB",
	400: "#9CA3AF",
	500: "#6B7280",
	600: "#4B5563",
	700: "#374151",
	800: "#1F2937",
	900: "#111827",
	1000: "#212E28",
	1100: "#D6D6D6",
};

const background = {
	default: "#F9FAFC",
	paper: "#FFFFFF",
	custom: "#f1f2f5",
	custom2: "#FFFFFF",
	custom3: "#F6F7FB",
	custom4: "#ffffff",
	footer1: "#9f9f9f1a",
	footer2: "#9f9f9f0d",
	custom5: "#F4F6F8",
	custom6: "#FCFCFD",
	custom7: "#F6F6F6",
};

const divider = "#E6E8F0";

const primary = {
	main: "#8B4513", // Rich brown
	deep: "#5C2F0A", // Deep brown
	light: "#F5E9D8", // Beige
	dark: "#6B3A0F", // Darker brown
	semiLight: "#FFF5E6", // Light beige
	contrastText: "#FFFFFF",
	customType1: "#A0522D", // Sienna brown
	customType2: "#CD853F", // Peru brown
	customType3: "#DEB887", // Burlywood beige
	overLay: "#000000",
	lite: "rgba(139, 69, 19, 0.1)", // Brown with opacity
	icon: "#8B4513", // Rich brown
};

const moduleTheme = {
	pharmacy: "#8B4513", // Brown
	ecommerce: "#8B4513", // Brown
	food: "#8B4513", // Brown
	parcel: "#8B4513", // Brown
};

const horizontalCardBG = "#FFF5E6"; // Light beige

const secondary = {
	main: "#F28C38", // Orange
	light: "#FFB266", // Light orange
	dark: "#D76A1F", // Dark orange
	contrastText: "#FFFFFF",
};

const success = {
	main: "#DAA520", // Goldenrod
	light: "#FFE4B5", // Light beige/gold
	dark: "#B8860B", // Dark goldenrod
	contrastText: "#FFFFFF",
};

const info = {
	main: "#2196F3",
	light: "#64B6F7",
	dark: "#0B79D0",
	lite: "#DBF5FF",
	contrastText: "#FFFFFF",
	contrastText1: "#F5F6F8",
	blue: "#0D6EFD",
	custom1: "#31C0F5",
};

const warning = {
	main: "#FFB020",
	light: "#FFF8D5",
	lite: "#FFBD8B",
	liter: "#FFF8F2",
	dark: "#FE961C",
	contrastText: "#FFFFFF",
	new: "#FFC817",
};

const error = {
	main: "#D14343",
	light: "#DA6868",
	dark: "#922E2E",
	contrastText: "#FFFFFF",
	deepLight: "#FF725E",
};

const text = {
	primary: "#4A3728", // Dark brown
	secondary: "#9CA3AF", // Kept neutral gray
	disabled: "rgba(55, 65, 81, 0.48)",
	custom: "#3F3F3F",
	customText1: "#4B5563",
};

const footer = {
	inputButton: "#FFDAB9", // Peachy beige
	inputButtonHover: "#DEB887", // Burlywood beige
	bottom: "rgba(139, 69, 19, 0.3)", // Brown with opacity
	foodBottom: "#686B78",
	appDownloadButtonBg: "#1A1A1A",
	appDownloadButtonBgGray: "#4A3728", // Dark brown
	appDownloadButtonBgHover: "#4f4f4f",
	foodFooterBg: "#414141",
};

const customColor = {
	textGray: "#9c9c9c",
	textGrayDeep: "#787676",
	buyButton: "#F9E091",
	parcelWallet: "#8B3FFD",
};

const whiteContainer = {
	main: "#ffffff",
};

const pink = {
	main: "#FF6D76",
};

const foodCardColor = "#FFF8F0"; // Warm beige
const paperBoxShadow = "#E5EAF1";
const roundStackOne = "rgba(255, 255, 255, 0.04)";
const roundStackTwo = "rgba(255, 255, 255, 0.06)";
const toolTipColor = neutral[1000];

export const lightThemeOptions = {
	components: {
		MuiAvatar: {
			styleOverrides: {
				root: {
					backgroundColor: neutral[500],
					color: "#FFFFFF",
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					"&.MuiChip-filledDefault": {
						backgroundColor: neutral[200],
						"& .MuiChip-deleteIcon": {
							color: neutral[400],
						},
					},
					"&.MuiChip-outlinedDefault": {
						"& .MuiChip-deleteIcon": {
							color: neutral[300],
						},
					},
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				input: {
					"&::placeholder": {
						opacity: 1,
						color: text.secondary,
					},
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				notchedOutline: {
					borderColor: divider,
				},
				input: {
					"&:-webkit-autofill": {
						"-webkit-box-shadow": "0 0 0 100px #f0f5f5 inset",
						"-webkit-text-fill-color": "#000",
					},
				},
			},
		},
		MuiMenu: {
			styleOverrides: {
				paper: {
					borderColor: divider,
					borderStyle: "solid",
					borderWidth: 1,
				},
			},
		},
		MuiPopover: {
			styleOverrides: {
				paper: {
					borderColor: divider,
					borderStyle: "solid",
					borderWidth: 1,
				},
			},
		},
		MuiSwitch: {
			styleOverrides: {
				switchBase: {
					color: neutral[500],
				},
				track: {
					backgroundColor: neutral[400],
					opacity: 1,
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					borderBottom: `1px solid ${divider}`,
				},
			},
		},
		MuiTableHead: {
			styleOverrides: {
				root: {
					backgroundColor: neutral[100],
					".MuiTableCell-root": {
						color: neutral[700],
					},
				},
			},
		},
	},
	palette: {
		action: {
			active: neutral[500],
			focus: "rgba(55, 65, 81, 0.12)",
			hover: "rgba(55, 65, 81, 0.04)",
			selected: "rgba(55, 65, 81, 0.08)",
			disabledBackground: "rgba(55, 65, 81, 0.12)",
			disabled: "rgba(55, 65, 81, 0.26)",
		},
		horizontalCardBG,
		background,
		divider,
		error,
		info,
		mode: "light",
		neutral,
		primary,
		secondary,
		success,
		text,
		warning,
		footer,
		customColor,
		whiteContainer,
		pink,
		paperBoxShadow,
		foodCardColor,
		moduleTheme,
		roundStackOne,
		roundStackTwo,
		toolTipColor,
	},
	shadows: [
		"none",
		"0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
		"0px 1px 2px rgba(100, 116, 139, 0.12)",
		"0px 1px 4px rgba(100, 116, 139, 0.12)",
		"0px 1px 5px rgba(100, 116, 139, 0.12)",
		"0px 1px 6px rgba(100, 116, 139, 0.12)",
		"0px 2px 6px rgba(100, 116, 139, 0.12)",
		"0px 3px 6px rgba(100, 116, 139, 0.12)",
		"0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
		"0px 5px 12px rgba(100, 116, 139, 0.12)",
		"0px 5px 14px rgba(100, 116, 139, 0.12)",
		"0px 5px 15px rgba(100, 116, 139, 0.12)",
		"0px 6px 15px rgba(100, 116, 139, 0.12)",
		"0px 7px 15px rgba(100, 116, 139, 0.12)",
		"0px 8px 15px rgba(100, 116, 139, 0.12)",
		"0px 9px 15px rgba(100, 116, 139, 0.12)",
		"0px 10px 15px rgba(100, 116, 139, 0.12)",
		"0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
		"0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
		"0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
		"0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
		"0px 25px 50px rgba(100, 116, 139, 0.25)",
		"0px 25px 50px rgba(100, 116, 139, 0.25)",
		"0px 25px 50px rgba(100, 116, 139, 0.25)",
		"0px 25px 50px rgba(100, 116, 139, 0.25)",
	],
};
