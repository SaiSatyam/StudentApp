"use strict";
var shell = (function () {
    function shell() {
    }
    shell.prototype.configureRouter = function (config, router) {
        this.router = router;
        config.title = "Capital";
        config.map([
            { route: ['', 'login'], moduleId: 'Login/login', title: 'Login', nav: true },
            { route: 'some', moduleId: 'Region/Region', title: 'Some', nav: true },
            { route: 'ContactUs', moduleId: 'ContactUs/ContactUs', title: 'contactus', nav: true },
            { route: 'StudentData', moduleId: 'StudentData/RetrievingDetails', title: 'Student', nav: true }
        ]);
    };
    return shell;
}());
exports.shell = shell;
