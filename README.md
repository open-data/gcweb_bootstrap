<!-- @file Project Page -->
# GCWeb Bootstrap

A light-weight, accessible and responsive theme integrated with 
Government of Canada's Web Experience Toolkit (WET) front-end 
framework for [GCWeb][linkGCWeb] and powered by [Bootstrap][linkBootstrap] 
as base theme for faster and easier web development. 

The theme utilizes WET-BOEW Centrally Deployed Templates Solution (CDTS) 
to adhere to common look and feel with Canada.ca.

### Requirements
For composer to gather libraries, define the following under repository section of composer:
```sh
"repositories": [
    {
        "type": "composer",
        "url": "https://packages.drupal.org/8"
    },
    {
        "type"    : "package",
        "package" : {
            "name"    : "wet-boew/wet-boew",
            "version" : "v4.0.31",
            "type"    : "drupal-library",
            "dist"    : {
                "url"  : "https://github.com/wet-boew/wet-boew-cdn/archive/v4.0.31.tar.gz",
                "type" : "tar"
            },
            "source"  : {
                "url"       : "https://github.com/wet-boew/wet-boew-cdn.git",
                "type"      : "git",
                "reference" : "v4.0.31"
            }
        }
    },
    {
        "type"    : "package",
        "package" : {
            "name"    : "wet-boew/theme-gcweb",
            "version" : "v5.1",
            "type"    : "drupal-library",
            "dist"    : {
                "url"  : "https://github.com/wet-boew/themes-cdn/archive/v5.1-gcweb.tar.gz",
                "type" : "tar"
            },
            "source"  : {
                "url"       : "https://github.com/wet-boew/themes-cdn.git",
                "type"      : "git",
                "reference" : "v5.1-gcweb"
            }
        }
    }
],
```


### Installation
- Use composer to install theme
```sh
composer require opengov/gcweb
```

### Configuration
To enable the GCWeb theme navigate to Manage->Appearance, select 
Install and set as default under GCWeb.

<!-- Links Referenced -->
[linkGCWeb]:     https://github.com/wet-boew/GCWeb
[linkBootstrap]: https://github.com/drupalprojects/bootstrap
