const colors = {
  black: '#000',
  white: '#fff',
  grays: {
    900: '#fafafa',
    800: '#ddd',
    700: '#999'
  },
  danger: {
    dark: '#7B0218',
    default: '#c4063c',
    light: '#ef6894',
    lighter: '#FEDDE4'
  },
  success: {
    default: '#3ba60a',
    light: '#98DF6D',
    dark: '#288210'
  }
};

const link = {
  textColor: {
    default: '#3a506b',
    disabled: '#5e7389',
    hover: '#003249',
    visited: '#29274c'
  }
};

export const theme = {
  colors,
  fonts: {
    copy: `
    -apple-system,
   BlinkMacSystemFont,
   "Segoe UI",
   Roboto,
   Helvetica,
   Arial,
   sans-serif,
   "Apple Color Emoji",
   "Segoe UI Emoji",
   "Segoe UI Symbol"`
  },
  components: {
    button: {
      default: {
        background: {
          default: colors.white,
          hover: colors.grays[900],
          disabled: colors.grays[800]
        },
        border: {
          color: {
            default: colors.black,
            hover: colors.black,
            disabled: colors.grays[700]
          }
        },
        textColor: {
          default: colors.black,
          hover: colors.black,
          disabled: colors.grays[700]
        }
      },
      danger: {
        background: {
          default: colors.danger.default,
          hover: colors.danger.dark,
          disabled: colors.danger.lighter
        },
        border: {
          color: {
            default: colors.danger.default,
            hover: colors.danger.dark,
            disabled: colors.danger.lighter
          }
        },
        textColor: {
          default: colors.white,
          hover: colors.white,
          disabled: colors.white
        }
      },
      success: {
        background: {
          default: colors.success.default,
          hover: colors.success.dark,
          disabled: colors.success.light
        },
        border: {
          color: {
            default: colors.success.default,
            hover: colors.success.dark,
            disabled: colors.success.light
          }
        },
        textColor: {
          default: colors.white,
          hover: colors.white,
          disabled: colors.white
        }
      },
      link: {
        background: {
          default: 'none',
          hover: 'none',
          disabled: 'none'
        },
        border: {
          color: {
            default: 'none',
            hover: 'none',
            disabled: 'none'
          }
        },
        textColor: {
          default: link.textColor.default,
          hover: link.textColor.hover,
          disabled: link.textColor.disabled
        }
      }
    },
    input: {
      borderColor: colors.grays[800],
      borderColorBottom: colors.grays[700]
    },
    link
  },
  spacing: {
    vertical: { value: 16, unit: 'px' }
  },
  breakpoints: {
    smMax: '767px',
    mdMin: '768px',
    mdMax: '1024px',
    lgMin: '1025px'
  }
};

export type KritzelThemeType = typeof theme;
