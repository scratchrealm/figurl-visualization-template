# figurl-visualization-template

Figurl visualization template

This project uses [kachery-cloud](https://github.com/scratchrealm/kachery-cloud) and [figurl](https://github.com/scratchrealm/figurl2).

> **IMPORTANT**: This package is intended for collaborative sharing of data for scientific research. It should not be used for other purposes.

## Installation and setup

It is recommended that you use a conda environment with Python >= 3.8 and numpy.

```bash
# clone this repo
git clone <this-repo>

cd figurl-visualization-template
pip install -e .
```

Configure your [kachery-cloud](https://github.com/scratchrealm/kachery-cloud) client (only do this once on your computer)

```bash
kachery-cloud-init
# follow the instructions to associate your client with your Google user name on kachery-cloud
```

## Basic usage

```python
from figurl_visualization_template import VisualizationExample

X = VisualizationExample(text="some-sample-text")
url = X.url(label='Visualization template')
print(url)
```

## For developers

The front-end code is found in the [gui/](gui/) directory. It uses typescript/react and is deployed as a [figurl](https://github.com/scratchrealm/figurl2) visualization plugin.

You can run a local development version of this via:

```bash
cd gui
# One-time install
yarn install 

# Start the web server
yarn start
```

Then replace `v=...` by `v=http://localhost:3000` in the URL you are viewing. Updates to the source code will live-update the view in the browser. If you improve the visualization, please contribute by creating a PR.
