//Require node module dependancies
const gulp = require("gulp");
const browserSync = require("browser-sync").create();

//Gulp Task Called Serve
gulp.task("serve", function () {
    browserSync.init({
        server: "./www"
        //Select Parent directory for files to be served
    });
    gulp.watch("www/*/*.{html,css,js}").on("change", browserSync.reload);
    //Use Gulp Watch to monitor changes to all HTML, CSS and JS files in www, and reload the browser
});

//Default task to run when the script begins
gulp.task("default", ["serve"]);
