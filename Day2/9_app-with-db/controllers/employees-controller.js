const da = require('../data-access');

exports.index = (req, res) => {
    da.getAllEmployees().then(result => {
        res.render("employees/index", { pageTitle: "Employees View", empList: result, message: "" });
    }, eMsg => {
        res.render("employees/index", { pageTitle: "Employees View", empList: null, message: eMsg });
    });
}

exports.details = (req, res) => {
    var rid = req.params.rid;

    da.getEmployee(rid).then(result => {
        res.render("employees/details", { pageTitle: "Employee Details View", employee: result, message: "" });
    }, eMsg => {
        res.render("employees/details", { pageTitle: "Employee Details View", employee: null, message: eMsg });
    });
}

exports.create_get = (req, res) => {
    res.render("employees/create", { pageTitle: "Create Employee View" });
}

exports.create_post = (req, res) => {
    var { eid, ename } = req.body;
    var employee = { id: parseInt(eid), name: ename };

    da.insertEmployee(employee).then(result => {
        res.redirect('/employees');
    }, eMsg => {
        res.render("employees/create", { pageTitle: "Create Employee View", employee: employee, message: eMsg });
    });
}

exports.edit_get = (req, res) => {
    var rid = req.params.rid;

    da.getEmployee(rid).then(result => {
        res.render("employees/edit", { pageTitle: "Employee Edit View", employee: result, message: "" });
    }, eMsg => {
        res.render("employees/edit", { pageTitle: "Employee Edit View", employee: null, message: eMsg });
    });
}

exports.edit_post = (req, res) => {
    var rid = req.params.rid;
    var { eid, ename } = req.body;
    var employee = { id: parseInt(eid), name: ename };

    da.updateEmployee(rid, employee).then(result => {
        res.redirect('/employees');
    }, eMsg => {
        res.render("employees/edit", { pageTitle: "Employee Edit View", employee: null, message: eMsg });
    });
}

exports.delete_get = (req, res) => {
    var rid = req.params.rid;
    da.getEmployee(rid).then(result => {
        res.render("employees/delete", { pageTitle: "Employee Delete View", employee: result, message: "" });
    }, eMsg => {
        res.render("employees/delete", { pageTitle: "Employee Delete View", employee: result, message: eMsg });
    });
}

exports.delete_post = (req, res) => {
    var rid = req.params.rid;

    da.deleteEmployee(rid).then(result => {
        res.redirect('/employees');
    }, eMsg => {
        res.render("employees/delete", { pageTitle: "Employee Delete View", employee: employee, message: eMsg });
    });
}