const {src, dist, watch} = require('gulp');

const fileChanged = (done) => {
    console.log('File changed');

    done();
}


const dirChanged = (done) => {
    console.log('Structure changed');

    done();
}

function watcher() {
    watch('./dist/**/*', { events: 'change' }, fileChanged);
    watch('./dist/**/*', { events: ['add', 'unlink'] }, dirChanged)
}

exports.watcher = watcher;