export const BASENAME = '';

const ROUTES = {
  MAIN: `${process.env.PUBLIC_URL}/`,
  DOCTORS: `${process.env.PUBLIC_URL}/doctors`,
  PHARMACY: `${process.env.PUBLIC_URL}/pharmacy`,
  DIAGNOSTICS: `${process.env.PUBLIC_URL}/diagnostics`,
  ABOUT_US: `${process.env.PUBLIC_URL}/about-us`,
  SPECIALITY: `${process.env.PUBLIC_URL}/speciality/:slug`,
};

export default ROUTES;
