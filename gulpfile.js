const gulp = require('gulp');
const pug = require('gulp-pug');
const connect = require('gulp-connect');
const livereload = require('gulp-livereload');

const nodemon = require('gulp-nodemon');

gulp.task('thrift', () => {
    return gulp.src('src/thrift.js')
        .pipe(gulp.dest('dist/woody'));
});

gulp.task('index', () => {
    return gulp.src('sample/index.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

// gulp.task('connectDist', () => {
//     connect.server({
//         root: 'dist',
//         host: '127.0.0.1',
//         port: 8000
//     });
// });

gulp.task('watch', () => {
    livereload.listen();
    gulp.watch('sample/index.pug', ['index']);
    gulp.watch('src/thrift.js', ['thrift']);
});

gulp.task('thriftServer', () => {
    var started = false;
    return nodemon({
        script: 'dist/thrift-server.js'
    }).on('start', () => {
        if (!started) {
            cb();
            started = true;
        }
    });
});

gulp.task('default', ['thrift', 'index', 'watch']);
