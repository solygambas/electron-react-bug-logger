# BugLogger App and Electron projects

This repo is made of 3 projects:

1. [**Image Shrink**](#imageshrink): An image optimizer app to understand Electron basics.

## <a name="imageshrink"></a>1) Image Shrink

An image optimizer app to understand Electron basics.

[See image-shrink folder](https://github.com/solygambas/electron-image-shrink/tree/master/image-shrink)

<p align="center">
    <img src="image-shrink/screenshot.png">
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

Based on [Electron From Scratch: Build Desktop Apps With JavaScript](https://www.udemy.com/course/electron-from-scratch/) by Brad Traversy (2020).
