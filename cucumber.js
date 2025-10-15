module.exports ={
    default: {
        require: [
            "tests/steps/*.steps.js",
            "tests/support/execution.js",
            "tests/support/hooks.js"
        ],
        paths: ["tests/features/*.feature"],
        publishQuiet: true,
        format: [
            "progress",
            "html:reports/cucumber-report.html"
        ]
    }
}