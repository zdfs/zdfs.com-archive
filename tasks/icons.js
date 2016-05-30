var glob = require("glob");
var gulp = require("gulp");
var gulpicon = require("gulpicon/tasks/gulpicon");
var config = require("gulpicon/example/config.js");
var files = glob.sync("./html/iconic/svg/*.svg");

config.dest = "./html/iconic";

gulp.task("icons", gulpicon(files, config));