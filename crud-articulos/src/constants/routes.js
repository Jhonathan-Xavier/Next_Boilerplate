const publicRoutes = {
    ARTICLES: "/articulos",
    ABOUT: "/about",
};

const privateRoutes = {
    HOME: "/",
};

const Routes = {
    ...publicRoutes,
    ...privateRoutes,
};
export default Routes