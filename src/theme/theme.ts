import { createTheme, ThemeOptions, responsiveFontSizes } from '@mui/material/styles';
import { colors } from './color';

// Define custom breakpoints for all screen sizes
const breakpoints = {
  values: {
    xs: 0,      // Extra small devices (portrait phones)
    sm: 600,    // Small devices (landscape phones)
    md: 960,    // Medium devices (tablets)
    lg: 1280,   // Large devices (desktops)
    xl: 1920,   // Extra large devices (large desktops)
    xxl: 2560,  // Ultra-wide screens
  },
};

// Responsive spacing helper
const responsiveSpacing = {
  xs: 4,   // 4px on extra small screens
  sm: 8,   // 8px on small screens
  md: 12,  // 12px on medium screens
  lg: 16,  // 16px on large screens
  xl: 20,  // 20px on extra large screens
  xxl: 24, // 24px on ultra-wide screens
};

// Custom theme configuration
const themeOptions: ThemeOptions = {
  // Custom breakpoints
  breakpoints,

  palette: {
    mode: 'light',
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
    background: colors.background,
    text: colors.text,
    divider: colors.divider,
  },

  // Responsive Typography - Scales with screen size
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    
    // Responsive font sizes
    fontSize: 14, // Base font size (will be adjusted by responsiveFontSizes)
    
    h1: {
      fontSize: 'clamp(2rem, 5vw, 3.5rem)', // Responsive: min 2rem, preferred 5vw, max 3.5rem
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
      '@media (min-width:600px) and (max-width:960px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:960px) and (max-width:1280px)': {
        fontSize: '3rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '3.5rem',
      },
    },
    h2: {
      fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.00833em',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:600px) and (max-width:960px)': {
        fontSize: '2rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontSize: 'clamp(1.25rem, 3vw, 2rem)',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
      '@media (min-width:600px) and (max-width:960px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2rem',
      },
    },
    h4: {
      fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.125rem',
      },
      '@media (min-width:600px) and (max-width:960px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.75rem',
      },
    },
    h5: {
      fontSize: 'clamp(1rem, 2vw, 1.5rem)',
      fontWeight: 600,
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:600px) and (max-width:960px)': {
        fontSize: '1.25rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.5rem',
      },
    },
    h6: {
      fontSize: 'clamp(0.875rem, 1.5vw, 1.25rem)',
      fontWeight: 600,
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
      '@media (min-width:600px) and (max-width:960px)': {
        fontSize: '1rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.25rem',
      },
    },
    subtitle1: {
      fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)',
      fontWeight: 500,
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.125rem',
      },
    },
    subtitle2: {
      fontSize: 'clamp(0.75rem, 1vw, 1rem)',
      fontWeight: 500,
      lineHeight: 1.57,
      '@media (max-width:600px)': {
        fontSize: '0.75rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1rem',
      },
    },
    body1: {
      fontSize: 'clamp(0.875rem, 1vw, 1rem)',
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: 'clamp(0.75rem, 0.9vw, 0.875rem)',
      lineHeight: 1.43,
      '@media (max-width:600px)': {
        fontSize: '0.75rem',
      },
      '@media (min-width:960px)': {
        fontSize: '0.875rem',
      },
    },
    button: {
      fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
      fontWeight: 500,
      textTransform: 'none',
      letterSpacing: '0.02857em',
      '@media (max-width:600px)': {
        fontSize: '0.75rem',
      },
      '@media (min-width:960px)': {
        fontSize: '0.875rem',
      },
    },
    caption: {
      fontSize: 'clamp(0.625rem, 0.8vw, 0.75rem)',
      lineHeight: 1.66,
      '@media (max-width:600px)': {
        fontSize: '0.625rem',
      },
      '@media (min-width:960px)': {
        fontSize: '0.75rem',
      },
    },
  },

  // Responsive Spacing - Base unit: 8px
  spacing: 8,

  // Responsive Shape - Border radius
  shape: {
    borderRadius: 8,
  },

  // Shadows - Subtle & Professional
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 8px rgba(0, 0, 0, 0.08)',
    '0px 8px 16px rgba(0, 0, 0, 0.1)',
    '0px 12px 24px rgba(0, 0, 0, 0.12)',
    '0px 16px 32px rgba(0, 0, 0, 0.14)',
    '0px 20px 40px rgba(0, 0, 0, 0.16)',
    '0px 24px 48px rgba(0, 0, 0, 0.18)',
    '0px 1px 3px rgba(0,0,0,0.12), 0px 1px 2px rgba(0,0,0,0.24)',
    '0px 3px 6px rgba(0,0,0,0.15), 0px 2px 4px rgba(0,0,0,0.12)',
    '0px 10px 20px rgba(0,0,0,0.15), 0px 3px 6px rgba(0,0,0,0.10)',
    '0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)',
    '0px 20px 40px rgba(0,0,0,0.2)',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 8px rgba(0,0,0,0.08)',
    '0px 8px 16px rgba(0,0,0,0.1)',
    '0px 12px 24px rgba(0,0,0,0.12)',
    '0px 16px 32px rgba(0,0,0,0.14)',
    '0px 20px 40px rgba(0,0,0,0.16)',
    '0px 24px 48px rgba(0,0,0,0.18)',
    '0px 1px 3px rgba(0,0,0,0.12), 0px 1px 2px rgba(0,0,0,0.24)',
    '0px 3px 6px rgba(0,0,0,0.15), 0px 2px 4px rgba(0,0,0,0.12)',
    '0px 10px 20px rgba(0,0,0,0.15), 0px 3px 6px rgba(0,0,0,0.10)',
    '0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)',
    '0px 20px 40px rgba(0,0,0,0.2)',
  ],

  // Responsive Component Customizations
  components: {
    // Button - Responsive sizing
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          boxShadow: 'none',
          transition: 'all 0.3s ease-in-out',
          // Responsive padding
          padding: '8px 16px',
          '@media (max-width:600px)': {
            padding: '6px 12px',
            fontSize: '0.75rem',
          },
          '@media (min-width:600px) and (max-width:960px)': {
            padding: '8px 16px',
            fontSize: '0.875rem',
          },
          '@media (min-width:960px)': {
            padding: '10px 20px',
            fontSize: '0.875rem',
          },
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
          },
        },
        sizeSmall: {
          padding: '4px 10px',
          fontSize: '0.75rem',
          '@media (max-width:600px)': {
            padding: '4px 8px',
            fontSize: '0.7rem',
          },
        },
        sizeLarge: {
          padding: '12px 24px',
          fontSize: '1rem',
          '@media (max-width:600px)': {
            padding: '8px 16px',
            fontSize: '0.875rem',
          },
        },
      },
    },

    // Card - Responsive sizing
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s ease-in-out',
          '@media (max-width:600px)': {
            borderRadius: 8,
          },
          '@media (min-width:1920px)': {
            borderRadius: 16,
          },
          '&:hover': {
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },

    // CardContent - Responsive padding
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '16px',
          '@media (max-width:600px)': {
            padding: '12px',
          },
          '@media (min-width:600px) and (max-width:960px)': {
            padding: '16px',
          },
          '@media (min-width:960px) and (max-width:1280px)': {
            padding: '20px',
          },
          '@media (min-width:1280px)': {
            padding: '24px',
          },
          '&:last-child': {
            paddingBottom: '16px',
            '@media (max-width:600px)': {
              paddingBottom: '12px',
            },
            '@media (min-width:1280px)': {
              paddingBottom: '24px',
            },
          },
        },
      },
    },

    // Paper - Responsive elevation
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '@media (max-width:600px)': {
            borderRadius: 6,
          },
          '@media (min-width:1920px)': {
            borderRadius: 12,
          },
        },
        elevation1: {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
        },
      },
    },

    // Container - Responsive max width
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
          '@media (max-width:600px)': {
            paddingLeft: '12px',
            paddingRight: '12px',
          },
          '@media (min-width:600px) and (max-width:960px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
          '@media (min-width:960px)': {
            paddingLeft: '32px',
            paddingRight: '32px',
          },
        },
        maxWidthXs: {
          '@media (min-width:0px)': {
            maxWidth: '444px',
          },
        },
        maxWidthSm: {
          '@media (min-width:600px)': {
            maxWidth: '720px',
          },
        },
        maxWidthMd: {
          '@media (min-width:960px)': {
            maxWidth: '1080px',
          },
        },
        maxWidthLg: {
          '@media (min-width:1280px)': {
            maxWidth: '1440px',
          },
        },
        maxWidthXl: {
          '@media (min-width:1920px)': {
            maxWidth: '1800px',
          },
        },
      },
    },

    // TextField - Responsive sizing
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '@media (max-width:600px)': {
              fontSize: '0.875rem',
            },
          },
          '& .MuiInputLabel-root': {
            '@media (max-width:600px)': {
              fontSize: '0.875rem',
            },
          },
        },
      },
    },

    // AppBar - Responsive height
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
          '@media (max-width:600px)': {
            minHeight: '56px',
          },
          '@media (min-width:600px) and (max-width:960px)': {
            minHeight: '64px',
          },
          '@media (min-width:960px)': {
            minHeight: '72px',
          },
        },
      },
    },

    // Toolbar - Responsive padding
    MuiToolbar: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            minHeight: '56px',
            paddingLeft: '12px',
            paddingRight: '12px',
          },
          '@media (min-width:600px) and (max-width:960px)': {
            minHeight: '64px',
            paddingLeft: '16px',
            paddingRight: '16px',
          },
          '@media (min-width:960px)': {
            minHeight: '72px',
            paddingLeft: '24px',
            paddingRight: '24px',
          },
        },
      },
    },

    // Drawer - Responsive width
    MuiDrawer: {
      styleOverrides: {
        paper: {
          '@media (max-width:600px)': {
            width: '240px',
          },
          '@media (min-width:600px) and (max-width:960px)': {
            width: '260px',
          },
          '@media (min-width:960px)': {
            width: '280px',
          },
          '@media (min-width:1920px)': {
            width: '320px',
          },
        },
      },
    },

    // Chip - Responsive sizing
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
          height: 'auto',
          '@media (max-width:600px)': {
            fontSize: '0.7rem',
            padding: '4px 8px',
            height: '24px',
          },
          '@media (min-width:600px) and (max-width:960px)': {
            fontSize: '0.75rem',
            padding: '5px 10px',
            height: '28px',
          },
          '@media (min-width:960px)': {
            fontSize: '0.8125rem',
            padding: '6px 12px',
            height: '32px',
          },
        },
        sizeSmall: {
          '@media (max-width:600px)': {
            height: '20px',
            fontSize: '0.65rem',
          },
        },
      },
    },

    // Table - Responsive sizing
    MuiTable: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            fontSize: '0.75rem',
          },
          '@media (min-width:600px) and (max-width:960px)': {
            fontSize: '0.875rem',
          },
          '@media (min-width:960px)': {
            fontSize: '0.875rem',
          },
        },
      },
    },

    // TableCell - Responsive padding
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${colors.divider}`,
          '@media (max-width:600px)': {
            padding: '8px',
            fontSize: '0.75rem',
          },
          '@media (min-width:600px) and (max-width:960px)': {
            padding: '12px',
            fontSize: '0.875rem',
          },
          '@media (min-width:960px)': {
            padding: '16px',
            fontSize: '0.875rem',
          },
        },
        head: {
          fontWeight: 600,
          backgroundColor: colors.grey[50],
          '@media (max-width:600px)': {
            fontSize: '0.75rem',
          },
        },
      },
    },

    // Dialog - Responsive sizing
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 12,
          '@media (max-width:600px)': {
            margin: '16px',
            borderRadius: 8,
            maxHeight: 'calc(100% - 32px)',
          },
          '@media (min-width:600px) and (max-width:960px)': {
            margin: '32px',
          },
          '@media (min-width:960px)': {
            margin: '48px',
          },
        },
      },
    },

    // DialogTitle - Responsive padding
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            padding: '12px 16px',
            fontSize: '1.125rem',
          },
          '@media (min-width:600px) and (max-width:960px)': {
            padding: '16px 20px',
            fontSize: '1.25rem',
          },
          '@media (min-width:960px)': {
            padding: '20px 24px',
            fontSize: '1.5rem',
          },
        },
      },
    },

    // DialogContent - Responsive padding
    MuiDialogContent: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            padding: '12px 16px',
          },
          '@media (min-width:600px) and (max-width:960px)': {
            padding: '16px 20px',
          },
          '@media (min-width:960px)': {
            padding: '20px 24px',
          },
        },
      },
    },

    // DialogActions - Responsive padding
    MuiDialogActions: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            padding: '12px 16px',
          },
          '@media (min-width:600px) and (max-width:960px)': {
            padding: '16px 20px',
          },
          '@media (min-width:960px)': {
            padding: '16px 24px',
          },
        },
      },
    },

    // Avatar - Responsive sizing
    MuiAvatar: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            width: '32px',
            height: '32px',
            fontSize: '1rem',
          },
          '@media (min-width:600px) and (max-width:960px)': {
            width: '40px',
            height: '40px',
            fontSize: '1.125rem',
          },
          '@media (min-width:960px)': {
            width: '48px',
            height: '48px',
            fontSize: '1.25rem',
          },
        },
      },
    },

    // IconButton - Responsive sizing
    MuiIconButton: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            padding: '8px',
          },
          '@media (min-width:960px)': {
            padding: '12px',
          },
        },
      },
    },

    // Grid - Responsive spacing
    MuiGrid: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            '&.MuiGrid-spacing-xs-2': {
              margin: '-8px',
              width: 'calc(100% + 16px)',
              '& > .MuiGrid-item': {
                padding: '8px',
              },
            },
          },
        },
      },
    },

    // Typography - Responsive margins
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          '@media (max-width:600px)': {
            marginBottom: '0.5em',
          },
          '@media (min-width:600px) and (max-width:960px)': {
            marginBottom: '0.6em',
          },
          '@media (min-width:960px)': {
            marginBottom: '0.75em',
          },
        },
      },
    },
  },
};

// Create the base theme
let theme = createTheme(themeOptions);

// Apply responsive font sizes automatically
// This makes typography scale smoothly across breakpoints
theme = responsiveFontSizes(theme, {
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
  factor: 2, // How much font sizes vary between breakpoints
});

// Export the responsive theme
export { theme, responsiveSpacing, breakpoints };

// Export utility type for using breakpoints in components
export type Breakpoint = keyof typeof breakpoints.values;