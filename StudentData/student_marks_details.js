"use strict";
var studentdata = (function () {
    function studentdata() {
        this.list = [{ subject: 'physics', marks: 40 },
            { subject: 'math', marks: 50 },
            { subject: 'chem', marks: 60 },
            { subject: 'bio', marks: 70 }];
    }
    return studentdata;
}());
exports.studentdata = studentdata;
