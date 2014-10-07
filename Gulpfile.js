var gulp = require('gulp');
var shell = require('gulp-shell');
var notify = require('gulp-notify');

gulp.task('latex', function () {
    gulp.src('*.tex', {read: false})
        .pipe(shell(['pdflatex --halt-on-error <%= file.relative %>']))
        .on('error', notify.onError('Error: <%= error.message %> unable to compile latex'))
        .pipe(notify({
            title: 'Latex',
            message: '<%= file.relative %> compiled succesfully.'
        }));
});

gulp.task('watch', function () {
    gulp.watch('*.tex', ['latex']);
});

gulp.task('default', ['latex', 'watch']);
