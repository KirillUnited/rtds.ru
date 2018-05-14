var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    rigger = require('gulp-rigger'),
    del = require('del'), // Подключаем библиотеку для удаления файлов и папок;
    rename = require('gulp-rename');

gulp.task('browser-sync', ['styles'], function () {
    browserSync.init({
        server: {
            baseDir: "src/aktsii/",
            index: 'error404.html'
        },
        notify: false
    });
});

gulp.task('styles', function () {
    return gulp.src('src/sass/*.sass')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

gulp.task('inject', function () {
    return gulp.src('src/aktsii/index-404.html')
        .pipe(rigger())
        .pipe(rename(function (path) {
            path.basename = 'error404';
        }))
        .pipe(gulp.dest('src/aktsii/'))
        .pipe(browserSync.stream());
});

var replace = require('gulp-replace');

gulp.task('replace', function () {
    return gulp.src(path.email)
        .pipe(replace(/http\:\/\/ru.msndr.net\/social\//g, imgsBase + 'img/'))
        .pipe(gulp.dest('build/'));
});

gulp.task('clean', function () {
    return del.sync('build'); // Удаляем папку перед сборкой
});

gulp.task('build', function () {
    var buildHtml = gulp.src(['!src/aktsii/index.html', 'src/aktsii/*'])
        .pipe(gulp.dest('build/aktsii'));

    var buildCss = gulp.src('src/css/*')
        .pipe(gulp.dest('build/css'));

    var buildJs = gulp.src('src/js/*')
        .pipe(gulp.dest('build/js'));

    var buildLibs = gulp.src('src/libs/**/*')
        .pipe(gulp.dest('build/libs'));

    var buildImages = gulp.src('src/images/**/*')
        .pipe(gulp.dest('build/images'));

    var buildImg = gulp.src('src/img/**/*')
        .pipe(gulp.dest('build/img'));

    var buildBitrix = gulp.src('src/bitrix/**/*')
        .pipe(gulp.dest('build/bitrix'));

    var buildFiles = gulp.src('src/upload/**/*')
        .pipe(gulp.dest('build/upload'));
});

gulp.task('watch', ['browser-sync', 'inject'], function () {
    gulp.watch('src/sass/*.sass', ['styles']);
    gulp.watch('src/template/*.html', ['inject']);
    gulp.watch('src/**/*.js').on("change", browserSync.reload);
    gulp.watch('src/**/*.html').on('change', browserSync.reload);
});

gulp.task('clear', function () {
    return cache.clearAll();
})

gulp.task('default', ['browser-sync', 'watch']);