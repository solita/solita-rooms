# General

Developed using ClojureScript using the following libraries: Reagent, Tuck, stylefy & Bootstrap 4.

# Configuration

Go to src/cljs/rooms/ui and rename config_init.cljs.template to config_init.cljs

Configure the following things:
- :locations, contains a list of the possible office locations and their matching filter names
- :fetching, base-url contains the Rooms backend API url, which is used to fetch the rooms and their bookings per day.

Now you are ready to compile the application and deploy it.

# Compile production

Install Leiningen: https://leiningen.org/

```bash
lein cljsbuild once production
```

# Deploy

Copy files inside **public** into your web server.

The following files inside **public** can be deleted on the production server:
- index_dev.html
- js/compiled/dev

# Develop

Install Leiningen: https://leiningen.org/

Start ClojureScript -> JS autocompile:

```bash
lein figwheel
```

Start web server:

```bash
cd resources/public
python -m SimpleHTTPServer 8000
```

Now point your browser to http://localhost:8000/index_dev.html

# Run tests

```bash
lein test
```
