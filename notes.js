
// gulp.task('js-inject', ['jade', 'move'], function () {
  
//   return gulp.src('./dist/index.html', { base: './dist/'})
//   .pipe(inject(gulp.src(['./dist/**/*.js']).pipe(angularFilesort()), {
//     relative: false,
//     transform: function (filepath) {
//       return '<script type="text/javascript" src="' + filepath.replace("/dist","") + '"></script>';
//     }
//   }))
//   .pipe(gulp.dest('./dist'));
// });

gulp.task('css-inject', ['jade', 'move'], function () {
  
  return gulp.src('./dist/index.html', { base: './dist/'})
  .pipe(inject(gulp.src(['./dist/**/*.css'], {read: true})), {
    relative: false,
    transform: function (filepath) {
      return '<link rel="stylesheet" href="' + filepath.replace("/dist","") + '">';
    }
  })
  .pipe(gulp.dest('./dist'));
});
// 
// gulp.task('bower', function() {
  return gulp.src(bower({
    paths: {
        bowerDirectory: './client/assets/lib',
        bowerrc: './.bowerrc',
        bowerJson: './bower.json'
    }
  }))
  .pipe(gulp.dest('./dist/lib'));
});

Chief Executive Officer - Physician Practice $201,301
Electric/Electronics Technician I