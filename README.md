# T-Gen

Dynamically Create Bootstrap Tables from JSON String with fields corresponding to a map.

## Requirements

* Bootstrap 3+
* JQuery

## Usage

* Create a map between column names and the fields in the JSON String

```js
var json_map = {
	"size" : "tshirt_size",
	"tgiven" : "tshirt_given",
	"fgiven" : "fcard_given",
	"egiven" : "extra_given"
}
```

* Make sure that the JSON String is an array of JSON Objects.

* Call the function with the parent JQuery object

```js
addTableFromJSON($("#parent1"),jsonString, json_map);
```

* See `example/seeder_script.js` for usage.

:copyright: 2015 Gokul Srinivas