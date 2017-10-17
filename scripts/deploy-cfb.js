var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish('build', {
    repo: 'https://github.com/codeforboston/cliff-effects.git'
});
