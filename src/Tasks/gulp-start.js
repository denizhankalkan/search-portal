import { task } from "gulp";
import nodemon from "gulp-nodemon";

task("start", ["build"], function(){
    return nodemon({script: "index.js"});
});