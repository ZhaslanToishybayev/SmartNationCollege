import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  	   fontFamily: {
  	     sans: ['var(--font-manrope)', 'sans-serif'], // Map default sans to Manrope variable
  	     arial: ['Arial', 'sans-serif'], // Keep Arial definition if needed for specific fallbacks or elements
  	     manrope: ['var(--font-manrope)', 'sans-serif'], // Explicit Manrope class if needed
  	   },
  		  colors: {
  		    // Existing shadcn/ui colors (keep them)
  		    background: 'hsl(var(--background))', // Assuming this maps to #E6E6E6 or similar light gray
  		    foreground: 'hsl(var(--foreground))', // Assuming this maps to #000000 or similar dark text
  		    card: {
  		      DEFAULT: 'hsl(var(--card))', // Assuming this maps to #F1F1F1 or #FFFFFF
  		      foreground: 'hsl(var(--card-foreground))'
  		    },
  		    popover: {
  		      DEFAULT: 'hsl(var(--popover))',
  		      foreground: 'hsl(var(--popover-foreground))'
  		    },
  		    primary: {
  		      DEFAULT: 'hsl(var(--primary))', // Assuming this maps to #3D6FD1
  		      foreground: 'hsl(var(--primary-foreground))' // Assuming this maps to #FFFFFF
  		    },
  		    secondary: {
  		      DEFAULT: 'hsl(var(--secondary))',
  		      foreground: 'hsl(var(--secondary-foreground))'
  		    },
  		    muted: {
  		      DEFAULT: 'hsl(var(--muted))', // Assuming this maps to rgba(0, 0, 0, 0.3) or similar
  		      foreground: 'hsl(var(--muted-foreground))'
  		    },
  		    accent: {
  		      DEFAULT: 'hsl(var(--accent))',
  		      foreground: 'hsl(var(--accent-foreground))'
  		    },
  		    destructive: {
  		      DEFAULT: 'hsl(var(--destructive))',
  		      foreground: 'hsl(var(--destructive-foreground))'
  		    },
  		    border: 'hsl(var(--border))', // Assuming this maps to rgba(0, 0, 0, 0.3) or similar
  		    input: 'hsl(var(--input))',
  		    ring: 'hsl(var(--ring))',
  		    chart: {
  		      '1': 'hsl(var(--chart-1))',
  		      '2': 'hsl(var(--chart-2))',
  		      '3': 'hsl(var(--chart-3))',
  		      '4': 'hsl(var(--chart-4))',
  		      '5': 'hsl(var(--chart-5))'
  		    },
  		    sidebar: {
  		      DEFAULT: 'hsl(var(--sidebar-background))',
  		      foreground: 'hsl(var(--sidebar-foreground))',
  		      primary: 'hsl(var(--sidebar-primary))',
  		      'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  		      accent: 'hsl(var(--sidebar-accent))',
  		      'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  		      border: 'hsl(var(--sidebar-border))',
  		      ring: 'hsl(var(--sidebar-ring))'
  		    },
  		    // Figma Colors
  		    'figma-blue-primary': '#3D6FD1', // fill_3WVJZ5
  		    'figma-blue-dark': '#294A8B',    // fill_267Z3Y
  		    'figma-gray-light': '#E6E6E6', // fill_463GNX (Main BG / Footer BG)
  		    'figma-gray-bg': '#F1F1F1',    // fill_830WS0 (Card BG)
  		    'figma-gray-muted': 'rgba(0, 0, 0, 0.3)', // fill_33OW0N (Lines, muted text)
  		    'figma-black': '#000000',      // fill_9XHLTM (Text)
  		    'figma-white': '#FFFFFF',      // fill_QDWL9U (Text on Blue Button, Icon BG)
  		},
  		  borderRadius: {
  		    // Existing shadcn/ui radii (keep them)
  		    lg: 'var(--radius)',
  		    md: 'calc(var(--radius) - 2px)',
  		    sm: 'calc(var(--radius) - 4px)',
  		    // Figma Radii
  		    'figma-8': '8px',
  		    'figma-16': '16px',
  		    'figma-100': '100px', // For rounded inputs/buttons
  		  },
  		  boxShadow: {
  		    'figma-header': '0px 4px 12px 0px rgba(0, 0, 0, 0.25)', // effect_0C8HRP
  		    'figma-hero-overlay': '-10px -10px 35px 0px rgba(0, 0, 0, 0.25)', // effect_NNV92Q
  		    'figma-card': '0px 0px 20px 0px rgba(0, 0, 0, 0.25)', // effect_M3JORR
  		    'figma-footer': '4px 0px 12px 0px rgba(0, 0, 0, 0.25)', // effect_TMBIGX
  		  },
  		  fontSize: {
  		    // Map Figma font sizes (consider adding more as needed)
  		    'figma-16': ['16px', { lineHeight: '1.21em' }], // Example for Inter 16px
  		    'figma-16-arial': ['16px', { lineHeight: '4em' }], // Arial 16px (Header Nav)
  		    'figma-18': ['18px', { lineHeight: '1.15em' }], // Arial 18px (Footer Titles)
  		    'figma-20': ['20px', { lineHeight: '1.21em' }], // Inter 20px (Button, Service Card Title)
  		    'figma-20-arial': ['20px', { lineHeight: '1.15em' }], // Arial 20px (Stats Subtitle, Footer Links)
  		    'figma-30': ['30px', { lineHeight: '1.15em' }], // Arial 30px (About Text, Contact Titles/Text)
  		    'figma-35': ['35px', { lineHeight: '1.15em' }], // Arial 35px (Newsletter Title)
  		    'figma-36': ['36px', { lineHeight: '1.15em' }], // Arial 36px (Stats Number)
  		    'figma-64': ['64px', { lineHeight: '1.15em' }], // Arial 64px (Hero Title)
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
