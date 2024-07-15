import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        "surface-surface-default-white": "#fff",
        "text-text-neutral": "#94a3b8",
        "text-text-neutral-dark": "#475569",
        "input-input-neutral-lighter": "#f8fafc",
        "text-text-default-black": "#000",
        "line-line-neutral-light": "#f1f5f9",
        "border-border-primary": "#38c274",
        "button-button-secondary-darker": "#0e1824",
        darkslategray: "#424a57",
        "view-view-primary-lighter": "#f1fcf6",
        "text-text-primary-darker": "#1b4c31",
      },
      spacing: {
        "spacing-spacing-32": "32px",
        "spacing-spacing-24": "24px",
        "spacing-spacing-48": "48px",
        "spacing-spacing-16": "16px",
        "spacing-spacing-161": "16px",
        "spacing-spacing-8": "8px",
        "spacing-spacing-4": "4px",
      },
      fontFamily: {
        "body-small": "'Baloo Bhai 2'",
        "sub-heading": "Poppins",
        "dm-sans": "'DM Sans'",
        poppins: "Poppins",
      },

      borderRadius: {
        "13xl": "32px",
        "37xl": "56px",
        "spacing-spacing-32": "32px",
        "spacing-spacing-24": "24px",
        "spacing-spacing-16": "16px",
        "radius-radius-56": "56px",
        "spacing-spacing-56": "56px",
        "spacing-spacing-4": "4px",
      },
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      base: "16px",
      xs: "12px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq398: {
        raw: "screen and (max-width: 398px)",
      },
      mq350small: {
        raw: "screen and (max-width: 350px)",
      },
      mq257: {
        raw: "screen and (max-width: 257px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
export default config;
