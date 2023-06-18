const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const del = require("del");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");

gulp.task("styles", () => {
  return gulp
    .src("styles/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("all.scss"))
    .pipe(autoprefixer())
    .pipe(rename("styles.css"))
    .pipe(gulp.dest("styles/css"));
});

gulp.task("clean", (done) => {
  del(["styles/css/styles.css"]);
  done();
});

gulp.task("watch", () => {
  gulp.watch("styles/scss", (done) => {
    gulp.series(["clean", "styles"])(done);
  });
});

gulp.task("build", (done) => {
  gulp.series(["clean", "styles"])(done);
});
