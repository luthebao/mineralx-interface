import { ThemeOptions } from "@material-ui/core";

const coreTheme: ThemeOptions = {
    shape: {
        borderRadius: 12
    },
    typography: {
        fontFamily: [
            '"Atyp Text"',
            'sans-serif'
        ].join(","),
        h1: {
            // Portfolio balance numbers
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: 1.167,
            ["@media (max-width:576px)"]: {
                // eslint-disable-line no-useless-computed-key
                fontSize: "1.6rem"
            }
        },
        h2: {
            // Navigation tabs / section headers
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: 1.5,
            ["@media (max-width:576px)"]: {
                // eslint-disable-line no-useless-computed-key
                fontSize: "1rem"
            }
        },
        h3: {
            // yearn title text YEARN
            fontFamily: [
                '"Ubuntu"',
                'sans-serif'
            ].join(","),
            fontSize: "1.5rem",
            fontWeight: 700,
            lineHeight: 1.167,
            ["@media (max-width:576px)"]: {
                // eslint-disable-line no-useless-computed-key
                fontSize: "1.2rem"
            }
        },
        h4: {
            // yearn title text finance
            fontSize: "1.5rem",
            letterSpacing: "0.3rem",
            fontWeight: 300,
            lineHeight: 1.167,
            ["@media (max-width:576px)"]: {
                // eslint-disable-line no-useless-computed-key
                fontSize: "1.2rem"
            }
        },
        h5: {
            // card headers
            fontSize: "0.9rem",
            fontWeight: 700,
            lineHeight: 1.167,
            ["@media (max-width:576px)"]: {
                // eslint-disable-line no-useless-computed-key
                fontSize: "0.7rem"
            }
        },
        h6: {
            // card headers
            fontSize: "1.5rem",
            fontWeight: 700,
            lineHeight: 1.167,
            ["@media (max-width:576px)"]: {
                // eslint-disable-line no-useless-computed-key
                fontSize: "1.2rem"
            }
        },
        subtitle1: {
            fontSize: "0.9rem",
            fontWeight: 300,
            lineHeight: 1.167,
            ["@media (max-width:576px)"]: {
                // eslint-disable-line no-useless-computed-key
                fontSize: "0.7rem"
            }
        },
        body1: {
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: 1.167,
            ["@media (max-width:576px)"]: {
                // eslint-disable-line no-useless-computed-key
                fontSize: "0.8rem"
            }
        }
    },
    palette: {
        primary: {
            main: "rgba(0, 0, 0, 0.87)"
        },
        secondary: {
            main: "#FFFFFF"
        },
        error: {
            main: "#dc3545"
        }
    },
    overrides: {
        MuiButton: {
            root: {
                minWidth: "50px"
            },
            outlinedSizeSmall: {
                fontSize: "0.7rem",
                padding: "6px 9px",
                ["@media (max-width:576px)"]: {
                    // eslint-disable-line no-useless-computed-key
                    padding: "3px 0px"
                }
            },
            sizeLarge: {
                padding: "19px 24px",
                minWidth: "150px"
            },
            textSizeLarge: {
                fontSize: "2.4rem",
                ["@media (max-width:576px)"]: {
                    // eslint-disable-line no-useless-computed-key
                    fontSize: "2rem"
                }
            }
        },
        MuiDialog: {

            paperWidthSm: {
                maxWidth: "800px"
            }
        },

        MuiSnackbar: {
            root: {
                maxWidth: "calc(100vw - 24px)"
            },
            anchorOriginBottomLeft: {
                bottom: "12px",
                left: "12px",
                "@media (min-width: 960px)": {
                    bottom: "50px",
                    left: "80px"
                }
            }
        },
        MuiAccordion: {
            root: {
                margin: "0px",
                "&:before": {
                    //underline color when textfield is inactive
                    backgroundColor: "none",
                    height: "0px"
                },
                "&$expanded": {
                    margin: "0px"
                }
            }
        },
        MuiAccordionSummary: {
            root: {
                padding: "0px 24px",
                "@media (max-width:576px)": {
                    padding: "0px 6px"
                }
            },
            content: {
                margin: "0px !important"
            }
        },
        MuiAccordionDetails: {
            root: {
                padding: "0"
            }
        },
        MuiTableCell: {
            head: {
                padding: "26px 24px"
            },
            body: {
                padding: "12px 24px",
                borderBottom: "none"
            }
        },
        MuiInput: {
            underline: {
                '&:before': { //underline color when textfield is inactive
                    borderBottom: 'none !important'
                },
                '&:after': { //underline color when textfield is active
                    borderBottom: '1px solid white',
                },
                '&:hover:not($disabled):before': { //underline color when hovered
                    borderBottom: 'none !important'
                },
            }
        }
    }
};

export default coreTheme;
