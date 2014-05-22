Package.describe({
    summary: 'Famous compiled as globals.'
});

Package.on_use(function (api) {
    api.add_files([
        'polyfills.min.js',
        'famous.min.js',
        'famous.css'
    ], 'client');

    api.export('Famous', 'client');
});