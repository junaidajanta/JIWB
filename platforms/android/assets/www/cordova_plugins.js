cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-spinnerdialog.SpinnerDialog",
        "file": "plugins/cordova-plugin-spinnerdialog/www/spinner.js",
        "pluginId": "cordova-plugin-spinnerdialog",
        "merges": [
            "window.plugins.spinnerDialog"
        ]
    },
    {
        "id": "cordova-plugin-camera.Camera",
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "id": "cordova-plugin-camera.camera",
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverHandle",
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
        "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
        "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification_android",
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-android-imei.IMEI",
        "file": "plugins/cordova-plugin-android-imei/www/index.js",
        "pluginId": "cordova-plugin-android-imei",
        "clobbers": [
            "cordova.plugins.IMEI"
        ]
    },
    {
        "id": "cordova-plugin-datecs-printer.DatecsPrinter",
        "file": "plugins/cordova-plugin-datecs-printer/www/printer.js",
        "pluginId": "cordova-plugin-datecs-printer",
        "clobbers": [
            "DatecsPrinter"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-spinnerdialog": "1.3.2",
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-camera": "2.4.1",
    "phonegap-plugin-barcodescanner": "6.0.8",
    "cordova-plugin-dialogs": "2.0.1",
    "cordova-plugin-android-imei": "1.0.0",
    "cordova-plugin-datecs-printer": "0.8.3"
};
// BOTTOM OF METADATA
});