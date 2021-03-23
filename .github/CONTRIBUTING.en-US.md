# VueCesium Contributing Guide

Hi! Thank you for choosing VueCesium.

VueCesium is a set of open source component libraries for GISer, which aims to quickly build Cesium-based 3D WebGIS pages. It is developed based on Vue 3.0 and provides supporting documentation and examples.

We are excited that you are interested in contributing to VueCesium. Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

## Issue Guidelines

- Issues are exclusively for bug reports, feature requests and design-related topics. Other questions may be closed directly. If any questions come up when you are using VueCesium, please email for help.

- Before submitting an issue, please check if similar problems have already been issued.

- Please specify which version of `VueCesium` and `Vue` you are using, and provide OS and browser information. [JSFiddle](https://jsfiddle.net/) is recommended to build a live demo so that your issue can be reproduced clearly.

## Pull Request Guidelines

- Fork this repository to your own account. Do not create branches here.

- Commit info should be formatted as `[Component Name]: Info about commit.` (e.g. `Button: Fix xxx bug`)

- **DO NOT** include files inside `lib` directory.

- Make sure that running `npm run build` outputs the correct files.

- Rebase before creating a PR to keep commit history clear.

- Make sure PRs are created to `dev` branch instead of `master` branch.

- If your PR fixes a bug, please provide a description about the related bug.

- Merging a PR takes two maintainers: one approves the changes after reviewing, and then the other reviews and merges.
