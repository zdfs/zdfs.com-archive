var glob = require("glob");
var gulp = require("gulp");
var gulpicon = require("gulpicon/tasks/gulpicon");
var config = require("gulpicon/example/config.js");
var files = glob.sync("./html/assets/iconic/svg/*.svg");

config.dest = "./html/assets/iconic";

gulp.task("icons", gulpicon(files, config));