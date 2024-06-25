import gulp from 'gulp';

import path from '../config/path.js';

import svgSprite from 'gulp-svg-sprite';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';


const sprite = function() {
    return gulp.src(path.sprite.src)
        .pipe(plumber({
            errorHandler: notify.onError(error =>({
                title: 'SVG-Sprite',
                message: error.message
            }))
        }))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: '../sprite.svg',
                },
            },
            shape: {
                transform: [
                    {
                        svgo: {
                            js2svg: { indent: 4, pretty: true },
                            plugins: [
                                {
                                    name: 'removeAttrs',
                                    params: {
                                        attrs: '(fill|stroke)',
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }))
        .pipe(gulp.dest(path.sprite.dest));
}

export default sprite;