if(process.env.NODE_ENV === 'production') {
    require('./.gulp/build-production')
} else {
    require('./.gulp/server');
    require('./.gulp/build-dev');
    require('./.gulp/watch');
}
