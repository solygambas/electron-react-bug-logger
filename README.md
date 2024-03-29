# Bug Logger App and Electron projects

An app bug tracker for teams using React, Electron, MongoDB and Mongoose (plus 2 other Electron projects).

| #   | Project                          | Description                                                               |
| --- | -------------------------------- | ------------------------------------------------------------------------- |
| 01  | [**Image Shrink**](#imageshrink) | An image optimizer app to understand Electron basics.                     |
| 02  | [**SysTop**](#systop)            | An app to monitor CPU usage.                                              |
| 03  | [**Bug Logger**](#buglogger)     | An app bug tracker for teams using React, Electron, MongoDB and Mongoose. |

## <a name="imageshrink"></a>1) Image Shrink

An image optimizer app to understand Electron basics.

[See image-shrink folder](image-shrink)

<p align="center">
    <a href="image-shrink">
        <img src="image-shrink/screenshot.png">
    </a>
</p>

### Features

- loading a window file and adding an icon.
- using Nodemon with Electron.
- creating a menu template, using roles and global shortcuts.
- building the interface with Materialize CSS and Font Awesome.
- integrating with Node and handling IPC communication.
- implementing Imagemin with mozjpeg and pngquant to shrink JPEG and PNG files.
- sending events to renderer and displaying a user-friendly notification.
- enabling log files with electron-log.
- packaging our app with electron-packager and testing it.

## <a name="systop"></a>2) SysTop

An app to monitor CPU usage.

[See systop folder](systop)

<p align="center">
    <a href="systop">
        <img src="systop/screenshot.png">
    </a>
</p>

### Features

- using a boilerplate and creating the interface.
- getting static and dynamic system stats with node-os-utils.
- monitoring CPU overload with a user-friendly progress bar.
- displaying alerts at regular interval with Notifications API.
- storing user settings on local data.
- creating a tray icon and handling clicks.
- extending MainWindow class.
- packaging our app with electron-packager and testing it.

## <a name="buglogger"></a>3) Bug Logger

An app bug tracker for teams using React, Electron, MongoDB and Mongoose.

[See bug-logger folder](bug-logger)

<p align="center">
    <a href="bug-logger">
        <img src="bug-logger/screenshot.png">
    </a>
</p>

### Features

- customizing a React-Electron boilerplate.
- creating the interface with React Bootstrap.
- formatting dates with Moment.
- displaying user-friendly alerts.
- connecting to MongoDB Atlas with Mongoose.
- defining a log model.
- using IPC to communicate between Main and Renderer.
- getting logs from database, adding and deleting logs.
- building a custom menu item to clear all logs.
- packaging our app with Webpack and electron-packager.

Based on [Electron From Scratch: Build Desktop Apps With JavaScript](https://www.udemy.com/course/electron-from-scratch/) by Brad Traversy (2020).
